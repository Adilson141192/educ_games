const SAEB_QUESTIONS = {
    "2": [
        {
            question: "Quantas maçãs há na imagem? 🍎🍎🍎",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "Há 3 maçãs na imagem."
        },
        {
            question: "Qual é o resultado de 5 + 2?",
            options: ["6", "7", "8", "9"],
            correct: 1,
            explanation: "5 + 2 = 7"
        },
        {
            question: "Qual número vem depois do 8?",
            options: ["7", "9", "10", "6"],
            correct: 1,
            explanation: "O número que vem depois do 8 é o 9."
        },
        {
            question: "Quantos lados tem um triângulo?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "Um triângulo tem 3 lados."
        },
        {
            question: "Qual é o número maior: 12 ou 21?",
            options: ["12", "21", "São iguais", "Não sei"],
            correct: 1,
            explanation: "21 é maior que 12."
        },
        {
            question: "Se tenho 4 balas e ganho mais 3, quantas balas tenho no total?",
            options: ["6", "7", "8", "9"],
            correct: 1,
            explanation: "4 + 3 = 7 balas no total."
        },
        {
            question: "Qual forma geométrica é redonda?",
            options: ["Quadrado", "Triângulo", "Círculo", "Retângulo"],
            correct: 2,
            explanation: "O círculo é a forma geométrica redonda."
        },
        {
            question: "Qual é o resultado de 10 - 4?",
            options: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "10 - 4 = 6"
        },
        {
            question: "Quantos dedos temos em uma mão?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "Temos 5 dedos em uma mão."
        },
        {
            question: "Qual número está faltando na sequência: 2, 4, _, 8, 10?",
            options: ["5", "6", "7", "9"],
            correct: 1,
            explanation: "A sequência é de números pares: 2, 4, 6, 8, 10."
        },
        {
            question: "Quantas patas tem um cachorro?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "Um cachorro tem 4 patas."
        },
        {
            question: "Qual é o número que vem antes do 10?",
            options: ["8", "9", "11", "12"],
            correct: 1,
            explanation: "O número que vem antes do 10 é o 9."
        },
        {
            question: "Qual é o resultado de 3 + 3 + 3?",
            options: ["6", "7", "8", "9"],
            correct: 3,
            explanation: "3 + 3 + 3 = 9"
        },
        {
            question: "Qual objeto tem formato de cubo?",
            options: ["Bola", "Dado", "Pirâmide", "Cilindro"],
            correct: 1,
            explanation: "Um dado tem formato de cubo."
        },
        {
            question: "Quantos dias tem uma semana?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "Uma semana tem 7 dias."
        },
        {
            question: "Qual é o número par entre 5 e 7?",
            options: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "O número par entre 5 e 7 é o 6."
        },
        {
            question: "Se um livro tem 10 páginas e li 4, quantas faltam?",
            options: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "10 - 4 = 6 páginas faltam."
        },
        {
            question: "Qual é a cor da banana madura?",
            options: ["Verde", "Azul", "Amarela", "Vermelha"],
            correct: 2,
            explanation: "A banana madura é amarela."
        },
        {
            question: "Quantas vogais tem a palavra 'casa'?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "A palavra 'casa' tem 2 vogais: a e a."
        },
        {
            question: "Qual é o animal que mia?",
            options: ["Cachorro", "Gato", "Vaca", "Galinha"],
            correct: 1,
            explanation: "O gato é o animal que mia."
        },
        {
            question: "Qual é o resultado de 8 - 3?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "8 - 3 = 5"
        },
        {
            question: "Quantas pernas tem uma mesa comum?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "Uma mesa comum tem 4 pernas."
        },
        {
            question: "Qual é a estação do ano mais fria?",
            options: ["Primavera", "Verão", "Outono", "Inverno"],
            correct: 3,
            explanation: "O inverno é a estação mais fria."
        },
        {
            question: "Qual número está entre 15 e 17?",
            options: ["14", "16", "18", "19"],
            correct: 1,
            explanation: "O número entre 15 e 17 é o 16."
        },
        {
            question: "Quantos meses tem um ano?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "Um ano tem 12 meses."
        },
        {
            question: "Qual é o nome do polígono com 4 lados iguais?",
            options: ["Triângulo", "Retângulo", "Quadrado", "Hexágono"],
            correct: 2,
            explanation: "O quadrado tem 4 lados iguais."
        },
        {
            question: "Se tenho 2 reais e ganho mais 3, quanto tenho?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            explanation: "2 + 3 = 5 reais."
        },
        {
            question: "Qual é o maior: 1 dúzia ou 10 unidades?",
            options: ["1 dúzia", "10 unidades", "São iguais", "Não sei"],
            correct: 0,
            explanation: "1 dúzia = 12, que é maior que 10."
        },
        {
            question: "Quantas horas tem um dia?",
            options: ["12", "24", "36", "48"],
            correct: 1,
            explanation: "Um dia tem 24 horas."
        },
        {
            question: "Qual é o resultado de 9 - 4 - 2?",
            options: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "9 - 4 - 2 = 3"
        },
        {
            question: "Qual é o nome do nosso planeta?",
            options: ["Marte", "Vênus", "Terra", "Júpiter"],
            correct: 2,
            explanation: "Nosso planeta se chama Terra."
        },
        {
            question: "Qual é o número que vem depois de 19?",
            options: ["18", "20", "21", "22"],
            correct: 1,
            explanation: "Depois de 19 vem o 20."
        },
        {
            question: "Quantas sílabas tem a palavra 'borboleta'?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "'Bor-bo-le-ta' tem 4 sílabas."
        },
        {
            question: "Qual é o oposto de 'dia'?",
            options: ["Manhã", "Tarde", "Noite", "Ano"],
            correct: 2,
            explanation: "O oposto de 'dia' é 'noite'."
        },
        {
            question: "Qual é o resultado de 6 + 4?",
            options: ["8", "9", "10", "11"],
            correct: 2,
            explanation: "6 + 4 = 10"
        },
        {
            question: "Quantas cores tem o arco-íris?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "O arco-íris tem 7 cores."
        },
        {
            question: "Qual é o nome do número 100?",
            options: ["Dez", "Cem", "Mil", "Dez mil"],
            correct: 1,
            explanation: "O número 100 se chama 'cem'."
        },
        {
            question: "Qual é a forma da lua cheia?",
            options: ["Quadrado", "Triângulo", "Círculo", "Estrela"],
            correct: 2,
            explanation: "A lua cheia tem forma circular."
        },
        {
            question: "Qual é o resultado de 7 - 0?",
            options: ["0", "1", "7", "70"],
            correct: 2,
            explanation: "7 - 0 = 7"
        }
    ],
    "5": [
        {
            question: "João saiu de sua casa e foi encontrar Roberto, que estava na barraquinha de sorvete. Considerando as instruções dadas, Roberto estava em qual posição?",
            options: ["Posição A", "Posição B", "Posição C", "Posição D"],
            correct: 1,
            explanation: "Seguindo as instruções de virar à direita e depois na segunda rua à direita, Roberto estava na Posição B."
        },
        {
            question: "Qual das figuras representa a planificação de um cubo?",
            options: ["Figura A", "Figura B", "Figura C", "Figura D"],
            correct: 2,
            explanation: "A Figura C mostra a planificação correta de um cubo, com 6 quadrados dispostos de forma que possam ser dobrados em um cubo."
        },
        {
            question: "Qual é uma característica comum entre os triângulos mostrados?",
            options: [
                "Possuem um ângulo maior que 90 graus",
                "Possuem um ângulo reto",
                "Todos os ângulos são menores que 90 graus",
                "Não apresentam características em comum"
            ],
            correct: 2,
            explanation: "Todos os triângulos mostrados são acutângulos, com todos os ângulos menores que 90 graus."
        },
        {
            question: "Qual é o resultado de 25 × 4?",
            options: ["50", "75", "100", "125"],
            correct: 2,
            explanation: "25 × 4 = 100"
        },
        {
            question: "Qual é o resultado de 72 ÷ 8?",
            options: ["7", "8", "9", "10"],
            correct: 2,
            explanation: "72 ÷ 8 = 9"
        },
        {
            question: "Qual é o valor posicional do 7 no número 3.752?",
            options: ["7 unidades", "7 dezenas", "7 centenas", "7 milhares"],
            correct: 2,
            explanation: "No número 3.752, o 7 está na casa das centenas."
        },
        {
            question: "Qual fração é equivalente a 1/2?",
            options: ["2/4", "3/5", "1/3", "2/5"],
            correct: 0,
            explanation: "2/4 é equivalente a 1/2 (ambas representam metade)."
        },
        {
            question: "Qual é o perímetro de um quadrado com lados de 5 cm?",
            options: ["10 cm", "15 cm", "20 cm", "25 cm"],
            correct: 2,
            explanation: "Perímetro = 4 × lado = 4 × 5 cm = 20 cm."
        },
        {
            question: "Qual é o resultado de 3/4 + 1/4?",
            options: ["1/4", "1/2", "3/4", "1"],
            correct: 3,
            explanation: "3/4 + 1/4 = 4/4 = 1"
        },
        {
            question: "Qual número é divisível por 2 e por 3?",
            options: ["10", "15", "18", "23"],
            correct: 2,
            explanation: "18 é divisível por 2 (18÷2=9) e por 3 (18÷3=6)."
        },
        {
            question: "Quantos minutos há em 2 horas e meia?",
            options: ["120", "150", "180", "210"],
            correct: 1,
            explanation: "2 horas = 120 minutos, meia hora = 30 minutos, total = 150 minutos."
        },
        {
            question: "Qual é a área de um retângulo com 6 cm de comprimento e 4 cm de largura?",
            options: ["10 cm²", "20 cm²", "24 cm²", "28 cm²"],
            correct: 2,
            explanation: "Área = comprimento × largura = 6 cm × 4 cm = 24 cm²."
        },
        {
            question: "Qual é o antecessor de 1.000?",
            options: ["999", "1.001", "990", "900"],
            correct: 0,
            explanation: "O antecessor de 1.000 é 999."
        },
        {
            question: "Qual é o resultado de 125 + 375?",
            options: ["400", "450", "500", "550"],
            correct: 2,
            explanation: "125 + 375 = 500"
        },
        {
            question: "Qual é o MMC de 4 e 6?",
            options: ["6", "12", "18", "24"],
            correct: 1,
            explanation: "MMC(4,6) = 12 (múltiplos de 4: 4,8,12...; de 6: 6,12...)."
        },
        {
            question: "Qual é o resultado de 0,7 + 0,3?",
            options: ["0,1", "0,4", "1", "1,0"],
            correct: 3,
            explanation: "0,7 + 0,3 = 1,0"
        },
        {
            question: "Quantos centímetros há em 1 metro?",
            options: ["10", "100", "1.000", "10.000"],
            correct: 1,
            explanation: "1 metro = 100 centímetros."
        },
        {
            question: "Qual é o triângulo que tem todos os lados iguais?",
            options: ["Escaleno", "Isósceles", "Equilátero", "Retângulo"],
            correct: 2,
            explanation: "Triângulo equilátero tem todos os lados iguais."
        },
        {
            question: "Qual é o resultado de 48 ÷ 6?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            explanation: "48 ÷ 6 = 8"
        },
        {
            question: "Qual é o número primo entre 10 e 15?",
            options: ["11", "12", "13", "14"],
            correct: 0,
            explanation: "11 e 13 são primos entre 10 e 15."
        },
        {
            question: "Qual é o resultado de 15 × 6?",
            options: ["60", "75", "90", "105"],
            correct: 2,
            explanation: "15 × 6 = 90"
        },
        {
            question: "Quantos graus tem um ângulo raso?",
            options: ["90°", "120°", "180°", "360°"],
            correct: 2,
            explanation: "Ângulo raso mede 180°."
        },
        {
            question: "Qual é o resultado de 3/5 - 1/5?",
            options: ["1/5", "2/5", "3/5", "4/5"],
            correct: 1,
            explanation: "3/5 - 1/5 = 2/5"
        },
        {
            question: "Qual é o dobro de 45?",
            options: ["80", "90", "100", "110"],
            correct: 1,
            explanation: "Dobro de 45 é 90."
        },
        {
            question: "Qual é a forma decimal de 3/4?",
            options: ["0,25", "0,5", "0,75", "1,0"],
            correct: 2,
            explanation: "3/4 = 0,75"
        },
        {
            question: "Quantos lados tem um hexágono?",
            options: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "Hexágono tem 6 lados."
        },
        {
            question: "Qual é o resultado de 12²?",
            options: ["121", "124", "144", "169"],
            correct: 2,
            explanation: "12² = 12 × 12 = 144"
        },
        {
            question: "Qual é o MDC de 15 e 25?",
            options: ["3", "5", "15", "25"],
            correct: 1,
            explanation: "MDC(15,25) = 5"
        },
        {
            question: "Quantos mililitros há em 1 litro?",
            options: ["10", "100", "1.000", "10.000"],
            correct: 2,
            explanation: "1 litro = 1.000 mililitros."
        },
        {
            question: "Qual é o resultado de 7 × 8?",
            options: ["48", "54", "56", "64"],
            correct: 2,
            explanation: "7 × 8 = 56"
        },
        {
            question: "Qual é a metade de 3/4?",
            options: ["1/4", "3/8", "1/2", "5/8"],
            correct: 1,
            explanation: "Metade de 3/4 é 3/8."
        },
        {
            question: "Quantos metros há em 2 quilômetros?",
            options: ["20", "200", "2.000", "20.000"],
            correct: 2,
            explanation: "2 km = 2.000 metros."
        },
        {
            question: "Qual é o resultado de 1/3 + 1/6?",
            options: ["1/9", "1/3", "1/2", "2/3"],
            correct: 2,
            explanation: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2"
        },
        {
            question: "Qual é o número romano para 50?",
            options: ["V", "X", "L", "C"],
            correct: 2,
            explanation: "O número romano para 50 é L."
        },
        {
            question: "Qual é o resultado de 0,25 × 100?",
            options: ["2,5", "25", "250", "2.500"],
            correct: 1,
            explanation: "0,25 × 100 = 25"
        },
        {
            question: "Quantos gramas há em 1 quilograma?",
            options: ["10", "100", "1.000", "10.000"],
            correct: 2,
            explanation: "1 kg = 1.000 gramas."
        },
        {
            question: "Qual é o resultado de 5/8 - 1/8?",
            options: ["1/8", "1/4", "1/2", "4/8"],
            correct: 3,
            explanation: "5/8 - 1/8 = 4/8 = 1/2"
        },
        {
            question: "Qual é o polígono com 5 lados?",
            options: ["Quadrilátero", "Pentágono", "Hexágono", "Heptágono"],
            correct: 1,
            explanation: "Polígono de 5 lados é o pentágono."
        },
        {
            question: "Qual é o resultado de 9 × 7?",
            options: ["54", "63", "72", "81"],
            correct: 1,
            explanation: "9 × 7 = 63"
        },
        {
            question: "Qual é o número que multiplicado por 8 dá 64?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            explanation: "8 × 8 = 64"
        },
        {
            question: "Quantos segundos há em 1 minuto?",
            options: ["30", "60", "90", "120"],
            correct: 1,
            explanation: "1 minuto = 60 segundos."
        }
    ],
    "9": [
        {
            question: "Qual é o resultado de 3² + 4²?",
            options: ["5", "7", "12", "25"],
            correct: 3,
            explanation: "3² = 9, 4² = 16, então 9 + 16 = 25."
        },
        {
            question: "Qual é a raiz quadrada de 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "12 × 12 = 144, então √144 = 12."
        },
        {
            question: "Qual é o valor de x na equação 2x + 5 = 15?",
            options: ["5", "10", "15", "20"],
            correct: 0,
            explanation: "2x + 5 = 15 → 2x = 10 → x = 5."
        },
        // ... (continuar com as demais questões)
        {
            question: "Qual é a fórmula da distância entre dois pontos (x₁,y₁) e (x₂,y₂)?",
            options: [
                "√(x₂ - x₁) + (y₂ - y₁)",
                "√(x₂ - x₁)² + (y₂ - y₁)²",
                "(x₂ - x₁)² + (y₂ - y₁)²",
                "|x₂ - x₁| + |y₂ - y₁|"
            ],
            correct: 1,
            explanation: "Distância = √[(x₂ - x₁)² + (y₂ - y₁)²]."
        },
        {
            question: "Qual é o resultado de (√3)²?",
            options: ["√3", "3", "9", "27"],
            correct: 1,
            explanation: "(√3)² = 3."
        },
        {
            question: "Qual é o resultado de 3² + 4²?",
            options: ["5", "7", "12", "25"],
            correct: 3,
            explanation: "3² = 9, 4² = 16, então 9 + 16 = 25."
        },
        {
            question: "Qual é a raiz quadrada de 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "12 × 12 = 144, então √144 = 12."
        },
        {
            question: "Qual é o valor de x na equação 2x + 5 = 15?",
            options: ["5", "10", "15", "20"],
            correct: 0,
            explanation: "2x + 5 = 15 → 2x = 10 → x = 5."
        },
        {
            question: "Qual é o MMC de 6 e 8?",
            options: ["12", "24", "36", "48"],
            correct: 1,
            explanation: "MMC(6,8) = 24 (múltiplos de 6: 6,12,18,24...; de 8: 8,16,24...)."
        },
        {
            question: "Qual é a fórmula da área de um triângulo?",
            options: ["base × altura", "(base × altura)/2", "π × raio²", "lado × lado"],
            correct: 1,
            explanation: "Área do triângulo = (base × altura)/2."
        },
        {
            question: "Qual é o resultado de 0,5 × 0,2?",
            options: ["0,1", "0,01", "1", "10"],
            correct: 0,
            explanation: "0,5 × 0,2 = 0,10 = 0,1."
        },
        {
            question: "Qual é a medida do ângulo reto?",
            options: ["45°", "90°", "180°", "360°"],
            correct: 1,
            explanation: "Um ângulo reto mede exatamente 90°."
        },
        {
            question: "Qual é a fórmula do teorema de Pitágoras?",
            options: ["a² = b² + c²", "a + b = c", "a × b = c", "a + b + c = 180°"],
            correct: 0,
            explanation: "Teorema de Pitágoras: a² = b² + c² (para um triângulo retângulo)."
        },
        {
            question: "Qual é o MDC de 18 e 24?",
            options: ["3", "6", "12", "18"],
            correct: 1,
            explanation: "MDC(18,24) = 6 (divisores de 18: 1,2,3,6,9,18; de 24: 1,2,3,4,6,8,12,24)."
        },
        {
            question: "Qual é o valor de π (pi) aproximado?",
            options: ["2,14", "3,14", "4,14", "5,14"],
            correct: 1,
            explanation: "O valor de π é aproximadamente 3,14."
        },
        {
            question: "Qual é a fórmula para calcular a média aritmética?",
            options: [
                "soma dos valores × quantidade de valores",
                "soma dos valores ÷ quantidade de valores",
                "maior valor - menor valor",
                "soma dos valores ÷ 2"
            ],
            correct: 1,
            explanation: "Média = soma dos valores ÷ quantidade de valores."
        },
        {
            question: "Qual é o resultado de 25% de 80?",
            options: ["15", "20", "25", "30"],
            correct: 1,
            explanation: "25% de 80 = 0,25 × 80 = 20."
        },
        {
            question: "Qual é o resultado de (2 + 3)²?",
            options: ["10", "13", "25", "30"],
            correct: 2,
            explanation: "(2 + 3)² = 5² = 25"
        },
        {
            question: "Qual é a raiz cúbica de 8?",
            options: ["2", "3", "4", "5"],
            correct: 0,
            explanation: "2 × 2 × 2 = 8, então ∛8 = 2."
        },
        {
            question: "Qual é a equação da reta?",
            options: ["y = ax + b", "y = a/x + b", "y = ax² + b", "y = a + b"],
            correct: 0,
            explanation: "A equação da reta é y = ax + b."
        },
        {
            question: "Qual é o resultado de 3! (fatorial de 3)?",
            options: ["3", "6", "9", "12"],
            correct: 1,
            explanation: "3! = 3 × 2 × 1 = 6"
        },
        {
            question: "Qual é o volume de um cubo com aresta de 3 cm?",
            options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
            correct: 2,
            explanation: "Volume = aresta³ = 3³ = 27 cm³."
        },
        {
            question: "Qual é o conjunto solução de x² - 9 = 0?",
            options: ["{3}", "{-3}", "{3, -3}", "{}"],
            correct: 2,
            explanation: "x² - 9 = 0 → x² = 9 → x = ±3."
        },
        {
            question: "Qual é a soma dos ângulos internos de um triângulo?",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1,
            explanation: "A soma dos ângulos internos de um triângulo é 180°."
        },
        {
            question: "Qual é o logaritmo de 100 na base 10?",
            options: ["1", "2", "10", "100"],
            correct: 1,
            explanation: "log₁₀100 = 2, pois 10² = 100."
        },
        {
            question: "Qual é a fórmula da área do círculo?",
            options: ["π × raio", "π × diâmetro", "π × raio²", "2 × π × raio"],
            correct: 2,
            explanation: "Área do círculo = π × raio²."
        },
        {
            question: "Qual é o resultado de 2⁻²?",
            options: ["-4", "-1/4", "1/4", "4"],
            correct: 2,
            explanation: "2⁻² = 1/2² = 1/4."
        },
        {
            question: "Qual é a probabilidade de sair cara no lançamento de uma moeda?",
            options: ["25%", "50%", "75%", "100%"],
            correct: 1,
            explanation: "Probabilidade de sair cara é 1/2 ou 50%."
        },
        {
            question: "Qual é o seno de 30°?",
            options: ["0", "1/2", "√2/2", "1"],
            correct: 1,
            explanation: "sen(30°) = 1/2."
        },
        {
            question: "Qual é o resultado de √50 simplificado?",
            options: ["2√5", "5√2", "10√5", "25√2"],
            correct: 1,
            explanation: "√50 = √(25×2) = 5√2."
        },
        {
            question: "Qual é a fórmula do volume da esfera?",
            options: ["4/3 πr²", "4/3 πr³", "2πr", "πr²h"],
            correct: 1,
            explanation: "Volume da esfera = 4/3 πr³."
        },
        {
            question: "Qual é a derivada de x²?",
            options: ["x", "2x", "x³/3", "2"],
            correct: 1,
            explanation: "A derivada de x² é 2x."
        },
        {
            question: "Qual é o resultado de 10⁰?",
            options: ["0", "1", "10", "100"],
            correct: 1,
            explanation: "Qualquer número elevado a 0 é 1."
        },
        {
            question: "Qual é a fórmula da distância entre dois pontos (x₁,y₁) e (x₂,y₂)?",
            options: [
                "√(x₂ - x₁) + (y₂ - y₁)",
                "√(x₂ - x₁)² + (y₂ - y₁)²",
                "(x₂ - x₁)² + (y₂ - y₁)²",
                "|x₂ - x₁| + |y₂ - y₁|"
            ],
            correct: 1,
            explanation: "Distância = √[(x₂ - x₁)² + (y₂ - y₁)²]."
        },
        {
            question: "Qual é o conjunto dos números primos entre 10 e 20?",
            options: ["{11,13,17}", "{11,13,17,19}", "{12,14,16,18}", "{13,17,19}"],
            correct: 1,
            explanation: "Os primos entre 10 e 20 são 11, 13, 17 e 19."
        },
        {
            question: "Qual é a tangente de 45°?",
            options: ["0", "1", "√2", "√3"],
            correct: 1,
            explanation: "tan(45°) = 1."
        },
        {
            question: "Qual é a equação quadrática?",
            options: ["ax + b = 0", "ax² + bx + c = 0", "a/x + b = 0", "ax³ + bx² + c = 0"],
            correct: 1,
            explanation: "Equação quadrática: ax² + bx + c = 0."
        },
        {
            question: "Qual é o resultado de 3 × 10³?",
            options: ["30", "300", "3.000", "30.000"],
            correct: 2,
            explanation: "3 × 10³ = 3 × 1.000 = 3.000."
        },
        {
            question: "Qual é a fórmula da soma dos termos de uma PA finita?",
            options: [
                "n(a₁ + aₙ)/2",
                "a₁ + (n-1)r",
                "a₁ × r^(n-1)",
                "a₁/(1 - r)"
            ],
            correct: 0,
            explanation: "Soma = n(a₁ + aₙ)/2, onde n é o número de termos."
        },
        {
            question: "Qual é o coseno de 60°?",
            options: ["0", "1/2", "√2/2", "√3/2"],
            correct: 1,
            explanation: "cos(60°) = 1/2."
        },
        {
            question: "Qual é o resultado de log₂8?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "log₂8 = 3, pois 2³ = 8."
        },
        {
            question: "Qual é a fórmula do comprimento da circunferência?",
            options: ["πr", "2πr", "πr²", "4πr²"],
            correct: 1,
            explanation: "Comprimento = 2πr."
        },
        {
            question: "Qual é a solução para 2x - 4 = 10?",
            options: ["3", "5", "7", "9"],
            correct: 2,
            explanation: "2x - 4 = 10 → 2x = 14 → x = 7."
        },
        {
            question: "Qual é o resultado de (√3)²?",
            options: ["√3", "3", "9", "27"],
            correct: 1,
            explanation: "(√3)² = 3."
        }
    ]
};