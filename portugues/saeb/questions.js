const SAEB_QUESTIONS = {
    "2": [
        {
            question: "Qual palavra completa a frase: 'O ____ está quente'?",
            options: [
                "sol",
                "sól",
                "sôl",
                "soll"
            ],
            correct: 0,
            explanation: "A grafia correta é 'sol' com 's' e 'l' no final."
        },
        {
            question: "Qual é o plural de 'casa'?",
            options: [
                "casas",
                "cazas",
                "cases",
                "casais"
            ],
            correct: 0,
            explanation: "O plural de palavras terminadas em 'a' é feito acrescentando 's'."
        },
        {
            question: "Qual desenho mostra uma ação?",
            options: [
                "Um menino sentado",
                "Uma casa",
                "Um menino correndo",
                "Uma árvore"
            ],
            correct: 2,
            explanation: "'Correndo' mostra uma ação, enquanto os outros são objetos ou estados."
        },
        {
            question: "Qual palavra rima com 'pato'?",
            options: [
                "gato",
                "casa",
                "livro",
                "flor"
            ],
            correct: 0,
            explanation: "'Gato' rima com 'pato' pois terminam com o mesmo som 'ato'."
        },
        {
            question: "Qual frase está escrita corretamente?",
            options: [
                "Eu gosto de brincar.",
                "eu gosto de brincar",
                "Eu gosto de brincar",
                "eu gosto de brincar."
            ],
            correct: 0,
            explanation: "A frase deve começar com letra maiúscula e terminar com ponto."
        },
        // Novas questões SAEB 2º ano
        {
            question: "Qual palavra está escrita corretamente?",
            options: [
                "Bola",
                "Bolla",
                "Bóla",
                "Bôla"
            ],
            correct: 0,
            explanation: "A grafia correta é 'bola' com 'b' e 'l'."
        },
        {
            question: "Qual palavra completa a frase: 'Eu gosto de comer ____.'?",
            options: [
                "maça",
                "maçã",
                "massã",
                "massa"
            ],
            correct: 1,
            explanation: "A grafia correta é 'maçã' com 'ç' e til."
        },
        {
            question: "Qual é o antônimo de 'alto'?",
            options: [
                "grande",
                "pequeno",
                "baixo",
                "leve"
            ],
            correct: 2,
            explanation: "O antônimo de 'alto' é 'baixo'."
        },
        {
            question: "Qual frase faz sentido?",
            options: [
                "O peixe voou no céu.",
                "O pássaro nadou no mar.",
                "O cachorro latiu para o gato.",
                "A árvore correu no parque."
            ],
            correct: 2,
            explanation: "A única frase que faz sentido é 'O cachorro latiu para o gato'."
        },
        {
            question: "Qual palavra tem o som do 'x' igual em 'caixa'?",
            options: [
                "chave",
                "xícara",
                "enxada",
                "texto"
            ],
            correct: 2,
            explanation: "'Enxada' tem o mesmo som do 'x' em 'caixa'."
        }
    ],
    "5": [
        {
            question: "Qual é o sujeito da frase: 'As crianças brincam no parque'?",
            options: [
                "brincam",
                "no parque",
                "As crianças",
                "parque"
            ],
            correct: 2,
            explanation: "O sujeito é 'As crianças', pois é quem pratica a ação de brincar."
        },
        {
            question: "Qual alternativa completa corretamente a frase: 'Se eu ______ mais cedo, teria chegado a tempo'?",
            options: [
                "tivesse saído",
                "teria saído",
                "saísse",
                "sairia"
            ],
            correct: 0,
            explanation: "A forma correta é 'tivesse saído' pois se trata de uma condição irreal no passado."
        },
        {
            question: "No texto, o trecho 'O menino olhou para o céu' indica que:",
            options: [
                "O menino estava triste",
                "O menino estava observando algo",
                "O menino estava com sono",
                "O menino estava com medo"
            ],
            correct: 1,
            explanation: "O verbo 'olhar' indica uma ação de observar algo atentamente."
        },
        {
            question: "Qual é o plural de 'pão'?",
            options: [
                "pães",
                "pãos",
                "pãoes",
                "pãs"
            ],
            correct: 0,
            explanation: "O plural de 'pão' é 'pães', seguindo a regra de palavras terminadas em '-ão'."
        },
        {
            question: "Qual palavra está escrita corretamente?",
            options: [
                "Caza",
                "Cassa",
                "Casa",
                "Caza"
            ],
            correct: 2,
            explanation: "A grafia correta é 'casa' com 's' entre vogais."
        },
        // Novas questões SAEB 5º ano
        {
            question: "Qual é o sujeito da frase: 'Durante a noite, choveu muito'?",
            options: [
                "noite",
                "choveu",
                "muito",
                "sujeito indeterminado"
            ],
            correct: 3,
            explanation: "A frase possui sujeito indeterminado, pois não é possível identificar quem pratica a ação de chover."
        },
        {
            question: "Qual alternativa apresenta uma linguagem formal?",
            options: [
                "Mano, que legal!",
                "Cara, isso é demais!",
                "Senhor, poderia me ajudar?",
                "Ei, vem cá!"
            ],
            correct: 2,
            explanation: "A frase 'Senhor, poderia me ajudar?' utiliza linguagem formal."
        },
        {
            question: "Qual é o sinônimo de 'alegre'?",
            options: [
                "triste",
                "feliz",
                "bravo",
                "calmo"
            ],
            correct: 1,
            explanation: "O sinônimo de 'alegre' é 'feliz'."
        },
        {
            question: "Qual frase está na voz passiva?",
            options: [
                "O professor corrigiu as provas.",
                "As provas foram corrigidas pelo professor.",
                "O professor está corrigindo as provas.",
                "O professor corrigirá as provas."
            ],
            correct: 1,
            explanation: "A frase 'As provas foram corrigidas pelo professor' está na voz passiva."
        },
        {
            question: "Qual é o adjunto adverbial em: 'Eles chegaram cedo para a festa'?",
            options: [
                "Eles",
                "chegaram",
                "cedo",
                "festa"
            ],
            correct: 2,
            explanation: "'Cedo' é um adjunto adverbial de tempo."
        },
        {
            question: "Qual palavra é oxítona?",
            options: [
                "casa",
                "livro",
                "sofá",
                "mesa"
            ],
            correct: 2,
            explanation: "'Sofá' é oxítona porque a sílaba tônica é a última."
        }
    ],
    "9": [
        {
            question: "Qual é a função da palavra 'mas' no trecho: 'Ele queria ir, mas estava cansado'?",
            options: [
                "Adicionar informações",
                "Apresentar uma oposição",
                "Indicar tempo",
                "Mostrar causa"
            ],
            correct: 1,
            explanation: "A conjunção 'mas' é usada para expressar ideias contrárias ou de oposição."
        },
        {
            question: "Qual é o tipo de sujeito na frase: 'Choveu muito ontem'?",
            options: [
                "Sujeito simples",
                "Sujeito composto",
                "Sujeito oculto",
                "Sujeito indeterminado"
            ],
            correct: 3,
            explanation: "A frase possui sujeito indeterminado, pois não é possível identificar quem pratica a ação de chover."
        },
        {
            question: "Qual alternativa contém um adjunto adverbial de tempo?",
            options: [
                "Ele correu rapidamente",
                "O livro está sobre a mesa",
                "Amanhã iremos ao cinema",
                "Ela é muito inteligente"
            ],
            correct: 2,
            explanation: "'Amanhã' é um adjunto adverbial de tempo, indicando quando a ação ocorrerá."
        },
        {
            question: "Qual frase está na voz passiva?",
            options: [
                "O menino quebrou o vaso",
                "O vaso foi quebrado pelo menino",
                "O menino está quebrando o vaso",
                "O menino quebrava vasos"
            ],
            correct: 1,
            explanation: "A frase 'O vaso foi quebrado pelo menino' está na voz passiva, com o sujeito sofrendo a ação."
        },
        {
            question: "Qual alternativa apresenta linguagem formal adequada para um texto dissertativo?",
            options: [
                "Tá na hora de mudar essa situação",
                "É necessário modificar esse cenário",
                "Tem que mudar isso aí",
                "Precisa mudar essa parada"
            ],
            correct: 1,
            explanation: "A linguagem formal deve evitar gírias e expressões coloquiais."
        },
        {
            question: "Qual é a classificação morfológica da palavra 'que' na frase: 'O livro que comprei é interessante'?",
            options: [
                "Pronome relativo",
                "Conjunção integrante",
                "Advérbio de intensidade",
                "Preposição"
            ],
            correct: 0,
            explanation: "Neste caso, 'que' é um pronome relativo, introduzindo uma oração subordinada adjetiva."
        },
        // Novas questões SAEB 9º ano
        {
            question: "Qual figura de linguagem está presente em 'O tempo voa'?",
            options: [
                "Comparação",
                "Metáfora",
                "Hipérbole",
                "Personificação"
            ],
            correct: 1,
            explanation: "A expressão 'o tempo voa' é uma metáfora, comparando o tempo a algo que voa."
        },
        {
            question: "Qual é a função do pronome 'lhe' na frase: 'Eu lhe dei o livro'?",
            options: [
                "Objeto direto",
                "Objeto indireto",
                "Complemento nominal",
                "Adjunto adverbial"
            ],
            correct: 1,
            explanation: "O pronome 'lhe' funciona como objeto indireto, indicando a quem foi dada a ação."
        },
        {
            question: "Qual alternativa apresenta um período composto por coordenação?",
            options: [
                "Quando cheguei, ela já tinha saído.",
                "Estudei muito, portanto fui bem na prova.",
                "Ele chegou e todos aplaudiram.",
                "Embora estivesse cansado, foi à reunião."
            ],
            correct: 2,
            explanation: "A frase 'Ele chegou e todos aplaudiram' é um período composto por coordenação."
        },
        {
            question: "Qual é o valor semântico da conjunção 'embora'?",
            options: [
                "Adição",
                "Oposição",
                "Causa",
                "Conclusão"
            ],
            correct: 1,
            explanation: "A conjunção 'embora' indica ideia de oposição ou concessão."
        },
        {
            question: "Qual alternativa contém um exemplo de metonímia?",
            options: [
                "O vento sussurrava nas árvores",
                "Comprei um Picasso na galeria",
                "Seus olhos são estrelas brilhantes",
                "O tempo voa quando estamos felizes"
            ],
            correct: 1,
            explanation: "'Comprei um Picasso' é metonímia, usando o nome do autor para representar sua obra."
        },
        {
            question: "Qual é a função sintática de 'para todos' na frase: 'O professor distribuiu as atividades para todos'?",
            options: [
                "Objeto direto",
                "Objeto indireto",
                "Complemento nominal",
                "Adjunto adverbial"
            ],
            correct: 1,
            explanation: "'Para todos' é objeto indireto, completando o sentido do verbo 'distribuiu'."
        },
        {
            question: "Qual alternativa apresenta um exemplo de linguagem denotativa?",
            options: [
                "O coração dela é de ouro",
                "As estrelas piscavam no céu",
                "A água ferve a 100°C",
                "Seu sorriso iluminou o ambiente"
            ],
            correct: 2,
            explanation: "A frase 'A água ferve a 100°C' usa linguagem denotativa, com sentido literal."
        }
    ]
};