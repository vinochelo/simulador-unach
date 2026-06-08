// Base de datos de preguntas para el Simulador de Admisión UNACH 2026
// Contiene 100 preguntas distribuidas equitativamente (25 por categoría)
// Desarrollado para Mathew - Preparación de Admisión Universitaria

const QUESTIONS = [
  {
    "id": "3462",
    "category": "Razonamiento Numérico",
    "enunciado_html": "<p>Si gasto los 5/8  de mi sueldo, los cuales representan 300 dólares. ¿Qué cantidad ahorro?</p>",
    "enunciado": "Si gasto los 5/8 de mi sueldo, los cuales representan 300 dólares. ¿Qué cantidad ahorro?",
    "options": [
      {
        "id": "unknown",
        "text": "480"
      },
      {
        "id": "unknown",
        "text": "150"
      },
      {
        "id": "unknown",
        "text": "180"
      },
      {
        "id": "unknown",
        "text": "240"
      }
    ],
    "correctIndex": 2,
    "explanation": "Si gasto los 5/8 de mi sueldo ($300), entonces 1/8 equivale a 300 / 5 = $60. El sueldo total es 8/8, es decir, 8 * 60 = $480. Lo que ahorro es lo restante, es decir, 3/8 de mi sueldo. Por lo tanto, el ahorro es 3 * $60 = $180."
  },
  {
    "id": "3488",
    "category": "Razonamiento Numérico",
    "enunciado_html": "<p>Un cordel mide 2,4 metros. Se deben hacer dos nudos de modo que los tres segmentos en que queda dividido sean entre sí como 3:4:5. ¿Cuál es la medida que debe tener el segmento menor?</p>",
    "enunciado": "Un cordel mide 2,4 metros. Se deben hacer dos nudos de modo que los tres segmentos en que queda dividido sean entre sí como 3:4:5. ¿Cuál es la medida que debe tener el segmento menor?",
    "options": [
      {
        "id": "unknown",
        "text": "60 cm"
      },
      {
        "id": "unknown",
        "text": "80 cm"
      },
      {
        "id": "unknown",
        "text": "100 cm"
      },
      {
        "id": "unknown",
        "text": "120 cm"
      }
    ],
    "correctIndex": 0,
    "explanation": "La longitud total es 2.4 metros (240 cm). Dividiendo en proporción 3:4:5, sumamos las partes: 3x + 4x + 5x = 12x. Así, 12x = 240 cm, lo que nos da x = 20 cm. El segmento menor es la proporción menor (3x): 3 * 20 = 60 cm."
  },
  {
    "id": "10537",
    "category": "Razonamiento Numérico",
    "enunciado_html": "<p>La intensidad de la luz de una fuente es inversamente proporcional al cuadrado de la distancia a la fuente. A 3 metros la intensidad es 16 unidades. ¿Cuál será a 4 metros?</p>",
    "enunciado": "La intensidad de la luz de una fuente es inversamente proporcional al cuadrado de la distancia a la fuente. A 3 metros la intensidad es 16 unidades. ¿Cuál será a 4 metros?",
    "options": [
      {
        "id": "unknown",
        "text": "12 unidades"
      },
      {
        "id": "unknown",
        "text": "9 unidades"
      },
      {
        "id": "unknown",
        "text": "28.4 unidades"
      },
      {
        "id": "unknown",
        "text": "10 unidades"
      }
    ],
    "correctIndex": 1,
    "explanation": "La intensidad es inversamente proporcional al cuadrado de la distancia: I * d² = C. A 3m con intensidad 16: Constante = 16 * 3² = 16 * 9 = 144. Para 4m: I * 4² = 144 => 16I = 144 => I = 9 unidades."
  },
  {
    "id": "4322",
    "category": "Razonamiento Numérico",
    "enunciado_html": "<p>Alejandro dio un examen para el ingreso a la Universidad. La evaluación constó de 120 preguntas y cada una de ellas tiene un valor de 3 puntos. Alejandro obtuvo un puntaje de 320. ¿Cuánto fue la fracción de error que tuvo Alejandro en su examen?</p>",
    "enunciado": "Alejandro dio un examen para el ingreso a la Universidad. La evaluación constó de 120 preguntas y cada una de ellas tiene un valor de 3 puntos. Alejandro obtuvo un puntaje de 320. ¿Cuánto fue la fracción de error que tuvo Alejandro en su examen?",
    "options": [
      {
        "id": "unknown",
        "text": "88,88%"
      },
      {
        "id": "unknown",
        "text": "1/9"
      },
      {
        "id": "unknown",
        "text": "11,11%"
      },
      {
        "id": "unknown",
        "text": "8/9"
      }
    ],
    "correctIndex": 1,
    "explanation": "El puntaje máximo del examen es 120 preguntas * 3 puntos = 360 puntos. Alejandro obtuvo 320 puntos, lo que significa que perdió 40 puntos debido a errores (360 - 320 = 40). La fracción de error sobre el puntaje total es 40/360 = 1/9. Como cada pregunta vale 3 puntos, la fracción de preguntas erradas es la misma: 1/9."
  },
  {
    "id": "4347",
    "category": "Razonamiento Numérico",
    "enunciado_html": "<p>Si los lápices se venden a 3 por 10 centavos. ¿Cuántos pueden comprarse con 90 centavos?</p>",
    "enunciado": "Si los lápices se venden a 3 por 10 centavos. ¿Cuántos pueden comprarse con 90 centavos?",
    "options": [
      {
        "id": "unknown",
        "text": "27"
      },
      {
        "id": "unknown",
        "text": "30"
      },
      {
        "id": "unknown",
        "text": "270"
      },
      {
        "id": "unknown",
        "text": "9"
      }
    ],
    "correctIndex": 0,
    "explanation": "Con 90 centavos puedes comprar 90 / 10 = 9 grupos de lápices. Como cada grupo contiene 3 lápices, en total puedes comprar 9 * 3 = 27 lápices."
  },
  {
    "id": "num_21",
    "category": "Razonamiento Numérico",
    "enunciado": "Encuentre el número que falta en la secuencia: 3, 7, 15, 31, 63, ...",
    "options": [
      {
        "text": "125"
      },
      {
        "text": "127"
      },
      {
        "text": "129"
      },
      {
        "text": "131"
      }
    ],
    "correctIndex": 1,
    "explanation": "El patrón consiste en multiplicar el número anterior por 2 y sumarle 1: (3*2)+1 = 7, (7*2)+1 = 15, (15*2)+1 = 31, (31*2)+1 = 63. El término siguiente será (63*2)+1 = 126+1 = 127."
  },
  {
    "id": "num_22",
    "category": "Razonamiento Numérico",
    "enunciado": "Si 8 obreros pueden terminar una obra en 15 días, ¿cuántos días tardarán 10 obreros en hacer la misma obra bajo las mismas condiciones?",
    "options": [
      {
        "text": "12 días"
      },
      {
        "text": "10 días"
      },
      {
        "text": "18 días"
      },
      {
        "text": "14 días"
      }
    ],
    "correctIndex": 0,
    "explanation": "Es una proporción inversa. A más obreros, menos tiempo. La relación es: Obreros1 * Días1 = Obreros2 * Días2. Entonces: 8 * 15 = 10 * x => 120 = 10x => x = 12 días."
  },
  {
    "id": "num_23",
    "category": "Razonamiento Numérico",
    "enunciado": "En una caja hay 5 canicas rojas, 8 canicas azules y 7 canicas verdes. Si se extrae una canica al azar, ¿cuál es la probabilidad de que sea verde?",
    "options": [
      {
        "text": "7/20"
      },
      {
        "text": "7/13"
      },
      {
        "text": "5/20"
      },
      {
        "text": "8/20"
      }
    ],
    "correctIndex": 0,
    "explanation": "Total de canicas = 5 + 8 + 7 = 20. Las canicas verdes son 7. La probabilidad de extraer una verde es Casos Favorables / Casos Totales = 7/20."
  },
  {
    "id": "num_24",
    "category": "Razonamiento Numérico",
    "enunciado": "La suma de tres números enteros consecutivos es 72. ¿Cuál es el valor del número menor?",
    "options": [
      {
        "text": "22"
      },
      {
        "text": "23"
      },
      {
        "text": "24"
      },
      {
        "text": "25"
      }
    ],
    "correctIndex": 1,
    "explanation": "Sean los tres números: x, x+1, x+2. Su suma es: x + (x+1) + (x+2) = 72 => 3x + 3 = 72 => 3x = 69 => x = 23. Por lo tanto, el número menor es 23."
  },
  {
    "id": "num_25",
    "category": "Razonamiento Numérico",
    "enunciado": "Un automóvil recorre 120 kilómetros en 1 hora y 30 minutos a velocidad constante. ¿A qué velocidad en km/h viaja el automóvil?",
    "options": [
      {
        "text": "80 km/h"
      },
      {
        "text": "90 km/h"
      },
      {
        "text": "100 km/h"
      },
      {
        "text": "75 km/h"
      }
    ],
    "correctIndex": 0,
    "explanation": "Velocidad = Distancia / Tiempo. 1 hora y 30 minutos es equivalente a 1.5 horas. Velocidad = 120 km / 1.5 h = 80 km/h."
  },
  {
    "id": "num_26",
    "category": "Razonamiento Numérico",
    "enunciado": "Si el 20% de un número es 50, ¿cuál es el 30% de ese mismo número?",
    "options": [
      {
        "text": "65"
      },
      {
        "text": "75"
      },
      {
        "text": "80"
      },
      {
        "text": "90"
      }
    ],
    "correctIndex": 1,
    "explanation": "Si el 20% es 50, el número completo (100%) es 50 * 5 = 250. El 30% de 250 se calcula como: 250 * 0.3 = 75."
  },
  {
    "id": "num_27",
    "category": "Razonamiento Numérico",
    "enunciado": "Un tanque de agua se llena con dos tuberías. La primera lo llena en 4 horas y la segunda en 6 horas de forma individual. ¿Cuánto tiempo tardarán en llenarlo si se abren ambas tuberías al mismo tiempo?",
    "options": [
      {
        "text": "2.4 horas"
      },
      {
        "text": "5 horas"
      },
      {
        "text": "3 horas"
      },
      {
        "text": "2.8 horas"
      }
    ],
    "correctIndex": 0,
    "explanation": "En una hora, la primera tubería llena 1/4 del tanque y la segunda 1/6. Juntas llenan: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 del tanque en una hora. El tiempo total para llenarlo es el recíproco: 12/5 = 2.4 horas."
  },
  {
    "id": "num_28",
    "category": "Razonamiento Numérico",
    "enunciado": "La edad de Sofía es el doble de la edad de su hermano Lucas. Si hace 4 años Sofía tenía el triple de la edad de Lucas en ese momento, ¿cuántos años tiene Lucas actualmente?",
    "options": [
      {
        "text": "8 años"
      },
      {
        "text": "6 años"
      },
      {
        "text": "12 años"
      },
      {
        "text": "10 años"
      }
    ],
    "correctIndex": 0,
    "explanation": "Sea L la edad actual de Lucas y S = 2L la de Sofía. Hace 4 años: Sofía tenía S - 4 y Lucas L - 4. La relación era: S - 4 = 3(L - 4) => 2L - 4 = 3L - 12 => L = 8. Por ende, Lucas tiene 8 años y Sofía 16."
  },
  {
    "id": "num_29",
    "category": "Razonamiento Numérico",
    "enunciado": "Un artículo tiene un precio de $120. Si se le aplica primero un descuento del 10% y luego se le suma el 12% de IVA sobre el precio descontado, ¿cuál es el precio final de venta?",
    "options": [
      {
        "text": "$120.96"
      },
      {
        "text": "$121.20"
      },
      {
        "text": "$122.40"
      },
      {
        "text": "$118.80"
      }
    ],
    "correctIndex": 0,
    "explanation": "Precio con descuento: 120 * 0.90 = $108. Sobre este precio se añade el IVA (12%): 108 * 1.12 = $120.96."
  },
  {
    "id": "num_30",
    "category": "Razonamiento Numérico",
    "enunciado": "Al lanzar dos dados comunes, ¿cuál es la probabilidad de que la suma de los resultados sea igual a 7?",
    "options": [
      {
        "text": "1/6"
      },
      {
        "text": "1/12"
      },
      {
        "text": "5/36"
      },
      {
        "text": "7/36"
      }
    ],
    "correctIndex": 0,
    "explanation": "Al lanzar dos dados hay 36 combinaciones posibles. Los casos en los que la suma es 7 son: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1); es decir, 6 casos favorables. Probabilidad = 6/36 = 1/6."
  },
  {
    "id": "num_31",
    "category": "Razonamiento Numérico",
    "enunciado": "Resuelva la siguiente ecuación: 5x - 7 = 3x + 9. ¿Cuál es el valor de x?",
    "options": [
      {
        "text": "x = 4"
      },
      {
        "text": "x = 8"
      },
      {
        "text": "x = 6"
      },
      {
        "text": "x = 10"
      }
    ],
    "correctIndex": 1,
    "explanation": "Agrupamos las x a un lado y los números al otro: 5x - 3x = 9 + 7 => 2x = 16 => x = 8."
  },
  {
    "id": "num_32",
    "category": "Razonamiento Numérico",
    "enunciado": "Una pizza se divide en 8 partes iguales. Si Juan se come 3 partes y María se come la mitad de lo que queda, ¿qué fracción de la pizza entera sobró?",
    "options": [
      {
        "text": "5/16"
      },
      {
        "text": "5/8"
      },
      {
        "text": "3/16"
      },
      {
        "text": "2/8"
      }
    ],
    "correctIndex": 0,
    "explanation": "Juan come 3/8. Quedan 8/8 - 3/8 = 5/8. María come la mitad de lo restante: 1/2 * 5/8 = 5/16. Lo que sobró es la otra mitad de lo restante: 5/16."
  },
  {
    "id": "num_33",
    "category": "Razonamiento Numérico",
    "enunciado": "Si la base de un rectángulo aumenta en un 20% y su altura disminuye en un 20%, ¿cómo cambia el área del rectángulo?",
    "options": [
      {
        "text": "Disminuye un 4%"
      },
      {
        "text": "No varía"
      },
      {
        "text": "Aumenta un 4%"
      },
      {
        "text": "Disminuye un 2%"
      }
    ],
    "correctIndex": 0,
    "explanation": "Área inicial: A = b * h. Área nueva: A_nueva = (1.2 * b) * (0.8 * h) = 0.96 * b * h. El área nueva es el 96% de la inicial, por lo que disminuye un 4% (100% - 96% = 4%)."
  },
  {
    "id": "num_34",
    "category": "Razonamiento Numérico",
    "enunciado": "Una persona compra 3 camisas por $45. ¿Cuánto pagará por 7 camisas del mismo precio en total?",
    "options": [
      {
        "text": "$105"
      },
      {
        "text": "$95"
      },
      {
        "text": "$110"
      },
      {
        "text": "$115"
      }
    ],
    "correctIndex": 0,
    "explanation": "Precio por camisa: 45 / 3 = $15. Por 7 camisas: 15 * 7 = $105."
  },
  {
    "id": "num_35",
    "category": "Razonamiento Numérico",
    "enunciado": "Halle el término que continúa la serie: 1, 4, 9, 16, 25, ...",
    "options": [
      {
        "text": "30"
      },
      {
        "text": "36"
      },
      {
        "text": "35"
      },
      {
        "text": "40"
      }
    ],
    "correctIndex": 1,
    "explanation": "La serie corresponde a los cuadrados de los números enteros: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. El siguiente término es 6² = 36."
  },
  {
    "id": "num_36",
    "category": "Razonamiento Numérico",
    "enunciado": "Determine el valor de x en la siguiente inecuación: 2x + 5 < 13",
    "options": [
      {
        "text": "x < 4"
      },
      {
        "text": "x > 4"
      },
      {
        "text": "x < 8"
      },
      {
        "text": "x < 3"
      }
    ],
    "correctIndex": 0,
    "explanation": "Resolvemos la inecuación: 2x < 13 - 5 => 2x < 8 => x < 4."
  },
  {
    "id": "num_37",
    "category": "Razonamiento Numérico",
    "enunciado": "Si un capital de $500 se coloca a interés simple con una tasa anual del 6%, ¿cuánto interés se habrá acumulado al cabo de 3 años?",
    "options": [
      {
        "text": "$90"
      },
      {
        "text": "$60"
      },
      {
        "text": "$80"
      },
      {
        "text": "$100"
      }
    ],
    "correctIndex": 0,
    "explanation": "Interés simple: I = C * r * t. Donde C = 500, r = 0.06, t = 3. I = 500 * 0.06 * 3 = 30 * 3 = $90."
  },
  {
    "id": "num_38",
    "category": "Razonamiento Numérico",
    "enunciado": "Un jardinero siembra 40 flores en 2 horas. ¿Cuántas flores sembrará en una jornada de 6 horas manteniendo el mismo ritmo de trabajo?",
    "options": [
      {
        "text": "120 flores"
      },
      {
        "text": "80 flores"
      },
      {
        "text": "100 flores"
      },
      {
        "text": "160 flores"
      }
    ],
    "correctIndex": 0,
    "explanation": "El jardinero siembra 40 / 2 = 20 flores por hora. En 6 horas sembrará: 20 * 6 = 120 flores."
  },
  {
    "id": "num_39",
    "category": "Razonamiento Numérico",
    "enunciado": "La razón de dos números es 3:5. Si el menor de los números es 18, ¿cuál es el valor del número mayor?",
    "options": [
      {
        "text": "30"
      },
      {
        "text": "25"
      },
      {
        "text": "35"
      },
      {
        "text": "28"
      }
    ],
    "correctIndex": 0,
    "explanation": "Sean los números 3x y 5x. El menor es 3x = 18 => x = 6. El mayor es 5x, es decir, 5 * 6 = 30."
  },
  {
    "id": "num_40",
    "category": "Razonamiento Numérico",
    "enunciado": "Una tienda de ropa vende pantalones a $30 y camisetas a $15. Si Carlos compró en total 8 prendas y gastó $180, ¿cuántos pantalones compró?",
    "options": [
      {
        "text": "4 pantalones"
      },
      {
        "text": "3 pantalones"
      },
      {
        "text": "5 pantalones"
      },
      {
        "text": "6 pantalones"
      }
    ],
    "correctIndex": 0,
    "explanation": "Sean P los pantalones y C las camisetas. P + C = 8 => C = 8 - P. Ecuación del gasto: 30P + 15C = 180 => 30P + 15(8 - P) = 180 => 30P + 120 - 15P = 180 => 15P = 60 => P = 4."
  },
  {
    "id": "3167",
    "category": "Razonamiento Lógico",
    "enunciado_html": "<p>Indique el número que le da continuidad a la serie:</p>\n<p style=\"text-align: center;\">12, 25, 39, 54, 70, ....</p>",
    "enunciado": "Indique el número que le da continuidad a la serie: 12, 25, 39, 54, 70, ....",
    "options": [
      {
        "id": "unknown",
        "text": "86"
      },
      {
        "id": "unknown",
        "text": "87"
      },
      {
        "id": "unknown",
        "text": "88"
      },
      {
        "id": "unknown",
        "text": "89"
      }
    ],
    "correctIndex": 1,
    "explanation": "Analizamos la diferencia entre términos consecutivos: 25-12 = 13; 39-25 = 14; 54-39 = 15; 70-54 = 16. La diferencia aumenta en +1 en cada término. El siguiente término sumará +17 al último valor: 70 + 17 = 87."
  },
  {
    "id": "3072",
    "category": "Razonamiento Lógico",
    "enunciado_html": "<p style=\"text-align: justify;\">La sucesión permite generar códigos que faciliten la búsqueda de cada nuevo cliente en un almacén. ¿Cuál es el código que se le asignó al cuarto cliente?</p>\n<p style=\"text-align: center;\">4E, 8G, 16I, ___, 64M</p>",
    "enunciado": "La sucesión permite generar códigos que faciliten la búsqueda de cada nuevo cliente en un almacén. ¿Cuál es el código que se le asignó al cuarto cliente? 4E, 8G, 16I, ___, 64M",
    "options": [
      {
        "id": "unknown",
        "text": "20J"
      },
      {
        "id": "unknown",
        "text": "24J"
      },
      {
        "id": "unknown",
        "text": "28K"
      },
      {
        "id": "unknown",
        "text": "32K"
      }
    ],
    "correctIndex": 3,
    "explanation": "La serie se compone de números y letras. Parte numérica: 4, 8, 16, X, 64 (se duplica en cada término), por lo que el cuarto es 32. Parte alfabética: E, G, I, Y, M. Se salta una letra en el abecedario: E (f) G (h) I (j) K (l) M. Por ende, el cuarto término es K. Código: 32K."
  },
  {
    "id": "4706",
    "category": "Razonamiento Lógico",
    "enunciado_html": "<p><strong>¿Qué</strong><strong> grupo de letras no viene bien?</strong></p>",
    "enunciado": "¿Qué grupo de letras no viene bien?",
    "options": [
      {
        "id": "unknown",
        "text": "apqb"
      },
      {
        "id": "unknown",
        "text": "mabn"
      },
      {
        "id": "unknown",
        "text": "wabx"
      },
      {
        "id": "unknown",
        "text": "aabd"
      }
    ],
    "correctIndex": 3,
    "explanation": "En los grupos 'apqb', 'mabn' y 'wabx', las letras de los extremos son consecutivas (a-b, m-n, w-x) y las del centro también son consecutivas (p-q, a-b, a-b). En 'aabd', las letras extremas (a-d) no son consecutivas, lo que rompe la regla."
  },
  {
    "id": "3518",
    "category": "Razonamiento Lógico",
    "enunciado_html": "<p style=\"text-align: justify;\">De una caja que contiene tres bolas negras, cuatro blancas y dos amarillas, se extrae al azar una de ellas. ¿Hallar la probalidad de que la bola extraída no se negra?</p>",
    "enunciado": "De una caja que contiene tres bolas negras, cuatro blancas y dos amarillas, se extrae al azar una de ellas. ¿Hallar la probalidad de que la bola extraída no se negra?",
    "options": [
      {
        "id": "unknown",
        "text": "2/3"
      },
      {
        "id": "unknown",
        "text": "4/5"
      },
      {
        "id": "unknown",
        "text": "1/3"
      },
      {
        "id": "unknown",
        "text": "6/8"
      }
    ],
    "correctIndex": 0,
    "explanation": "El total de bolas es 3 (negras) + 4 (blancas) + 2 (amarillas) = 9. Las bolas que no son negras son las blancas y amarillas: 4 + 2 = 6. La probabilidad de extraer una bola no negra es 6/9, lo que se simplifica a 2/3."
  },
  {
    "id": "7829",
    "category": "Razonamiento Lógico",
    "enunciado_html": "<p>Elige Ia palabra que contin&uacute;a la serie.</p>\n<p>Zorro, Rama, Mono, Nube,_&nbsp;</p>",
    "enunciado": "Elige Ia palabra que contin&uacute;a la serie. Zorro, Rama, Mono, Nube,_&nbsp;",
    "options": [
      {
        "id": "unknown",
        "text": "Estrella"
      },
      {
        "id": "unknown",
        "text": "Blanco"
      },
      {
        "id": "unknown",
        "text": "Bolo"
      },
      {
        "id": "unknown",
        "text": "Bola"
      }
    ],
    "correctIndex": 3,
    "explanation": "El patrón es que la primera letra de la palabra coincide con la última consonante de la palabra anterior: Zor[r]o -> [R]ama -> [M]ono -> [N]ube -> [B]ola. Para elegir entre las opciones con B, las vocales finales siguen el patrón alternante: o, a, o, e, a (vocales abiertas). Por lo tanto, la palabra debe iniciar con B y terminar con A, siendo 'Bola' la correcta."
  },
  {
    "id": "log_21",
    "category": "Razonamiento Lógico",
    "enunciado": "Complete la siguiente serie alfanumérica: B2, D4, F6, H8, ...",
    "options": [
      {
        "text": "J10"
      },
      {
        "text": "I9"
      },
      {
        "text": "J12"
      },
      {
        "text": "K10"
      }
    ],
    "correctIndex": 0,
    "explanation": "La serie de letras avanza saltando una posición en el alfabeto (B, D, F, H, J...) y el número corresponde a la posición numérica par equivalente (2, 4, 6, 8, 10). Por ende, sigue J10."
  },
  {
    "id": "log_22",
    "category": "Razonamiento Lógico",
    "enunciado": "Si todos los metales son conductores de electricidad y el cobre es un metal, ¿cuál de las siguientes conclusiones es lógicamente válida?",
    "options": [
      {
        "text": "El cobre es conductor de electricidad"
      },
      {
        "text": "Todos los conductores son cobre"
      },
      {
        "text": "Algunos conductores no son cobre"
      },
      {
        "text": "El cobre no conduce electricidad"
      }
    ],
    "correctIndex": 0,
    "explanation": "Por silogismo deductivo (Modus Ponens): Si todo A es B (metales son conductores) y C pertenece a A (el cobre es metal), entonces C es B (el cobre es conductor)."
  },
  {
    "id": "log_23",
    "category": "Razonamiento Lógico",
    "enunciado": "Indique la palabra que no pertenece al grupo: Saturno, Júpiter, Marte, Luna, Neptuno",
    "options": [
      {
        "text": "Luna"
      },
      {
        "text": "Marte"
      },
      {
        "text": "Saturno"
      },
      {
        "text": "Neptuno"
      }
    ],
    "correctIndex": 0,
    "explanation": "Saturno, Júpiter, Marte y Neptuno son planetas del sistema solar. La Luna es un satélite natural, por lo que no pertenece al grupo."
  },
  {
    "id": "log_24",
    "category": "Razonamiento Lógico",
    "enunciado": "Encuentre el número que continúa la serie lógica: 2, 3, 5, 8, 12, 17, ...",
    "options": [
      {
        "text": "23"
      },
      {
        "text": "21"
      },
      {
        "text": "24"
      },
      {
        "text": "22"
      }
    ],
    "correctIndex": 0,
    "explanation": "Las diferencias entre términos sucesivos van aumentando en +1: 3-2 = +1; 5-3 = +2; 8-5 = +3; 12-8 = +4; 17-12 = +5. La siguiente diferencia será +6, por lo que el siguiente término es 17 + 6 = 23."
  },
  {
    "id": "log_25",
    "category": "Razonamiento Lógico",
    "enunciado": "Si hoy es martes, ¿qué día de la semana será el ayer del mañana del pasado mañana de hoy?",
    "options": [
      {
        "text": "Miércoles"
      },
      {
        "text": "Jueves"
      },
      {
        "text": "Martes"
      },
      {
        "text": "Viernes"
      }
    ],
    "correctIndex": 1,
    "explanation": "Analizamos la frase hacia atrás o simplificando términos: 'ayer de hoy' (-1), 'mañana' (+1), 'pasado mañana de hoy' (+2). Simplificando: -1 + 1 + 2 = +2. Es decir, dos días después de hoy. Si hoy es martes, en 2 días será jueves."
  },
  {
    "id": "log_26",
    "category": "Razonamiento Lógico",
    "enunciado": "Dadas las premisas: 1. Ningún mamífero vuela. 2. Los murciélagos son mamíferos. ¿Qué conclusión se deduce directamente?",
    "options": [
      {
        "text": "Los murciélagos no vuelan (lógica formal)"
      },
      {
        "text": "Todos los murciélagos vuelan"
      },
      {
        "text": "Algunos murciélagos no vuelan"
      },
      {
        "text": "Los murciélagos son aves"
      }
    ],
    "correctIndex": 0,
    "explanation": "Desde el punto de vista de la lógica formal silogística: Si ningún A es B (mamífero vuela) y C es A (murciélagos son mamíferos), entonces C no es B (los murciélagos no vuelan). Nota: Aunque en la realidad biológica vuelan, bajo las premisas planteadas esta es la deducción lógica formal válida."
  },
  {
    "id": "log_27",
    "category": "Razonamiento Lógico",
    "enunciado": "Halle el código que continúa la secuencia lógica: 1A, 3C, 6F, 10J, ...",
    "options": [
      {
        "text": "15Ñ"
      },
      {
        "text": "15O"
      },
      {
        "text": "14O"
      },
      {
        "text": "16P"
      }
    ],
    "correctIndex": 1,
    "explanation": "Los números aumentan en diferencias sucesivas (+2, +3, +4...): 1+2=3, 3+3=6, 6+4=10, el siguiente es 10+5=15. Las letras corresponden a esas mismas posiciones en el abecedario (A=1, C=3, F=6, J=10, O=15). Por lo tanto, el código es 15O."
  },
  {
    "id": "log_28",
    "category": "Razonamiento Lógico",
    "enunciado": "Seis amigos se sientan alrededor de una mesa redonda. A se sienta enfrente de B, C está a la derecha de A, D se sienta enfrente de C, E está entre B y D. ¿Quién está enfrente de E?",
    "options": [
      {
        "text": "C"
      },
      {
        "text": "A"
      },
      {
        "text": "F"
      },
      {
        "text": "B"
      }
    ],
    "correctIndex": 2,
    "explanation": "Dibujando el círculo de 6 asientos: Asignamos A arriba y B abajo (enfrente). C está a la derecha de A (asiento derecho superior). D enfrente de C (asiento izquierdo inferior). E está entre B y D (asiento izquierdo medio). Queda libre el asiento derecho medio para F, que está entre A y B. Enfrente de E (asiento izquierdo medio) se encuentra F (asiento derecho medio)."
  },
  {
    "id": "log_29",
    "category": "Razonamiento Lógico",
    "enunciado": "Si giramos una figura plana bidimensional 90 grados en sentido antihorario, y luego 180 grados en sentido horario, ¿cuál es el giro neto equivalente respecto a la posición original?",
    "options": [
      {
        "text": "90 grados en sentido horario"
      },
      {
        "text": "90 grados en sentido antihorario"
      },
      {
        "text": "180 grados"
      },
      {
        "text": "270 grados en sentido antihorario"
      }
    ],
    "correctIndex": 0,
    "explanation": "Giro antihorario es positivo (+90°) y horario es negativo (-180°). El neto es +90° - 180° = -90° (giro de 90° en sentido horario)."
  },
  {
    "id": "log_30",
    "category": "Razonamiento Lógico",
    "enunciado": "Indique la opción que completa la serie: 1, 8, 27, 64, ...",
    "options": [
      {
        "text": "125"
      },
      {
        "text": "100"
      },
      {
        "text": "81"
      },
      {
        "text": "150"
      }
    ],
    "correctIndex": 0,
    "explanation": "La serie corresponde a los cubos de los números naturales: 1³=1, 2³=8, 3³=27, 4³=64. El siguiente es 5³ = 125."
  },
  {
    "id": "log_31",
    "category": "Razonamiento Lógico",
    "enunciado": "Si A es más alto que B, B es de la misma estatura que C, y C es más bajo que D, entonces es necesariamente cierto que:",
    "options": [
      {
        "text": "A es más alto que C"
      },
      {
        "text": "A es más bajo que D"
      },
      {
        "text": "D es más alto que A"
      },
      {
        "text": "B es más alto que D"
      }
    ],
    "correctIndex": 0,
    "explanation": "Como B = C, y sabemos que A > B, entonces al sustituir B por C se deduce directamente que A > C (A es más alto que C). Las relaciones con D no son determinables con exactitud."
  },
  {
    "id": "log_32",
    "category": "Razonamiento Lógico",
    "enunciado": "Indique cuál de las siguientes opciones representa un patrón geométrico o espacial absurdo o incoherente con el resto:",
    "options": [
      {
        "text": "Triángulo con 3 vértices"
      },
      {
        "text": "Cuadrado con 4 ángulos rectos"
      },
      {
        "text": "Círculo con 2 diagonales internas cruzadas en su centro que no miden lo mismo"
      },
      {
        "text": "Pentágono con 5 lados"
      }
    ],
    "correctIndex": 2,
    "explanation": "En un círculo, cualquier segmento que pase por el centro y una dos puntos de la circunferencia es un diámetro (diagonal interna) y todos los diámetros de un mismo círculo miden exactamente lo mismo. Decir que no miden igual es lógicamente absurdo."
  },
  {
    "id": "log_33",
    "category": "Razonamiento Lógico",
    "enunciado": "Encuentre el término que falta en la serie: 2, 4, 8, 16, 32, ...",
    "options": [
      {
        "text": "64"
      },
      {
        "text": "48"
      },
      {
        "text": "50"
      },
      {
        "text": "128"
      }
    ],
    "correctIndex": 0,
    "explanation": "Cada número de la sucesión es el doble del anterior (progresión geométrica con razón 2): 2*2=4, 4*2=8, 8*2=16, 16*2=32. El siguiente término es 32 * 2 = 64."
  },
  {
    "id": "log_34",
    "category": "Razonamiento Lógico",
    "enunciado": "Un tren sale de Quito a Guayaquil a 80 km/h. Al mismo tiempo, otro tren sale de Guayaquil a Quito a 100 km/h en la misma vía (colisión inminente). Si la distancia entre ciudades es de 360 km, ¿en cuántas horas se encontrarán?",
    "options": [
      {
        "text": "2 horas"
      },
      {
        "text": "3 horas"
      },
      {
        "text": "4 horas"
      },
      {
        "text": "1.8 horas"
      }
    ],
    "correctIndex": 0,
    "explanation": "Velocidad relativa de aproximación = V1 + V2 = 80 + 100 = 180 km/h. Tiempo de encuentro = Distancia / Velocidad de aproximación = 360 km / 180 km/h = 2 horas."
  },
  {
    "id": "log_35",
    "category": "Razonamiento Lógico",
    "enunciado": "Determine cuál de las opciones no corresponde lógicamente al grupo: Coche, Tren, Avión, Bicicleta, Autopista",
    "options": [
      {
        "text": "Autopista"
      },
      {
        "text": "Avión"
      },
      {
        "text": "Bicicleta"
      },
      {
        "text": "Tren"
      }
    ],
    "correctIndex": 0,
    "explanation": "Coche, tren, avión y bicicleta son medios de transporte físicos (vehículos). La autopista es una infraestructura vial sobre la cual circulan algunos de ellos, por ende, es el elemento ajeno al grupo."
  },
  {
    "id": "log_36",
    "category": "Razonamiento Lógico",
    "enunciado": "Premisas: 1. Todos los científicos leen libros de ciencia. 2. Carlos lee libros de ciencia. ¿Es correcto concluir que Carlos es científico?",
    "options": [
      {
        "text": "No, no es una conclusión lógicamente necesaria"
      },
      {
        "text": "Sí, es completamente seguro que Carlos es científico"
      },
      {
        "text": "Carlos lee porque es estudiante"
      },
      {
        "text": "Ninguna de las anteriores"
      }
    ],
    "correctIndex": 0,
    "explanation": "Es una falacia de afirmación del consecuente. Que todos los científicos lean libros de ciencia no impide que otras personas que no son científicos también los lean. Por lo tanto, no se deduce necesariamente que Carlos sea científico."
  },
  {
    "id": "log_37",
    "category": "Razonamiento Lógico",
    "enunciado": "Complete la analogía: Sol es a Día como Luna es a:",
    "options": [
      {
        "text": "Noche"
      },
      {
        "text": "Estrella"
      },
      {
        "text": "Oscuridad"
      },
      {
        "text": "Cielo"
      }
    ],
    "correctIndex": 0,
    "explanation": "El Sol es el cuerpo celeste característico e iluminador del día, de forma análoga a como la Luna es el cuerpo celeste característico que ilumina la noche."
  },
  {
    "id": "log_38",
    "category": "Razonamiento Lógico",
    "enunciado": "Si a un número de dos dígitos se le suma el doble de la suma de sus dígitos y el resultado es 45, si sus dígitos suman 9, ¿cuál es el número?",
    "options": [
      {
        "text": "27"
      },
      {
        "text": "36"
      },
      {
        "text": "18"
      },
      {
        "text": "45"
      }
    ],
    "correctIndex": 0,
    "explanation": "Sea N el número. Suma de dígitos S = 9. La condición es: N + 2S = 45 => N + 2(9) = 45 => N + 18 = 45 => N = 27. El número es 27, cuyos dígitos (2 y 7) efectivamente suman 9."
  },
  {
    "id": "log_39",
    "category": "Razonamiento Lógico",
    "enunciado": "Indique la letra que continúa la serie: A, D, G, J, M, ...",
    "options": [
      {
        "text": "O"
      },
      {
        "text": "P"
      },
      {
        "text": "N"
      },
      {
        "text": "Q"
      }
    ],
    "correctIndex": 1,
    "explanation": "La serie da saltos de dos letras en el alfabeto: A (b,c) D (e,f) G (h,i) J (k,l) M (n,ñ) P. La siguiente letra es P."
  },
  {
    "id": "log_40",
    "category": "Razonamiento Lógico",
    "enunciado": "Si un ladrillo pesa 1 kg más la mitad de su propio peso, ¿cuánto pesa el ladrillo?",
    "options": [
      {
        "text": "2 kg"
      },
      {
        "text": "1.5 kg"
      },
      {
        "text": "3 kg"
      },
      {
        "text": "4 kg"
      }
    ],
    "correctIndex": 0,
    "explanation": "Sea P el peso del ladrillo. La ecuación es: P = 1 + P/2 => P - P/2 = 1 => P/2 = 1 => P = 2 kg."
  },
  {
    "id": "2555",
    "category": "Razonamiento Verbal",
    "enunciado_html": "<p style=\"text-align: justify;\">Con base en el texto, identifique el sinónimo de la palabra en negrita:</p>\n<p style=\"text-align: justify;\">Don Quijote es una obra <strong> indispensable </strong>para cualquier lector.</p>",
    "enunciado": "Con base en el texto, identifique el sinónimo de la palabra en negrita: Don Quijote es una obra indispensable para cualquier lector.",
    "options": [
      {
        "id": "unknown",
        "text": "Imprescindible"
      },
      {
        "id": "unknown",
        "text": "Preferible"
      },
      {
        "id": "unknown",
        "text": "Reemplazable"
      },
      {
        "id": "unknown",
        "text": "Deseable"
      }
    ],
    "correctIndex": 0,
    "explanation": "La palabra 'indispensable' se refiere a algo que resulta totalmente necesario, de lo que no se puede prescindir. Su sinónimo exacto es 'imprescindible'."
  },
  {
    "id": "4856",
    "category": "Razonamiento Verbal",
    "enunciado_html": "<p><strong>Escoja el sinónimo de la siguiente palabra.</strong></p>\n<p class=\"text-center\">Imparcial</p>",
    "enunciado": "Escoja el sinónimo de la siguiente palabra. Imparcial",
    "options": [
      {
        "id": "unknown",
        "text": "Pesado"
      },
      {
        "id": "unknown",
        "text": "Ecuánime"
      },
      {
        "id": "unknown",
        "text": "Equidistante"
      },
      {
        "id": "unknown",
        "text": "Modesto"
      }
    ],
    "correctIndex": 1,
    "explanation": "Una persona 'imparcial' actúa o juzga con justicia y rectitud, sin inclinarse a favor de nadie. El término 'ecuánime' denota a quien obra con imparcialidad, justicia y estabilidad emocional."
  },
  {
    "id": "4807",
    "category": "Razonamiento Verbal",
    "enunciado_html": "<p>Elige la palabra que más se acerca al significado de:</p>\n<p>Interino</p>",
    "enunciado": "Elige la palabra que más se acerca al significado de: Interino",
    "options": [
      {
        "id": "unknown",
        "text": "Peculiar"
      },
      {
        "id": "unknown",
        "text": "Permanente"
      },
      {
        "id": "unknown",
        "text": "Hipotético"
      },
      {
        "id": "unknown",
        "text": "Provisional"
      }
    ],
    "correctIndex": 3,
    "explanation": "Un puesto 'interino' es aquel que se ejerce de manera temporal y transitoria para suplir la ausencia del titular. Su significado más cercano es 'provisional'."
  },
  {
    "id": "2558",
    "category": "Razonamiento Verbal",
    "enunciado_html": "<p style=\"text-align: justify;\">Identifique el elemento al que hace referencia la metáfora marcada en negrita:</p>\n<p style=\"text-align: justify;\">Jugando un día,<br />un hermoso pequeño,<br />soñaba con paz y justicia<br />en un mundo perfecto.<br />De pronto un aguacero,<br />al niño despertó del sueño.<br />De sus ojos negros,<br /><strong>gotas de diamantes,</strong><br />caían sin cesar.<br />Conociendo la realidad<br />solo se piensa en tempestad<br />Diluvios y tristeza<br />En un mundo sin nobleza.</p>",
    "enunciado": "Identifique el elemento al que hace referencia la metáfora marcada en negrita: Jugando un día, un hermoso pequeño, soñaba con paz y justicia en un mundo perfecto. De pronto un aguacero, al niño despertó del sueño. De sus ojos negros, gotas de diamantes, caían sin cesar. Conociendo la realidad solo se piensa en tempestad Diluvios y tristeza En un mundo sin nobleza.",
    "options": [
      {
        "id": "unknown",
        "text": "Aguaceros"
      },
      {
        "id": "unknown",
        "text": "Lágrimas"
      },
      {
        "id": "unknown",
        "text": "Diluvios"
      },
      {
        "id": "unknown",
        "text": "Tempestades"
      }
    ],
    "correctIndex": 1,
    "explanation": "La metáfora 'gotas de diamantes' que caen de los 'ojos negros' del niño hace referencia directa a las lágrimas que brotan al llorar, por su transparencia, brillo y forma de gota."
  },
  {
    "id": "9334",
    "category": "Razonamiento Verbal",
    "enunciado_html": "<div class=\"fw-semibold\"><p><span>Lo más inquietante acerca de las influencias de la herencia biológica y del medio ambiente del niño, es que somos precisamente los _____ los ____ de ambas cosas.</span></p>",
    "enunciado": "Lo más inquietante acerca de las influencias de la herencia biológica y del medio ambiente del niño, es que somos precisamente los _____ los ____ de ambas cosas.",
    "options": [
      {
        "id": "unknown",
        "text": "tutores – gestores"
      },
      {
        "id": "unknown",
        "text": "hijos – resultados"
      },
      {
        "id": "unknown",
        "text": "profesores – iniciadores"
      },
      {
        "id": "unknown",
        "text": "padres – responsables"
      }
    ],
    "correctIndex": 3,
    "explanation": "Dado que los padres transmiten la herencia biológica de forma genética y además crean e influyen en el entorno doméstico del niño, son los 'padres' los 'responsables' de ambas cosas."
  },
  {
    "id": "verb_21",
    "category": "Razonamiento Verbal",
    "enunciado": "Elija la palabra que es un antónimo de la palabra: EFÍMERO",
    "options": [
      {
        "text": "Duradero"
      },
      {
        "text": "Pasajero"
      },
      {
        "text": "Breve"
      },
      {
        "text": "Fugaz"
      }
    ],
    "correctIndex": 0,
    "explanation": "La palabra 'efímero' significa de corta duración, pasajero o temporal. Su antónimo (significado opuesto) es 'duradero' o permanente."
  },
  {
    "id": "verb_22",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la siguiente analogía verbal: Volante es a Coche como Timón es a:",
    "options": [
      {
        "text": "Barco"
      },
      {
        "text": "Avión"
      },
      {
        "text": "Camino"
      },
      {
        "text": "Carretera"
      }
    ],
    "correctIndex": 0,
    "explanation": "La relación es parte-todo y función de dirección. El volante sirve para direccionar un coche, de la misma manera que el timón sirve para direccionar un barco."
  },
  {
    "id": "verb_23",
    "category": "Razonamiento Verbal",
    "enunciado": "Seleccione el sinónimo de la palabra en negrita: El juez actuó de forma **benévola** con el acusado.",
    "options": [
      {
        "text": "Clemente"
      },
      {
        "text": "Severa"
      },
      {
        "text": "Injusta"
      },
      {
        "text": "Rápida"
      }
    ],
    "correctIndex": 0,
    "explanation": "'Benévola' significa comprensiva, indulgente o bondadosa. El sinónimo más adecuado en este contexto judicial es 'clemente' (que aplica clemencia)."
  },
  {
    "id": "verb_24",
    "category": "Razonamiento Verbal",
    "enunciado": "Identifique el conector que complete de forma coherente el texto: El joven estudió con esmero para el examen de admisión, ______ no logró obtener el cupo deseado debido al alto nivel de competencia.",
    "options": [
      {
        "text": "sin embargo"
      },
      {
        "text": "por lo tanto"
      },
      {
        "text": "es decir"
      },
      {
        "text": "además"
      }
    ],
    "correctIndex": 0,
    "explanation": "El texto plantea una contradicción u oposición entre haber estudiado con esmero y no haber aprobado. Se requiere un conector de carácter adversativo, siendo 'sin embargo' el idóneo."
  },
  {
    "id": "verb_25",
    "category": "Razonamiento Verbal",
    "enunciado": "Elija la opción que complete adecuadamente la analogía: ABEJA es a COLMENA como HORMIGA es a:",
    "options": [
      {
        "text": "Hormiguero"
      },
      {
        "text": "Tierra"
      },
      {
        "text": "Cueva"
      },
      {
        "text": "Bosque"
      }
    ],
    "correctIndex": 0,
    "explanation": "Es una relación de agente a hábitat o lugar de residencia colectiva. La abeja vive y trabaja en la colmena, de forma similar a como la hormiga vive en el hormiguero."
  },
  {
    "id": "verb_26",
    "category": "Razonamiento Verbal",
    "enunciado": "Con base en el texto, identifique el antónimo de la palabra en negrita: El ruido de la manifestación fue **estruendoso**.",
    "options": [
      {
        "text": "Silencioso"
      },
      {
        "text": "Fuerte"
      },
      {
        "text": "Ensordecedor"
      },
      {
        "text": "Molesto"
      }
    ],
    "correctIndex": 0,
    "explanation": "'Estruendoso' hace referencia a un sonido sumamente fuerte, ruidoso y de gran impacto. El antónimo directo de esta palabra es 'silencioso'."
  },
  {
    "id": "verb_27",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la oración con la opción semánticamente correcta: La constante _____ de los bosques provoca la _____ de los suelos.",
    "options": [
      {
        "text": "deforestación – erosión"
      },
      {
        "text": "tala – fertilización"
      },
      {
        "text": "siembra – sequedad"
      },
      {
        "text": "protección – destrucción"
      }
    ],
    "correctIndex": 0,
    "explanation": "Semánticamente, la pérdida de árboles ('deforestación') expone al suelo a la acción del viento y lluvia, dando como consecuencia directa su pérdida de nutrientes y desgaste ('erosión')."
  },
  {
    "id": "verb_28",
    "category": "Razonamiento Verbal",
    "enunciado": "Identifique el significado del término subrayado: La lectura diaria es un hábito que **enriquece** el vocabulario de las personas.",
    "options": [
      {
        "text": "Amplía y mejora"
      },
      {
        "text": "Compra"
      },
      {
        "text": "Dificulta"
      },
      {
        "text": "Limita"
      }
    ],
    "correctIndex": 0,
    "explanation": "En este contexto cultural, 'enriquecer' significa expandir, mejorar o dar valor y variedad al vocabulario, no tiene que ver con riqueza económica."
  },
  {
    "id": "verb_29",
    "category": "Razonamiento Verbal",
    "enunciado": "Elija la palabra que no guarda relación de significado con las otras: Diligente, Activo, Hacendoso, Apático, Trabajador",
    "options": [
      {
        "text": "Apático"
      },
      {
        "text": "Diligente"
      },
      {
        "text": "Hacendoso"
      },
      {
        "text": "Activo"
      }
    ],
    "correctIndex": 0,
    "explanation": "Diligente, activo, hacendoso y trabajador son adjetivos referidos a quien hace sus tareas con presteza, interés y esfuerzo. 'Apático' describe desgana o indiferencia, por ende, es el antónimo y no pertenece al grupo."
  },
  {
    "id": "verb_30",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la analogía: PÁJARO es a NIDO como OSO es a:",
    "options": [
      {
        "text": "Cueva"
      },
      {
        "text": "Selva"
      },
      {
        "text": "Bosque"
      },
      {
        "text": "Miel"
      }
    ],
    "correctIndex": 0,
    "explanation": "El nido es el refugio o casa natural del pájaro, y la cueva (lobera/osera) es el refugio y hogar del oso."
  },
  {
    "id": "verb_31",
    "category": "Razonamiento Verbal",
    "enunciado": "Identifique el sinónimo de la palabra: COPIOSO",
    "options": [
      {
        "text": "Abundante"
      },
      {
        "text": "Escaso"
      },
      {
        "text": "Lento"
      },
      {
        "text": "Repetido"
      }
    ],
    "correctIndex": 0,
    "explanation": "'Copioso' califica a algo que se presenta en gran cantidad o abundancia (por ejemplo, lluvia copiosa). Su sinónimo es 'abundante'."
  },
  {
    "id": "verb_32",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la oración con precisión semántica: Los argumentos del abogado defensor fueron tan _____ que el tribunal decidió _____ al acusado.",
    "options": [
      {
        "text": "convincentes – absolver"
      },
      {
        "text": "débiles – liberar"
      },
      {
        "text": "extensos – condenar"
      },
      {
        "text": "absurdos – perdonar"
      }
    ],
    "correctIndex": 0,
    "explanation": "Para que el tribunal declare inocente o libre ('absolver') al acusado, los argumentos de su defensor deben haber sido sólidos y creíbles ('convincentes')."
  },
  {
    "id": "verb_33",
    "category": "Razonamiento Verbal",
    "enunciado": "Elija la opción que representa el antónimo de la palabra: APATÍA",
    "options": [
      {
        "text": "Entusiasmo"
      },
      {
        "text": "Desgana"
      },
      {
        "text": "Indiferencia"
      },
      {
        "text": "Aburrimiento"
      }
    ],
    "correctIndex": 0,
    "explanation": "'Apatía' es un estado de indiferencia, desinterés o falta de motivación. Su opuesto o antónimo es el 'entusiasmo' o motivación."
  },
  {
    "id": "verb_34",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la analogía: CALIENTE es a FRÍO como LUZ es a:",
    "options": [
      {
        "text": "Oscuridad"
      },
      {
        "text": "Brillo"
      },
      {
        "text": "Lámpara"
      },
      {
        "text": "Sombra"
      }
    ],
    "correctIndex": 0,
    "explanation": "Es una relación de antonimia. Lo opuesto de caliente es frío, y de forma idéntica, lo opuesto de luz es oscuridad."
  },
  {
    "id": "verb_35",
    "category": "Razonamiento Verbal",
    "enunciado": "Seleccione el sinónimo de la palabra: ALTRUISMO",
    "options": [
      {
        "text": "Filantropía"
      },
      {
        "text": "Egoísmo"
      },
      {
        "text": "Ambición"
      },
      {
        "text": "Avaricia"
      }
    ],
    "correctIndex": 0,
    "explanation": "'Altruismo' es la tendencia a procurar el bien ajeno de manera desinteresada. Su sinónimo directo es 'filantropía'."
  },
  {
    "id": "verb_36",
    "category": "Razonamiento Verbal",
    "enunciado": "Identifique el elemento al que hace referencia la metáfora: El manto blanco cubría los campos en el frío amanecer invernal.",
    "options": [
      {
        "text": "La nieve"
      },
      {
        "text": "La niebla"
      },
      {
        "text": "El sol"
      },
      {
        "text": "La paja"
      }
    ],
    "correctIndex": 0,
    "explanation": "En invierno, el 'manto blanco' que cubre los campos hace alusión metafórica a la nieve acumulada sobre el suelo."
  },
  {
    "id": "verb_37",
    "category": "Razonamiento Verbal",
    "enunciado": "Elija la opción que guarde menor relación con la palabra: LIBRO",
    "options": [
      {
        "text": "Pantalla"
      },
      {
        "text": "Página"
      },
      {
        "text": "Portada"
      },
      {
        "text": "Índice"
      }
    ],
    "correctIndex": 0,
    "explanation": "Páginas, portada e índice son partes constitutivas físicas de un libro tradicional. La pantalla pertenece a dispositivos digitales, por lo que es la que menor relación guarda con el concepto base."
  },
  {
    "id": "verb_38",
    "category": "Razonamiento Verbal",
    "enunciado": "Identifique la opción que ordena coherentemente las siguientes palabras para formar una oración con sentido: 1. examen / 2. aprobar / 3. estudió / 4. para / 5. María / 6. el",
    "options": [
      {
        "text": "5, 3, 4, 2, 6, 1 (María estudió para aprobar el examen)"
      },
      {
        "text": "6, 1, 4, 2, 3, 5"
      },
      {
        "text": "5, 4, 2, 6, 1, 3"
      },
      {
        "text": "3, 5, 4, 6, 1, 2"
      }
    ],
    "correctIndex": 0,
    "explanation": "El orden sintáctico correcto en español es Sujeto (María - 5) + Verbo (estudió - 3) + Complemento circunstancial de finalidad (para aprobar el examen - 4, 2, 6, 1)."
  },
  {
    "id": "verb_39",
    "category": "Razonamiento Verbal",
    "enunciado": "Complete la oración: El _____ del volcán causó pánico en las poblaciones _____.",
    "options": [
      {
        "text": "retumbar – aledañas"
      },
      {
        "text": "silencio – lejanas"
      },
      {
        "text": "olor – costeras"
      },
      {
        "text": "humo – desérticas"
      }
    ],
    "correctIndex": 0,
    "explanation": "El sonido fuerte ('retumbar') de un volcán activo genera preocupación inmediata en los habitantes de zonas cercanas o vecinas ('aledañas')."
  },
  {
    "id": "verb_40",
    "category": "Razonamiento Verbal",
    "enunciado": "Seleccione el sinónimo de la palabra en negrita: Aquel joven tiene una actitud muy **altiva**.",
    "options": [
      {
        "text": "Orgullosa"
      },
      {
        "text": "Humilde"
      },
      {
        "text": "Alegre"
      },
      {
        "text": "Inteligente"
      }
    ],
    "correctIndex": 0,
    "explanation": "Una persona 'altiva' es aquella que se cree superior a los demás, comportándose con soberbia u orgullo. Su sinónimo es 'orgullosa'."
  },
  {
    "id": "3647",
    "category": "Atención y Concentración",
    "enunciado_html": "<p><strong>Señalar exactamente al que está resaltado en las respuestas</strong></p>\n<p style=\"text-align: center;\">WU - wu - Wu - <strong>wú -</strong> WÜ </p>",
    "enunciado": "Señalar exactamente al que está resaltado en las respuestas WU - wu - Wu - wú - WÜ",
    "options": [
      {
        "id": "unknown",
        "text": "Wu"
      },
      {
        "id": "unknown",
        "text": "wu"
      },
      {
        "id": "unknown",
        "text": "WU"
      },
      {
        "id": "unknown",
        "text": "wú"
      }
    ],
    "correctIndex": 3,
    "explanation": "La opción que corresponde de forma exacta en ortografía, tilde y letras minúsculas al elemento resaltado en negrita (wú) es la opción 'wú'."
  },
  {
    "id": "3589",
    "category": "Atención y Concentración",
    "enunciado_html": "<p><strong>¿Qué números representan la siguiente palabra?</strong></p>\n<p style=\"text-align: center;\"><strong>MOJAR</strong></p>\n<table style=\"border-collapse: collapse; width: 100.016%; height: 224px;\" border=\"1\">\n<tbody>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>A</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>B</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>C</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>D</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>E</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>F</strong></td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\">78</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">17</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">32</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">58</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">71</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">64</td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>G</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>H</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>I</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>J</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>K</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>L</strong></td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\">15</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">89</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">65</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">31</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">22</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">36</td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>M</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>N</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>O</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>P</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>Q</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>R</strong></td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\">43</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">46</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">87</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">39</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">27</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">13</td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>S</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>T</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>U</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>V</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>W</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>X</strong></td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\">24</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">35</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">72</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">95</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">14</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">23</td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>Y</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"><strong>Z</strong></td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n</tr>\n<tr style=\"height: 22.4px;\">\n<td style=\"width: 16.6668%; height: 22.4px;\">57</td>\n<td style=\"width: 16.6668%; height: 22.4px;\">92</td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n<td style=\"width: 16.6668%; height: 22.4px;\"> </td>\n</tr>\n</tbody>\n</table>",
    "enunciado": "¿Qué números representan la siguiente palabra? MOJAR A B C D E F 78 17 32 58 71 64 G H I J K L 15 89 65 31 22 36 M N O P Q R 43 46 87 39 27 13 S T U V W X 24 35 72 95 14 23 Y Z 57 92",
    "options": [
      {
        "id": "unknown",
        "text": "4387317815"
      },
      {
        "id": "unknown",
        "text": "4387317813"
      },
      {
        "id": "unknown",
        "text": "4687317815"
      },
      {
        "id": "unknown",
        "text": "4687417813"
      }
    ],
    "correctIndex": 1,
    "explanation": "Utilizando la tabla de correspondencias proporcionada: M=43, O=87, J=31, A=78, R=13. Concatenando los valores en orden para 'MOJAR' se obtiene: 4387317813."
  },
  {
    "id": "3527",
    "category": "Atención y Concentración",
    "enunciado_html": "<p><strong>Encuentre la palabra que continúe la siguiente serie:</strong></p>\n<p style=\"text-align: center;\">memoria, membrana, memento</p>",
    "enunciado": "Encuentre la palabra que continúe la siguiente serie: memoria, membrana, memento",
    "options": [
      {
        "id": "unknown",
        "text": "membrete"
      },
      {
        "id": "unknown",
        "text": "melancólico"
      },
      {
        "id": "unknown",
        "text": "mental"
      },
      {
        "id": "unknown",
        "text": "mezcal"
      }
    ],
    "correctIndex": 0,
    "explanation": "Las palabras de la serie ('memoria', 'membrana', 'memento') inician todas con el prefijo 'mem-'. La única opción de respuesta que sigue este patrón de inicio es 'membrete' (las otras inician con mel-, men-, mez-)."
  },
  {
    "id": "7627",
    "category": "Atención y Concentración",
    "enunciado_html": "<p>Marca en la letra I si son id&eacute;nticos &oacute; en la D si son diferentes.</p>\n<p>CAMINA-TROTA-PARA-PARA-TROTA-CAMINA-CAMINA-TROTA-TROTA-TROTA-PARA-CAMINA =</p>\n<p>CAMINA-TROTA-PARA-PARA-TROTA-CAMINA-CAMINA-TROTA-TROTA-TROTA-PARA-CAMINA</p>",
    "enunciado": "Marca en la letra I si son id&eacute;nticos &oacute; en la D si son diferentes. CAMINA-TROTA-PARA-PARA-TROTA-CAMINA-CAMINA-TROTA-TROTA-TROTA-PARA-CAMINA = CAMINA-TROTA-PARA-PARA-TROTA-CAMINA-CAMINA-TROTA-TROTA-TROTA-PARA-CAMINA",
    "options": [
      {
        "id": "unknown",
        "text": "I"
      },
      {
        "id": "unknown",
        "text": "D"
      }
    ],
    "correctIndex": 0,
    "explanation": "Comparando detalladamente ambas cadenas de texto separadas por guiones, se comprueba que son exactamente iguales en cada palabra y orden. Por lo tanto, son idénticas (I)."
  },
  {
    "id": "7602",
    "category": "Atención y Concentración",
    "enunciado_html": "<p>Marca en la letra I si son idénticos ó en la D si son diferentes.</p>\n<p>&p_mmJ1T@Z=3J16M = &p_mmJ1T@Z=3J16M</p>",
    "enunciado": "Marca en la letra I si son idénticos ó en la D si son diferentes. &p_mmJ1T@Z=3J16M = &p_mmJ1T@Z=3J16M",
    "options": [
      {
        "id": "unknown",
        "text": "I"
      },
      {
        "id": "unknown",
        "text": "D"
      }
    ],
    "correctIndex": 0,
    "explanation": "Ambas secuencias de caracteres complejos (&p_mmJ1T@Z=3J16M) son exactamente idénticas carácter por carácter, por lo que la respuesta correcta es 'I'."
  },
  {
    "id": "att_21",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si las dos series de números son exactamente idénticas, o 'D' si son diferentes: 987452614798 = 987452614798",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 0,
    "explanation": "Comparando dígito por dígito ambos números largos, se observa que coinciden exactamente en valor y orden. Son idénticos (I)."
  },
  {
    "id": "att_22",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si las dos series de caracteres son exactamente idénticas, o 'D' si son diferentes: &%#@KJH781_m = &%#@KJH78I_m",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 1,
    "explanation": "Al comparar detalladamente, se nota que en la primera serie figura el número '781' (con el dígito uno) mientras que en la segunda aparece '78I' (con la letra I mayúscula). Por tanto, son diferentes (D)."
  },
  {
    "id": "att_23",
    "category": "Atención y Concentración",
    "enunciado": "Señale la letra que es diferente a las demás en el siguiente grupo:",
    "options": [
      {
        "text": "V"
      },
      {
        "text": "Y"
      },
      {
        "text": "V"
      },
      {
        "text": "V"
      }
    ],
    "correctIndex": 1,
    "explanation": "En el grupo compuesto por tres letras V y una letra Y, la intrusa o diferente es la Y."
  },
  {
    "id": "att_24",
    "category": "Atención y Concentración",
    "enunciado": "Codifique la palabra 'AMOR' sabiendo que: A=9, M=5, O=3, R=2",
    "options": [
      {
        "text": "9532"
      },
      {
        "text": "9352"
      },
      {
        "text": "5932"
      },
      {
        "text": "9523"
      }
    ],
    "correctIndex": 0,
    "explanation": "Reemplazando cada letra de la palabra 'AMOR' por su respectivo código numérico asignado: A=9, M=5, O=3, R=2. El código resultante es 9532."
  },
  {
    "id": "att_25",
    "category": "Atención y Concentración",
    "enunciado": "Encuentre la palabra intrusa o que difiere ortográficamente en la lista: cantar, cantar, canter, cantar, cantar",
    "options": [
      {
        "text": "canter"
      },
      {
        "text": "cantar"
      },
      {
        "text": "cantar (primera)"
      },
      {
        "text": "cantar (última)"
      }
    ],
    "correctIndex": 0,
    "explanation": "La palabra 'canter' contiene la letra 'e' en su segunda sílaba, mientras que todas las demás repeticiones se escriben correctamente como 'cantar' con 'a'. Es el elemento diferente."
  },
  {
    "id": "att_26",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: 4578-XYZ-90-abc = 4578-XYZ-90-abc",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 0,
    "explanation": "Ambas combinaciones alfanuméricas separadas por guiones son totalmente idénticas letra por letra y número por número."
  },
  {
    "id": "att_27",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: #$@_34_fg_TR = #$@_34_gf_TR",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 1,
    "explanation": "En la primera cadena aparece 'fg' en minúsculas y en la segunda se lee 'gf' (letras invertidas). Por lo tanto, son diferentes (D)."
  },
  {
    "id": "att_28",
    "category": "Atención y Concentración",
    "enunciado": "Señale la palabra que continúa la serie de manera ordenada según su primera letra en el abecedario: Abeja, Búho, Cebra, Delfín, ...",
    "options": [
      {
        "text": "Erizo"
      },
      {
        "text": "Águila"
      },
      {
        "text": "Gato"
      },
      {
        "text": "Zorro"
      }
    ],
    "correctIndex": 0,
    "explanation": "Las iniciales de las palabras siguen el abecedario de forma consecutiva: A (Abeja), B (Búho), C (Cebra), D (Delfín). El siguiente término de la serie debe comenzar con la letra E, siendo 'Erizo' la respuesta correcta."
  },
  {
    "id": "att_29",
    "category": "Atención y Concentración",
    "enunciado": "¿Cuántas letras 's' minúsculas hay en la siguiente secuencia? aassaasasasaa",
    "options": [
      {
        "text": "5"
      },
      {
        "text": "6"
      },
      {
        "text": "4"
      },
      {
        "text": "7"
      }
    ],
    "correctIndex": 0,
    "explanation": "Analizando la cadena letra a letra: a, a, **s**, **s**, a, **s**, a, a, **s**, a, **s**, a, a. Contamos un total de 5 letras 's'."
  },
  {
    "id": "att_30",
    "category": "Atención y Concentración",
    "enunciado": "Identifique cuál de los siguientes códigos contiene un error respecto al código de referencia 'REF-789-XYZ':",
    "options": [
      {
        "text": "REF-789-XYZ (sin error)"
      },
      {
        "text": "REF-7B9-XYZ (error en dígito B)"
      },
      {
        "text": "REF-789-XYZ (copia idéntica)"
      },
      {
        "text": "REF-789-XYZ (válido)"
      }
    ],
    "correctIndex": 1,
    "explanation": "La opción 'REF-7B9-XYZ' contiene la letra 'B' en lugar del número '8', lo que constituye un error claro respecto a la referencia original."
  },
  {
    "id": "att_31",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: Juan Pérez Gómez / Calle 10 - Quito = Juan Pérez Gómez / Calle 10 - Quíto",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 1,
    "explanation": "En la segunda cadena figura la palabra 'Quíto' escrita con tilde en la i, a diferencia del original 'Quito' que no lleva tilde. Esto las hace diferentes (D)."
  },
  {
    "id": "att_32",
    "category": "Atención y Concentración",
    "enunciado": "¿Qué palabra representa la siguiente codificación numérica? 3-1-19-1 (usando la correspondencia A=1, B=2, C=3, ..., S=19)",
    "options": [
      {
        "text": "CASA"
      },
      {
        "text": "COSA"
      },
      {
        "text": "CUNA"
      },
      {
        "text": "CARA"
      }
    ],
    "correctIndex": 0,
    "explanation": "Decodificando: 3 = C, 1 = A, 19 = S, 1 = A. Formando la palabra obtenemos 'CASA'."
  },
  {
    "id": "att_33",
    "category": "Atención y Concentración",
    "enunciado": "Señale el número resaltado de forma correcta a partir de la lista: 1478 - 1487 - 1477 - **1488** - 1848",
    "options": [
      {
        "text": "1488"
      },
      {
        "text": "1487"
      },
      {
        "text": "1478"
      },
      {
        "text": "1848"
      }
    ],
    "correctIndex": 0,
    "explanation": "El número que se encuentra resaltado en negrita en el enunciado es '1488', por lo que la opción correcta debe indicar dicho valor exacto."
  },
  {
    "id": "att_34",
    "category": "Atención y Concentración",
    "enunciado": "Encuentre la letra que falta en la serie repetitiva de tres elementos: M, N, O, M, N, O, M, _, O",
    "options": [
      {
        "text": "N"
      },
      {
        "text": "M"
      },
      {
        "text": "O"
      },
      {
        "text": "P"
      }
    ],
    "correctIndex": 0,
    "explanation": "La serie repite cíclicamente la secuencia 'M, N, O'. En la tercera repetición tenemos 'M, _, O', por lo que el carácter faltante es la 'N'."
  },
  {
    "id": "att_35",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: 000100010100 = 000100010100",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 0,
    "explanation": "Ambos números binarios largos coinciden exactamente en cada dígito y en el mismo orden."
  },
  {
    "id": "att_36",
    "category": "Atención y Concentración",
    "enunciado": "Encuentre el elemento que no encaja con los demás en la lista de nombres: Roberto, Rodolfo, Ricardo, Alberto, Rodrigo",
    "options": [
      {
        "text": "Alberto"
      },
      {
        "text": "Roberto"
      },
      {
        "text": "Rodolfo"
      },
      {
        "text": "Rodrigo"
      }
    ],
    "correctIndex": 0,
    "explanation": "Roberto, Rodolfo, Ricardo y Rodrigo comienzan todos con la consonante R. Alberto comienza con la vocal A, siendo el elemento intruso."
  },
  {
    "id": "att_37",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: [12, {34, (56)}] = [12, {34, (56)}]",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 0,
    "explanation": "Ambos conjuntos de corchetes, llaves y paréntesis y sus números internos son exactamente iguales carácter por carácter."
  },
  {
    "id": "att_38",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: info@precavidos.com = info@precavidos.con",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 1,
    "explanation": "La primera dirección termina en '.com' (con m) mientras que la segunda finaliza en '.con' (con n). Esto las hace diferentes (D)."
  },
  {
    "id": "att_39",
    "category": "Atención y Concentración",
    "enunciado": "¿Qué número representa la letra intrusa en la secuencia? 4 4 4 4 4 4 9 4 4 4",
    "options": [
      {
        "text": "9"
      },
      {
        "text": "4"
      },
      {
        "text": "2"
      },
      {
        "text": "5"
      }
    ],
    "correctIndex": 0,
    "explanation": "Toda la secuencia se compone del dígito 4 a excepción del número 9 que aparece en la séptima posición, siendo este el elemento diferente."
  },
  {
    "id": "att_40",
    "category": "Atención y Concentración",
    "enunciado": "Marque 'I' si son idénticos, o 'D' si son diferentes: $ 1,245.90 = $ 1.245,90",
    "options": [
      {
        "text": "I (Idénticos)"
      },
      {
        "text": "D (Diferentes)"
      }
    ],
    "correctIndex": 1,
    "explanation": "El primer valor utiliza coma para los miles y punto para los decimales (formato anglosajón), mientras que el segundo utiliza punto para los miles y coma para los decimales. Son visualmente diferentes en sus símbolos divisores (D)."
  }
];