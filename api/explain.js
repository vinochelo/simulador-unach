export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { questionObj, userAnsIndex } = req.body;

        if (!questionObj) {
            return res.status(400).json({ error: 'Missing questionObj' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel environment variables' });
        }

        const promptText = `
        Eres una inteligencia artificial experta en tutorías preuniversitarias para el examen de la Universidad Nacional de Chimborazo (UNACH).
        Ayuda al estudiante a entender por qué la respuesta correcta a esta pregunta es la que se indica.
        Pregunta (${questionObj.category}): ${questionObj.enunciado}
        Las opciones de respuesta presentadas son:
        ${questionObj.options.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt.text}`).join('\n')}
        La opción correcta de respuesta es la letra: ${String.fromCharCode(65 + questionObj.correctIndex)}
        El estudiante seleccionó la opción: ${userAnsIndex !== undefined ? String.fromCharCode(65 + userAnsIndex) : 'Omitida'}
        
        Explica la resolución del ejercicio de manera breve, clara, didáctica y en español. Si es un problema matemático o lógico, desglosa los pasos aritméticos de forma concisa.
        `;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
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
            const errData = await response.text();
            throw new Error(`Gemini API error: ${response.status} - ${errData}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const reply = data.candidates[0].content.parts[0].text;
            return res.status(200).json({ explanation: reply });
        } else {
            return res.status(500).json({ error: 'Unexpected response format from Gemini API' });
        }

    } catch (error) {
        console.error("Proxy error:", error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
