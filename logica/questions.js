const LOGIC_QUESTIONS = {
    "easy": [
        {
            question: "Se todos os gatos são pretos e o Totó é um gato, qual é a cor do Totó?",
            options: [
                "Preto",
                "Branco",
                "Cinza",
                "Marrom"
            ],
            correct: 0,
            explanation: "Se todos os gatos são pretos e Totó é um gato, então Totó é preto."
        },
        {
            question: "Complete a sequência: 2, 4, 6, 8, ?",
            options: [
                "9",
                "10",
                "12",
                "14"
            ],
            correct: 1,
            explanation: "A sequência aumenta de 2 em 2: 2+2=4, 4+2=6, 6+2=8, 8+2=10."
        },
        {
            question: "Se ontem foi segunda-feira, que dia será depois de amanhã?",
            options: [
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira"
            ],
            correct: 2,
            explanation: "Ontem = segunda, hoje = terça, amanhã = quarta, depois de amanhã = quinta."
        },
        {
            question: "Qual figura completa o padrão? (quadrado, círculo, quadrado, círculo, ?)",
            options: [
                "Quadrado",
                "Círculo",
                "Triângulo",
                "Retângulo"
            ],
            correct: 0,
            explanation: "O padrão alterna entre quadrado e círculo. O próximo é quadrado."
        },
        {
            question: "Se A = 1, B = 2, então C = ?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correct: 2,
            explanation: "As letras correspondem à sua posição no alfabeto: A=1, B=2, C=3."
        },
        {
            question: "Qual é o oposto de 'alto'?",
            options: [
                "Grande",
                "Pequeno",
                "Baixo",
                "Largo"
            ],
            correct: 2,
            explanation: "O oposto de 'alto' é 'baixo'."
        },
        {
            question: "Se 3 laranjas custam R$ 6, quanto custam 5 laranjas?",
            options: [
                "R$ 8",
                "R$ 10",
                "R$ 12",
                "R$ 15"
            ],
            correct: 1,
            explanation: "Cada laranja custa R$ 2 (6 ÷ 3), então 5 laranjas custam R$ 10 (5 × 2)."
        },
        {
            question: "Qual palavra não pertence ao grupo?",
            options: [
                "Cachorro",
                "Gato",
                "Peixe",
                "Árvore"
            ],
            correct: 3,
            explanation: "Todos são animais, exceto 'Árvore' que é um vegetal."
        },
        {
            question: "Se você virar uma imagem de um gato de cabeça para baixo, o que acontece?",
            options: [
                "Vira um cachorro",
                "Continua sendo um gato",
                "Vira um pássaro",
                "Desaparece"
            ],
            correct: 1,
            explanation: "Virar uma imagem não muda o que ela representa, continua sendo um gato."
        },
        {
            question: "Qual é o próximo número na sequência: 5, 10, 15, 20, ?",
            options: [
                "21",
                "22",
                "25",
                "30"
            ],
            correct: 2,
            explanation: "A sequência aumenta de 5 em 5: 5+5=10, 10+5=15, 15+5=20, 20+5=25."
        }
    ],
    "medium": [
        {
            question: "Se um relógio marca 15:30, que horas ele marca em um relógio de 12 horas?",
            options: [
                "3:30 AM",
                "3:30 PM",
                "5:30 PM",
                "1:30 PM"
            ],
            correct: 1,
            explanation: "15:00 é 3 PM, então 15:30 é 3:30 PM."
        },
        {
            question: "Se 5 máquinas fazem 5 peças em 5 minutos, quanto tempo levam 100 máquinas para fazer 100 peças?",
            options: [
                "5 minutos",
                "20 minutos",
                "100 minutos",
                "500 minutos"
            ],
            correct: 0,
            explanation: "Cada máquina faz uma peça em 5 minutos, independente do número de máquinas."
        },
        {
            question: "Qual é o próximo na sequência: O, T, T, F, F, S, S, ?",
            options: [
                "E",
                "O",
                "T",
                "N"
            ],
            correct: 0,
            explanation: "São as iniciais dos números em inglês: One, Two, Three, Four, Five, Six, Seven, Eight."
        },
        {
            question: "Um casal tem 5 filhas, cada filha tem um irmão. Quantos filhos tem o casal?",
            options: [
                "5",
                "6",
                "10",
                "12"
            ],
            correct: 1,
            explanation: "5 filhas + 1 filho (o irmão é o mesmo para todas) = 6 filhos."
        },
        {
            question: "Se 3 pessoas levam 3 horas para pintar 3 paredes, quanto tempo levam 9 pessoas para pintar 9 paredes?",
            options: [
                "1 hora",
                "3 horas",
                "6 horas",
                "9 horas"
            ],
            correct: 1,
            explanation: "Assim como no caso anterior, mais pessoas e mais paredes mantêm o tempo constante."
        },
        {
            question: "Qual é o peso de um tijolo se ele pesa 1kg mais meio tijolo?",
            options: [
                "1 kg",
                "1.5 kg",
                "2 kg",
                "2.5 kg"
            ],
            correct: 2,
            explanation: "Se x = peso do tijolo, então x = 1 + 0.5x → 0.5x = 1 → x = 2 kg."
        },
        {
            question: "Se 1=3, 2=3, 3=5, 4=4, 5=4, então 6=?",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 0,
            explanation: "O número corresponde à quantidade de letras na palavra: 'um' tem 2 letras (mas a sequência começa em 3), 'dois' tem 4, 'três' tem 4, etc."
        },
        {
            question: "Qual número completa a sequência: 1, 1, 2, 3, 5, 8, ?",
            options: [
                "10",
                "11",
                "12",
                "13"
            ],
            correct: 3,
            explanation: "Sequência de Fibonacci: cada número é a soma dos dois anteriores (5+8=13)."
        },
        {
            question: "Se você tem 3 maçãs e tira 2, quantas você tem?",
            options: [
                "1",
                "2",
                "3",
                "5"
            ],
            correct: 1,
            explanation: "Se você 'tira' 2, você fica com essas 2 maçãs que tirou."
        },
        {
            question: "Qual é o próximo símbolo na sequência: ♠, ♣, ♥, ♦, ?",
            options: [
                "♠",
                "♣",
                "♥",
                "♦"
            ],
            correct: 0,
            explanation: "São os naipes de baralho em ordem: espadas, paus, copas, ouros, e depois repete."
        }
    ],
    "hard": [
        {
            question: "Um trem elétrico viaja para o norte a 100km/h. O vento sopra para o sul a 10km/h. Para que lado vai a fumaça do trem?",
            options: [
                "Norte",
                "Sul",
                "Leste",
                "Trem elétrico não produz fumaça"
            ],
            correct: 3,
            explanation: "Trens elétricos não produzem fumaça."
        },
        {
            question: "Quantos meses têm 28 dias em um ano?",
            options: [
                "1",
                "2",
                "12",
                "Depende do ano"
            ],
            correct: 2,
            explanation: "Todos os meses têm pelo menos 28 dias."
        },
        {
            question: "Se 2 é 3 e 3 é 5 e 5 é 4, então 4 é quanto?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            correct: 2,
            explanation: "O número corresponde à quantidade de letras na palavra: 'dois' tem 4, 'três' tem 4, 'cinco' tem 5, 'quatro' tem 5, mas a sequência parece seguir outro padrão."
        },
        {
            question: "Um avião cai exatamente na fronteira entre EUA e Canadá. Onde os sobreviventes são enterrados?",
            options: [
                "EUA",
                "Canadá",
                "Ambos os países",
                "Sobreviventes não são enterrados"
            ],
            correct: 3,
            explanation: "Sobreviventes não precisam ser enterrados."
        },
        {
            question: "Se um médico lhe dá 3 pílulas e diz para tomar uma a cada meia hora, quanto tempo durarão as pílulas?",
            options: [
                "30 minutos",
                "60 minutos",
                "90 minutos",
                "120 minutos"
            ],
            correct: 1,
            explanation: "Toma a primeira na hora 0, a segunda na hora 30, a terceira na hora 60 - total 1 hora."
        },
        {
            question: "Você entra em uma sala com 3 interruptores. Uma lâmpada está em outra sala. Como descobrir qual interruptor controla a lâmpada, com apenas uma ida até a lâmpada?",
            options: [
                "Ligar todos e ver qual acende",
                "Ligar o primeiro por 5 minutos, desligar e ligar o segundo",
                "Ligar o primeiro por 5 minutos, desligar e ligar o segundo, então sentir o calor",
                "Não é possível determinar"
            ],
            correct: 2,
            explanation: "Ligue o primeiro interruptor por 5 minutos (a lâmpada esquenta), desligue e ligue o segundo. A lâmpada acesa é do segundo, quente e apagada é do primeiro, fria e apagada é do terceiro."
        },
        {
            question: "Um homem olha para um retrato e diz: 'Irmãos e irmãs eu não tenho, mas o pai desse homem é filho do meu pai'. Quem está no retrato?",
            options: [
                "Seu pai",
                "Seu filho",
                "Ele mesmo",
                "Seu avô"
            ],
            correct: 1,
            explanation: "'O pai desse homem' é ele mesmo (pois não tem irmãos), e 'filho do meu pai' também é ele, então o homem no retrato é seu filho."
        },
        {
            question: "Qual é o próximo na sequência: 1, 11, 21, 1211, 111221, ?",
            options: [
                "312211",
                "122121",
                "222111",
                "111222"
            ],
            correct: 0,
            explanation: "Sequência 'look-and-say': descreva o número anterior. 1 = 'um 1' → 11; 11 = 'dois 1s' → 21; 21 = 'um 2, um 1' → 1211, etc."
        },
        {
            question: "Se 3 pessoas podem carregar 3 caixas em 3 horas, quantas pessoas são necessárias para carregar 100 caixas em 100 horas?",
            options: [
                "3",
                "30",
                "100",
                "300"
            ],
            correct: 0,
            explanation: "Se 3 pessoas carregam 1 caixa cada em 3 horas, então 3 pessoas podem carregar 100 caixas em 100 horas (cada uma carrega ~33 caixas)."
        },
        {
            question: "Você tem dois jarros, um de 3 litros e outro de 5 litros. Como medir exatamente 4 litros de água?",
            options: [
                "Encher o de 5, despejar no de 3, sobra 2 no de 5",
                "Encher o de 3, despejar no de 5, repetir",
                "Encher ambos e dividir",
                "Não é possível"
            ],
            correct: 0,
            explanation: "Encha o de 5, despeje no de 3 até encher (sobra 2 no de 5). Esvazie o de 3, coloque os 2 litros restantes do de 5 no de 3. Encha o de 5 novamente e complete o de 3 (que já tem 2), adicionando 1 litro. Sobram exatamente 4 litros no jarro de 5."
        }
    ]
};