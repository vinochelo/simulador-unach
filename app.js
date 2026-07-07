/* app.js - Motor y Lógica del Simulador UNACH 2026 */

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
const state = {
    activeView: 'dashboard',
    settings: {
        theme: 'dark',
        sound: true,
        geminiKey: ''
    },
    exam: {
        length: 20,
        timerEnabled: true,
        mode: 'exam', // 'exam' o 'practice'
        questions: [],
        currentIndex: 0,
        answers: {}, // { questionId: selectedOptionIndex }
        flagged: new Set(),
        timeSpent: 0,
        timerInterval: null,
        duration: 1200 // Duración en segundos (20 min por defecto)
    },
    stats: {
        totalExams: 0,
        totalPractices: 0,
        averageScore: 0,
        categoryStats: {
            'Razonamiento Numérico': { correct: 0, total: 0 },
            'Razonamiento Lógico': { correct: 0, total: 0 },
            'Aptitud Verbal': { correct: 0, total: 0 },
            'Capacidad de Atención y Concentración': { correct: 0, total: 0 }
        }
    }
};

// --- SINTETIZADOR DE AUDIO (Web Audio API) ---
const SoundEffects = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    play(type) {
        if (!state.settings.sound) return;
        try {
            this.init();
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const now = this.ctx.currentTime;

            if (type === 'tap') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'success') {
                // Acorde agradable (C mayor arpegiado rápido)
                const playTone = (freq, delay, dur) => {
                    const o = this.ctx.createOscillator();
                    const g = this.ctx.createGain();
                    o.connect(g);
                    g.connect(this.ctx.destination);
                    o.type = 'triangle';
                    o.frequency.setValueAtTime(freq, now + delay);
                    g.gain.setValueAtTime(0.08, now + delay);
                    g.gain.linearRampToValueAtTime(0.01, now + delay + dur);
                    o.start(now + delay);
                    o.stop(now + delay + dur);
                };
                playTone(523.25, 0, 0.15); // C5
                playTone(659.25, 0.04, 0.15); // E5
                playTone(783.99, 0.08, 0.25); // G5
            } else if (type === 'error') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.linearRampToValueAtTime(80, now + 0.35);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
                osc.start(now);
                osc.stop(now + 0.35);
            } else if (type === 'finish') {
                // Acorde triunfal ascendente
                const playTone = (freq, delay, dur) => {
                    const o = this.ctx.createOscillator();
                    const g = this.ctx.createGain();
                    o.connect(g);
                    g.connect(this.ctx.destination);
                    o.type = 'sine';
                    o.frequency.setValueAtTime(freq, now + delay);
                    g.gain.setValueAtTime(0.1, now + delay);
                    g.gain.linearRampToValueAtTime(0.001, now + delay + dur);
                    o.start(now + delay);
                    o.stop(now + delay + dur);
                };
                playTone(261.63, 0, 0.3); // C4
                playTone(329.63, 0.1, 0.3); // E4
                playTone(392.00, 0.2, 0.3); // G4
                playTone(523.25, 0.3, 0.5); // C5
            }
        } catch (e) {
            console.warn("Error sintetizando audio:", e);
        }
    }
};

// --- PERSISTENCIA LOCAL ---
const Storage = {
    save() {
        localStorage.setItem('unach_sim_settings', JSON.stringify(state.settings));
        localStorage.setItem('unach_sim_stats', JSON.stringify(state.stats));
    },

    load() {
        const cachedSettings = localStorage.getItem('unach_sim_settings');
        if (cachedSettings) {
            state.settings = { ...state.settings, ...JSON.parse(cachedSettings) };
        }
        
        const cachedStats = localStorage.getItem('unach_sim_stats');
        if (cachedStats) {
            state.stats = { ...state.stats, ...JSON.parse(cachedStats) };
        }
    },

    reset() {
        localStorage.removeItem('unach_sim_stats');
        state.stats = {
            totalExams: 0,
            totalPractices: 0,
            averageScore: 0,
            categoryStats: {
                'Razonamiento Numérico': { correct: 0, total: 0 },
                'Razonamiento Lógico': { correct: 0, total: 0 },
                'Aptitud Verbal': { correct: 0, total: 0 },
                'Capacidad de Atención y Concentración': { correct: 0, total: 0 }
            }
        };
        this.save();
        updateDashboardUI();
    }
};

// --- NAVEGACIÓN Y ENRUTAMIENTO SPA ---
function setView(viewId) {
    state.activeView = viewId;
    
    // Activa la clase active en los botones del sidebar
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
        if (btn.getAttribute('data-view') === viewId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Activa la sección correspondiente
    document.querySelectorAll('.view-section').forEach(section => {
        if (section.id === `${viewId}-view`) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Operaciones adicionales al cambiar de vista
    if (viewId === 'dashboard') {
        updateDashboardUI();
    } else if (viewId === 'study') {
        // Selecciona la primera área de estudio por defecto si no hay ninguna activa
        const activeStudyBtn = document.querySelector('.temario-item-btn.active');
        if (!activeStudyBtn) {
            showStudyTopic('numerico');
        }
    } else if (viewId === 'settings') {
        loadSettingsUI();
    }

    // Cierra el menú en móvil si está abierto
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');

    SoundEffects.play('tap');
}

// --- LÓGICA DE LA BASE DE PREGUNTAS ---
// Distribuye uniformemente las preguntas por categoría
function generateExamQuestions(length) {
    const categories = [
        'Razonamiento Numérico',
        'Razonamiento Lógico',
        'Aptitud Verbal',
        'Capacidad de Atención y Concentración'
    ];
    
    const questionsPerCategory = Math.floor(length / categories.length);
    let selected = [];

    categories.forEach(cat => {
        // Filtramos las preguntas por categoría de la variable QUESTIONS global (cargada de questions.js)
        const catQuestions = QUESTIONS.filter(q => q.category === cat);
        
        // Barajamos/Aleatorizamos la lista de preguntas
        const shuffled = [...catQuestions].sort(() => 0.5 - Math.random());
        
        // Tomamos la cantidad necesaria
        selected.push(...shuffled.slice(0, questionsPerCategory));
    });

    // Barajamos el examen completo para mezclar las categorías de forma aleatoria
    return selected.sort(() => 0.5 - Math.random());
}

// --- MOTOR DEL SIMULADOR (EXAMEN Y PRÁCTICA) ---
function startExam() {
    // Lee configuraciones de la UI de configuración
    const qCountBtn = document.querySelector('.selector-btn.active');
    state.exam.length = parseInt(qCountBtn.getAttribute('data-val')) || 20;
    
    state.exam.timerEnabled = document.getElementById('exam-timer-toggle').checked;
    state.exam.mode = document.getElementById('exam-mode-toggle').checked ? 'practice' : 'exam';
    
    // Genera preguntas
    state.exam.questions = generateExamQuestions(state.exam.length);
    state.exam.currentIndex = 0;
    state.exam.answers = {};
    state.exam.flagged.clear();
    state.exam.timeSpent = 0;
    
    // Configura tiempos (1 min por pregunta)
    state.exam.duration = state.exam.length * 60;

    // Detiene cualquier temporizador activo previo
    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);

    // Dibuja Consola e Inicia
    setView('exam');
    updateQuestionUI();
    renderNavGridUI();

    if (state.exam.timerEnabled) {
        document.getElementById('exam-timer-display').style.display = 'flex';
        startTimer();
    } else {
        document.getElementById('exam-timer-display').style.display = 'none';
    }

    SoundEffects.play('tap');
}

function startTimer() {
    updateTimerDisplay();
    state.exam.timerInterval = setInterval(() => {
        state.exam.timeSpent++;
        
        if (state.exam.timerEnabled) {
            const timeLeft = state.exam.duration - state.exam.timeSpent;
            if (timeLeft <= 0) {
                clearInterval(state.exam.timerInterval);
                finishExam(true); // Auto finalizar por tiempo
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('exam-timer-val');
    let displayStr = "";
    
    if (state.exam.timerEnabled) {
        const timeLeft = state.exam.duration - state.exam.timeSpent;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        // Alerta de últimos 2 minutos
        if (timeLeft <= 120) {
            document.getElementById('exam-timer-display').classList.add('warning');
        } else {
            document.getElementById('exam-timer-display').classList.remove('warning');
        }
    } else {
        // Modo cronómetro ascendente
        const mins = Math.floor(state.exam.timeSpent / 60);
        const secs = state.exam.timeSpent % 60;
        displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    if (timerDisplay) {
        timerDisplay.textContent = displayStr;
    }
}

// Actualiza la visualización de la pregunta activa
function updateQuestionUI() {
    const q = state.exam.questions[state.exam.currentIndex];
    if (!q) return;

    // Categoría y contador
    const badge = document.getElementById('exam-category-badge');
    badge.textContent = q.category;
    badge.className = `exam-category-badge cat-${q.category.replace(/\s+/g, '-').toLowerCase()}`;
    
    document.getElementById('exam-question-number').textContent = `Pregunta ${state.exam.currentIndex + 1} de ${state.exam.length}`;

    // Texto de la pregunta (Enunciado)
    const textElem = document.getElementById('exam-question-text');
    
    // Si contiene HTML renderizarlo, sino usar textContent
    if (q.enunciado_html) {
        textElem.innerHTML = q.enunciado_html;
    } else {
        textElem.textContent = q.enunciado;
    }

    // Renderizar opciones
    const optionsList = document.getElementById('exam-options-list');
    optionsList.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        item.setAttribute('data-idx', idx);
        
        const letter = String.fromCharCode(65 + idx); // A, B, C, D...
        
        item.innerHTML = `
            <div class="option-letter">${letter}</div>
            <div class="option-text">${opt.text}</div>
        `;

        // Lógica de selección
        const isSelected = state.exam.answers[q.id] === idx;
        
        if (state.exam.mode === 'practice') {
            // En modo práctica muestra inmediato si ya fue contestada
            const hasAnswered = state.exam.answers[q.id] !== undefined;
            if (hasAnswered) {
                if (idx === q.correctIndex) {
                    item.classList.add('correct');
                } else if (isSelected) {
                    item.classList.add('incorrect');
                }
                item.style.pointerEvents = 'none'; // Desactiva clics adicionales
            }
        } else {
            // Modo examen común
            if (isSelected) {
                item.classList.add('selected');
            }
        }

        item.addEventListener('click', () => selectOption(idx));
        optionsList.appendChild(item);
    });

    // Caja de explicación en Modo Práctica
    const explanation = document.getElementById('exam-explanation-box');
    const hasAnswered = state.exam.answers[q.id] !== undefined;
    
    if (state.exam.mode === 'practice' && hasAnswered) {
        explanation.style.display = 'block';
        document.getElementById('exam-explanation-text').textContent = q.explanation;
        
        // Configura botón dinámico de Gemini si hay API Key
        const geminiChatContainer = document.getElementById('gemini-chat-container');
        if (state.settings.geminiKey) {
            geminiChatContainer.style.display = 'block';
            document.getElementById('gemini-ask-btn').onclick = () => askGeminiAI(q);
        } else {
            geminiChatContainer.style.display = 'none';
        }
    } else {
        explanation.style.display = 'none';
    }

    // Control de bandera para revisión
    const flagBtn = document.getElementById('exam-flag-btn');
    if (state.exam.flagged.has(q.id)) {
        flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Quitar Marca';
        flagBtn.classList.add('active');
        flagBtn.style.color = 'var(--warning)';
    } else {
        flagBtn.innerHTML = '<i class="fa-regular fa-flag"></i> Marcar';
        flagBtn.classList.remove('active');
        flagBtn.style.color = '';
    }

    // Botón Anterior deshabilitado en la primera
    document.getElementById('exam-prev-btn').disabled = state.exam.currentIndex === 0;
    
    // Botón Siguiente cambia a finalizar en la última (solo en modo examen)
    const nextBtn = document.getElementById('exam-next-btn');
    if (state.exam.currentIndex === state.exam.length - 1) {
        nextBtn.innerHTML = 'Finalizar <i class="fa-solid fa-check-double"></i>';
    } else {
        nextBtn.innerHTML = 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
    }
}

// Selecciona una opción para la pregunta activa
function selectOption(optIndex) {
    const q = state.exam.questions[state.exam.currentIndex];
    
    // Evita cambiar la respuesta en modo práctica si ya contestó
    if (state.exam.mode === 'practice' && state.exam.answers[q.id] !== undefined) return;

    state.exam.answers[q.id] = optIndex;
    
    // Reproduce sonido acorde
    if (state.exam.mode === 'practice') {
        state.stats.totalPractices++;
        Storage.save();

        if (optIndex === q.correctIndex) {
            SoundEffects.play('success');
        } else {
            SoundEffects.play('error');
        }
    } else {
        SoundEffects.play('tap');
    }

    // Actualiza la UI
    updateQuestionUI();
    
    // Actualiza el botón correspondiente en la cuadrícula de navegación
    const navBtn = document.querySelector(`.nav-q-btn[data-idx="${state.exam.currentIndex}"]`);
    if (navBtn) navBtn.classList.add('answered');

    // Auto-avance de 0.5s en Modo Práctica si es correcto, para fluidez
    if (state.exam.mode === 'practice' && optIndex === q.correctIndex) {
        setTimeout(() => {
            if (state.exam.currentIndex < state.exam.length - 1) {
                nextQuestion();
            }
        }, 800);
    }
}

// Navegación
function nextQuestion() {
    if (state.exam.currentIndex < state.exam.length - 1) {
        state.exam.currentIndex++;
        updateQuestionUI();
        highlightActiveNavBtn();
        SoundEffects.play('tap');
    } else {
        // Clic en Finalizar
        finishExam();
    }
}

function prevQuestion() {
    if (state.exam.currentIndex > 0) {
        state.exam.currentIndex--;
        updateQuestionUI();
        highlightActiveNavBtn();
        SoundEffects.play('tap');
    }
}

function toggleFlag() {
    const q = state.exam.questions[state.exam.currentIndex];
    const navBtn = document.querySelector(`.nav-q-btn[data-idx="${state.exam.currentIndex}"]`);

    if (state.exam.flagged.has(q.id)) {
        state.exam.flagged.delete(q.id);
    } else {
        state.exam.flagged.add(q.id);
    }
    
    if (navBtn) {
        if (state.exam.flagged.has(q.id)) {
            navBtn.classList.add('flagged');
        } else {
            navBtn.classList.remove('flagged');
        }
    }
    
    updateQuestionUI();
    SoundEffects.play('tap');
}

// Renderiza la cuadrícula lateral de navegación
function renderNavGridUI() {
    const grid = document.getElementById('exam-nav-grid');
    grid.innerHTML = '';

    state.exam.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-q-btn';
        btn.textContent = idx + 1;
        btn.setAttribute('data-idx', idx);
        
        if (state.exam.answers[q.id] !== undefined) {
            btn.classList.add('answered');
        }
        if (state.exam.flagged.has(q.id)) {
            btn.classList.add('flagged');
        }
        if (idx === state.exam.currentIndex) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            state.exam.currentIndex = idx;
            updateQuestionUI();
            highlightActiveNavBtn();
            SoundEffects.play('tap');
        });

        grid.appendChild(btn);
    });
}

function highlightActiveNavBtn() {
    document.querySelectorAll('.nav-q-btn').forEach(btn => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        if (idx === state.exam.currentIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Finaliza el examen y procesa resultados
function finishExam(autoSubmitByTime = false) {
    if (!autoSubmitByTime) {
        // Valida si falta responder preguntas en modo examen
        const unansweredCount = state.exam.questions.length - Object.keys(state.exam.answers).length;
        if (unansweredCount > 0) {
            const confirmFinish = confirm(`Te faltan ${unansweredCount} preguntas por responder. ¿Estás seguro de que quieres finalizar el examen?`);
            if (!confirmFinish) return;
        }
    } else {
        alert("¡Tiempo agotado! Tu examen se ha calificado automáticamente.");
    }

    // Detener temporizador
    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);

    // Calcular estadísticas del examen
    let correctCount = 0;
    const catExamStats = {};

    state.exam.questions.forEach(q => {
        const userAns = state.exam.answers[q.id];
        const isCorrect = userAns === q.correctIndex;
        
        if (isCorrect) correctCount++;

        // Sumar al registro de categorías
        if (!catExamStats[q.category]) {
            catExamStats[q.category] = { correct: 0, total: 0 };
        }
        catExamStats[q.category].total++;
        if (isCorrect) catExamStats[q.category].correct++;

        // Sumar a las estadísticas generales históricas
        state.stats.categoryStats[q.category].total++;
        if (isCorrect) state.stats.categoryStats[q.category].correct++;
    });

    // Guardar estadísticas generales
    state.stats.totalExams++;
    const examScorePercent = Math.round((correctCount / state.exam.length) * 100);
    
    // Promedio ponderado
    if (state.stats.totalExams === 1) {
        state.stats.averageScore = examScorePercent;
    } else {
        state.stats.averageScore = Math.round(((state.stats.averageScore * (state.stats.totalExams - 1)) + examScorePercent) / state.stats.totalExams);
    }

    Storage.save();
    SoundEffects.play('finish');

    // Dibuja la vista de resultados
    renderResultsUI(correctCount, examScorePercent, catExamStats);
    setView('results');
}

// --- RENDERIZACIÓN DE RESULTADOS ---
function renderResultsUI(correctCount, percent, catStats) {
    // Configura círculos y textos de porcentaje
    const scoreVal = document.getElementById('results-score-val');
    scoreVal.textContent = `${correctCount}/${state.exam.length}`;
    
    const scorePercent = document.getElementById('results-score-percent');
    scorePercent.textContent = `${percent}%`;

    const circle = document.getElementById('results-circle-fill');
    // Circunferencia del círculo es ~440px. El stroke-dashoffset controla el relleno.
    const offset = 440 - (440 * percent) / 100;
    circle.style.strokeDashoffset = offset;

    // Tiempo transcurrido
    const mins = Math.floor(state.exam.timeSpent / 60);
    const secs = state.exam.timeSpent % 60;
    document.getElementById('results-time-val').textContent = `${mins}m ${secs}s`;

    // Tabla de efectividad por categoría
    const tbody = document.getElementById('results-categories-tbody');
    tbody.innerHTML = '';

    for (const [cat, data] of Object.entries(catStats)) {
        const catPercent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${cat}</strong></td>
            <td>${data.correct} de ${data.total}</td>
            <td>
                <div class="d-flex align-items-center gap-3">
                    <div class="progress-bar-container" style="width: 100px; margin-bottom: 0;">
                        <div class="progress-bar-fill" style="width: ${catPercent}%; background: ${catPercent >= 70 ? 'var(--success)' : 'var(--warning)'}"></div>
                    </div>
                    <span style="font-weight: 700; color: ${catPercent >= 70 ? 'var(--success)' : 'var(--warning)'}">${catPercent}%</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    }

    // Genera diagnóstico automatizado de Gemini-Style
    generateDiagnosticFeedback(catStats);

    // Renderiza lista de revisión de preguntas
    renderReviewListUI('all');
}

// Diagnóstico personalizado basado en las respuestas
function generateDiagnosticFeedback(catStats) {
    const feedbackBox = document.getElementById('results-ai-diagnosis');
    
    let lowestCat = '';
    let lowestScore = 101;
    let highestCat = '';
    let highestScore = -1;

    for (const [cat, data] of Object.entries(catStats)) {
        const score = data.total > 0 ? (data.correct / data.total) * 100 : 0;
        if (score < lowestScore) {
            lowestScore = score;
            lowestCat = cat;
        }
        if (score > highestScore) {
            highestScore = score;
            highestCat = cat;
        }
    }

    let feedbackText = "";
    
    if (lowestScore === 100) {
        feedbackText = "<strong>¡Felicidades! Diagnóstico de Gemini:</strong> Has obtenido un puntaje perfecto del 100%. Demuestras un dominio absoluto en todas las áreas evaluadas: Razonamiento Numérico, Lógico, Aptitud Verbal, y Capacidad de Atención y Concentración. Estás completamente listo para el examen de la UNACH. ¡Mantén este ritmo y mucha confianza!";
    } else {
        feedbackText = `<strong>Diagnóstico de Preparación (Gemini AI):</strong><br><br>`;
        feedbackText += `• Tu área más fuerte en este intento fue <strong>${highestCat}</strong> con un <strong>${Math.round(highestScore)}%</strong> de efectividad. Posees excelentes capacidades para resolver este tipo de reactivos.<br>`;
        
        feedbackText += `• El área que requiere mayor refuerzo y atención es <strong>${lowestCat}</strong>, donde obtuviste un <strong>${Math.round(lowestScore)}%</strong> de respuestas correctas. Te recomendamos estudiar con prioridad este tema.<br><br>`;
        
        feedbackText += `<strong>Recomendación de estudio personalizada:</strong><br>`;
        if (lowestCat === 'Razonamiento Numérico') {
            feedbackText += "Enfócate en repasar proporciones directas/inversas, resolución de ecuaciones sencillas de primer grado, sucesiones numéricas exponenciales y cálculo de probabilidades básicas (casos favorables/totales). Usa la Guía de Estudio (Temario) para practicar.";
        } else if (lowestCat === 'Razonamiento Lógico') {
            feedbackText += "Dedica tiempo a resolver series alfanuméricas con dobles patrones y silogismos lógicos de premisas. Dibuja diagramas de Venn o de conjuntos cuando estudies deducción lógica de grupos de personas.";
        } else if (lowestCat === 'Aptitud Verbal') {
            feedbackText += "Amplía tu vocabulario técnico. Repasa sinónimos complejos, antónimos, y analiza relaciones metafóricas y analogías de parte-todo y causa-efecto. Lee con atención los textos identificando la tesis principal.";
        } else {
            feedbackText += "La concentración es clave aquí. Practica ejercicios de comparación rápida de textos y cadenas alfanuméricas complejas buscando pequeños fallos ortográficos o de puntuación. Estos reactivos suelen costar valioso tiempo si no se resuelven con rapidez.";
        }
    }

    feedbackBox.innerHTML = feedbackText;
}

// Renderiza lista de revisión de preguntas post-examen
function renderReviewListUI(filter = 'all') {
    const container = document.getElementById('results-review-list');
    container.innerHTML = '';

    // Configura eventos en los botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    state.exam.questions.forEach((q, idx) => {
        const userAnsIndex = state.exam.answers[q.id];
        const isCorrect = userAnsIndex === q.correctIndex;

        // Filtrar
        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'incorrect' && (isCorrect || userAnsIndex === undefined)) return;
        if (filter === 'skipped' && userAnsIndex !== undefined) return;

        const card = document.createElement('div');
        card.className = 'review-card';
        
        let statusClass = 'skipped';
        let statusIcon = '<i class="fa-solid fa-minus"></i>';
        
        if (userAnsIndex !== undefined) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
            statusIcon = isCorrect ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>';
        }

        const cleanEnunciado = q.enunciado.substring(0, 100) + (q.enunciado.length > 100 ? '...' : '');

        card.innerHTML = `
            <div class="review-card-header">
                <div class="review-title-side">
                    <div class="review-badge ${statusClass}">${statusIcon}</div>
                    <span class="review-text-preview">Pregunta ${idx + 1}: ${cleanEnunciado}</span>
                </div>
                <i class="fa-solid fa-chevron-down toggle-icon" style="color: var(--text-secondary)"></i>
            </div>
            <div class="review-card-body">
                <div class="question-text">${q.enunciado_html || q.enunciado}</div>
                <div class="options-list mb-3">
                    ${q.options.map((opt, oIdx) => {
                        let optClass = '';
                        if (oIdx === q.correctIndex) optClass = 'correct';
                        else if (oIdx === userAnsIndex && !isCorrect) optClass = 'incorrect';
                        
                        const letter = String.fromCharCode(65 + oIdx);
                        return `
                            <div class="option-item ${optClass}" style="pointer-events: none;">
                                <div class="option-letter">${letter}</div>
                                <div class="option-text">${opt.text}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="explanation-box" style="display: block;">
                    <div class="explanation-title">
                        <i class="fa-solid fa-robot"></i> Explicación de Gemini AI
                    </div>
                    <div class="explanation-text">${q.explanation}</div>
                </div>
            </div>
        `;

        // Lógica de colapsar / expandir tarjeta
        const header = card.querySelector('.review-card-header');
        header.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');
            // Cierra las demás
            document.querySelectorAll('.review-card').forEach(c => c.classList.remove('open'));
            
            if (!isOpen) {
                card.classList.add('open');
                card.querySelector('.toggle-icon').className = 'fa-solid fa-chevron-up toggle-icon';
            } else {
                card.querySelector('.toggle-icon').className = 'fa-solid fa-chevron-down toggle-icon';
            }
            SoundEffects.play('tap');
        });

        container.appendChild(card);
    });

    if (container.children.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No hay preguntas que coincidan con el filtro seleccionado.</div>';
    }
}

// --- ACTUALIZACIÓN DE UI DEL DASHBOARD ---
function updateDashboardUI() {
    // Carga de estadísticas generales históricas
    document.getElementById('dash-exams-count').textContent = state.stats.totalExams;
    document.getElementById('dash-practices-count').textContent = state.stats.totalPractices;
    document.getElementById('dash-avg-score').textContent = `${state.stats.averageScore}%`;
    
    // Nivel estimado de preparación
    let level = "Inicial";
    let levelColor = "var(--text-muted)";
    
    if (state.stats.totalExams > 0) {
        if (state.stats.averageScore >= 85) { level = "Excelente"; levelColor = "var(--success)"; }
        else if (state.stats.averageScore >= 70) { level = "Competente"; levelColor = "var(--accent-cyan)"; }
        else if (state.stats.averageScore >= 50) { level = "En desarrollo"; levelColor = "var(--warning)"; }
        else { level = "Bajo"; levelColor = "var(--danger)"; }
    }
    
    const levelDisplay = document.getElementById('dash-prep-level');
    levelDisplay.textContent = level;
    levelDisplay.style.color = levelColor;

    // Progreso de Categorías
    const cats = [
        'Razonamiento Numérico',
        'Razonamiento Lógico',
        'Aptitud Verbal',
        'Capacidad de Atención y Concentración'
    ];

    let lowestScore = 101;
    let lowestCat = "";

    cats.forEach((cat, idx) => {
        const data = state.stats.categoryStats[cat];
        const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        
        // Progreso bar fill y valor numérico
        const fill = document.getElementById(`dash-prog-fill-${idx}`);
        const textVal = document.getElementById(`dash-prog-val-${idx}`);
        
        if (fill) fill.style.width = `${percent}%`;
        if (textVal) textVal.textContent = `${percent}%`;

        if (percent < lowestScore) {
            lowestScore = percent;
            lowestCat = cat;
        }
    });

    // Recomendación del dashboard
    const cardRecom = document.getElementById('dash-recommendation-box');
    if (state.stats.totalExams === 0) {
        cardRecom.innerHTML = `
            <div class="recommendation-card">
                <i class="fa-solid fa-circle-play" style="color: var(--accent);"></i>
                <div class="recommendation-info">
                    <h4>¡Comienza tu primer simulador!</h4>
                    <p>Realiza un simulador Express (20 preguntas) para diagnosticar tu nivel inicial de preparación.</p>
                </div>
            </div>
        `;
    } else {
        let topicText = "";
        let urlTarget = "numerico";
        if (lowestCat === 'Razonamiento Numérico') {
            topicText = "Practica inecuaciones, series numéricas y problemas de proporcionalidad.";
            urlTarget = "numerico";
        } else if (lowestCat === 'Razonamiento Lógico') {
            topicText = "Refuerza series alfanuméricas complejas y la deducción de silogismos.";
            urlTarget = "logico";
        } else if (lowestCat === 'Aptitud Verbal') {
            topicText = "Amplía vocabulario de sinónimos/antónimos y comprensión de textos.";
            urlTarget = "verbal";
        } else {
            topicText = "Practica la agilidad visual comparando cadenas de caracteres y buscando errores.";
            urlTarget = "atencion";
        }

        cardRecom.innerHTML = `
            <div class="recommendation-card">
                <i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i>
                <div class="recommendation-info">
                    <h4>Prioriza estudiar: ${lowestCat}</h4>
                    <p>${topicText}</p>
                    <button class="primary-btn mt-2" style="font-size: 11px; padding: 6px 12px; border-radius: 6px;" onclick="setView('study'); showStudyTopic('${urlTarget}')">Ir a Estudiar</button>
                </div>
            </div>
        `;
    }
}

// --- GUÍA DE ESTUDIO (TEMARIO) PANEL CONTROL ---
function showStudyTopic(topicId) {
    // Seleccionar botones del listado lateral
    document.querySelectorAll('.temario-item-btn').forEach(btn => {
        if (btn.getAttribute('data-topic') === topicId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Mostrar el contenedor de estudio correcto
    document.querySelectorAll('.study-content-block').forEach(block => {
        if (block.id === `study-${topicId}`) {
            block.classList.add('active');
        } else {
            block.classList.remove('active');
        }
    });

    SoundEffects.play('tap');
}

// --- PANEL DE CONFIGURACIONES ---
function loadSettingsUI() {
    // Configura inputs según el estado
    document.getElementById('settings-key-input').value = state.settings.geminiKey;
    document.getElementById('settings-sound-toggle').checked = state.settings.sound;
    
    const themeToggle = document.getElementById('settings-theme-select');
    themeToggle.value = state.settings.theme;
}

function saveSettings() {
    state.settings.geminiKey = document.getElementById('settings-key-input').value.trim();
    state.settings.sound = document.getElementById('settings-sound-toggle').checked;
    
    const themeSelect = document.getElementById('settings-theme-select').value;
    state.settings.theme = themeSelect;
    
    // Aplicar el tema seleccionado
    document.documentElement.setAttribute('data-theme', themeSelect);
    
    Storage.save();
    alert("Configuraciones guardadas correctamente.");
    SoundEffects.play('success');
}

function resetStats() {
    const confirmReset = confirm("¿Estás seguro de que quieres restablecer todas tus estadísticas históricas y borrar los datos? Esta acción es irreversible.");
    if (confirmReset) {
        Storage.reset();
        alert("Estadísticas restablecidas.");
        setView('dashboard');
    }
}

// --- INTEGRACIÓN DINÁMICA CON LA API DE GEMINI AI ---
async function askGeminiAI(questionObj) {
    const chatBtn = document.getElementById('gemini-ask-btn');
    const responseText = document.getElementById('gemini-response-text');
    const responseBox = document.getElementById('gemini-api-response-box');

    // Deshabilitar botón
    chatBtn.disabled = true;
    chatBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Consultando a Gemini AI...';
    responseBox.style.display = 'block';
    responseText.textContent = "Conectando con Google Gemini AI...";

    const promptText = `
    Eres una inteligencia artificial experta en tutorías preuniversitarias para el examen de la Universidad Nacional de Chimborazo (UNACH).
    Ayuda al estudiante a entender por qué la respuesta correcta a esta pregunta es la que se indica.
    Pregunta (${questionObj.category}): ${questionObj.enunciado}
    Las opciones de respuesta presentadas son:
    ${questionObj.options.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt.text}`).join('\n')}
    La opción correcta de respuesta es la letra: ${String.fromCharCode(65 + questionObj.correctIndex)}
    El estudiante seleccionó la opción: ${String.fromCharCode(65 + state.exam.answers[questionObj.id])}
    
    Explica la resolución del ejercicio de manera breve, clara, didáctica y en español. Si es un problema matemático o lógico, desglosa los pasos aritméticos de forma concisa.
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.settings.geminiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: promptText
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API respondió con estado: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const reply = data.candidates[0].content.parts[0].text;
            responseText.innerHTML = reply.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        } else {
            responseText.textContent = "Error al recibir respuesta de Gemini AI. Comprueba los límites de tu API Key.";
        }

    } catch (err) {
        console.error("Error llamando a Gemini:", err);
        responseText.textContent = "Error al conectar con la API de Gemini. Asegúrate de tener conexión a Internet y que tu API Key sea correcta.";
    } finally {
        chatBtn.disabled = false;
        chatBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> Preguntar a Gemini AI (Dinámico)';
    }
}

// --- CONTROL DE UI GENERAL AL INICIAR ---
document.addEventListener('DOMContentLoaded', () => {
    // Carga de almacenamiento
    Storage.load();

    // Aplica tema inicial
    document.documentElement.setAttribute('data-theme', state.settings.theme);

    // Eventos del Sidebar links
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const viewId = btn.getAttribute('data-view');
            if (viewId) setView(viewId);
        });
    });

    // Toggles en el sidebar para móvil
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidebar = document.getElementById('sidebar');
    if (mobileNavToggle && sidebar) {
        mobileNavToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            SoundEffects.play('tap');
        });
    }

    // Configuración inicial de UI del configurador de examen
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.selector-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            SoundEffects.play('tap');
        });
    });

    // Controladores de botones del Examen
    document.getElementById('exam-prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('exam-next-btn').addEventListener('click', nextQuestion);
    document.getElementById('exam-flag-btn').addEventListener('click', toggleFlag);
    document.getElementById('exam-finish-btn').addEventListener('click', () => finishExam());

    // Botones de filtro de revisión en resultados
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            renderReviewListUI(filter);
            SoundEffects.play('tap');
        });
    });

    // Inicializa la primera vista
    setView('dashboard');
});
