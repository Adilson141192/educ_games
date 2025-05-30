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
        },
        {
            question: "Qual palavra completa a frase: 'O ____ mia'?",
            options: [
                "cachorro",
                "gato",
                "pássaro",
                "peixe"
            ],
            correct: 1,
            explanation: "O gato é o animal que mia."
        },
        {
            question: "Qual é o aumentativo de 'casa'?",
            options: [
                "casinha",
                "casão",
                "casota",
                "casara"
            ],
            correct: 1,
            explanation: "O aumentativo de 'casa' é 'casão'."
        },
        {
            question: "Qual palavra está escrita errada?",
            options: [
                "chocolate",
                "xícara",
                "enxame",
                "mexerica"
            ],
            correct: 3,
            explanation: "A grafia correta é 'tangerina' ou 'mexerica' (variação regional)."
        },
        {
            question: "Qual frase está na ordem correta?",
            options: [
                "A bola chutou o menino.",
                "O menino chutou a bola.",
                "Chutou o menino a bola.",
                "Bola a menino o chutou."
            ],
            correct: 1,
            explanation: "A ordem correta é sujeito + verbo + objeto."
        },
        {
            question: "Qual palavra tem sílaba tônica na última sílaba?",
            options: [
                "mesa",
                "caderno",
                "sofá",
                "livro"
            ],
            correct: 2,
            explanation: "'Sofá' é oxítona, com acento na última sílaba."
        },
        {
            question: "Qual é o feminino de 'menino'?",
            options: [
                "menina",
                "menino",
                "meninos",
                "meninas"
            ],
            correct: 0,
            explanation: "O feminino de 'menino' é 'menina'."
        },
        {
            question: "Qual palavra tem o mesmo significado de 'bonito'?",
            options: [
                "feio",
                "belo",
                "grande",
                "pequeno"
            ],
            correct: 1,
            explanation: "'Belo' é sinônimo de 'bonito'."
        },
        {
            question: "Qual frase está na forma negativa?",
            options: [
                "Eu gosto de sorvete.",
                "Eu não gosto de sorvete.",
                "Eu adoro sorvete!",
                "Sorvete é gostoso."
            ],
            correct: 1,
            explanation: "A frase com 'não' está na forma negativa."
        },
        {
            question: "Qual palavra tem três sílabas?",
            options: [
                "casa",
                "borboleta",
                "flor",
                "sol"
            ],
            correct: 1,
            explanation: "'Bor-bo-le-ta' tem três sílabas."
        },
        {
            question: "Qual é o coletivo de 'abelha'?",
            options: [
                "cardume",
                "enxame",
                "bando",
                "matilha"
            ],
            correct: 1,
            explanation: "O coletivo de abelha é 'enxame'."
        },
        {
            question: "Qual palavra é um verbo?",
            options: [
                "corrida",
                "correr",
                "corredor",
                "corredora"
            ],
            correct: 1,
            explanation: "'Correr' é um verbo que indica ação."
        },
        {
            question: "Qual frase está no futuro?",
            options: [
                "Eu brinco no parque.",
                "Eu brincarei no parque.",
                "Eu brincava no parque.",
                "Eu brinquei no parque."
            ],
            correct: 1,
            explanation: "'Brincarei' indica uma ação que acontecerá no futuro."
        },
        {
            question: "Qual palavra tem dígrafo?",
            options: [
                "casa",
                "chave",
                "livro",
                "flor"
            ],
            correct: 1,
            explanation: "'Chave' tem o dígrafo 'ch' que representa um único som."
        },
        {
            question: "Qual é o diminutivo de 'cão'?",
            options: [
                "cãozinho",
                "cãozão",
                "cãezinho",
                "cão"
            ],
            correct: 0,
            explanation: "O diminutivo de 'cão' é 'cãozinho'."
        },
        {
            question: "Qual palavra começa com a mesma letra que 'zebra'?",
            options: [
                "sapo",
                "zero",
                "casa",
                "faca"
            ],
            correct: 1,
            explanation: "'Zero' começa com 'z' como 'zebra'."
        },
        {
            question: "Qual frase tem um adjetivo?",
            options: [
                "O menino corre.",
                "A bola é redonda.",
                "Eu gosto de brincar.",
                "Nós vamos ao parque."
            ],
            correct: 1,
            explanation: "'Redonda' é um adjetivo que qualifica a bola."
        },
        {
            question: "Qual palavra tem encontro consonantal?",
            options: [
                "casa",
                "prato",
                "livro",
                "flor"
            ],
            correct: 1,
            explanation: "'Prato' tem o encontro consonantal 'pr'."
        },
        {
            question: "Qual é o plural de 'mão'?",
            options: [
                "mãos",
                "mães",
                "mais",
                "mões"
            ],
            correct: 0,
            explanation: "O plural de 'mão' é 'mãos'."
        },
        {
            question: "Qual palavra tem mais letras?",
            options: [
                "sol",
                "borboleta",
                "mar",
                "céu"
            ],
            correct: 1,
            explanation: "'Borboleta' tem 9 letras, mais que as outras opções."
        },
        {
            question: "Qual frase está na 1ª pessoa?",
            options: [
                "Você gosta de brincar.",
                "Eles vão ao parque.",
                "Eu gosto de sorvete.",
                "Nós estudamos muito."
            ],
            correct: 2,
            explanation: "'Eu' é pronome de 1ª pessoa do singular."
        },
        {
            question: "Qual palavra termina com 's'?",
            options: [
                "casa",
                "flor",
                "livros",
                "mar"
            ],
            correct: 2,
            explanation: "'Livros' termina com 's'."
        },
        {
            question: "Qual é o oposto de 'dia'?",
            options: [
                "manhã",
                "tarde",
                "noite",
                "sol"
            ],
            correct: 2,
            explanation: "O oposto de 'dia' é 'noite'."
        },
        {
            question: "Qual palavra tem sílaba tônica na penúltima sílaba?",
            options: [
                "sofá",
                "mesa",
                "caderno",
                "livro"
            ],
            correct: 2,
            explanation: "'Caderno' é paroxítona, com acento na penúltima sílaba."
        },
        {
            question: "Qual frase tem sujeito oculto?",
            options: [
                "O menino correu.",
                "Corri no parque.",
                "A bola é redonda.",
                "Nós gostamos de brincar."
            ],
            correct: 1,
            explanation: "Em 'Corri no parque', o sujeito 'eu' está oculto."
        },
        {
            question: "Qual palavra tem o som nasal?",
            options: [
                "casa",
                "mão",
                "flor",
                "sol"
            ],
            correct: 1,
            explanation: "'Mão' tem som nasal por causa do til."
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
            explanation: "O plural de 'pão' é 'pães'."
        },
        {
            question: "Qual palavra é dissílaba?",
            options: [
                "casa",
                "borboleta",
                "paralelepípedo",
                "floricultura"
            ],
            correct: 0,
            explanation: "'Ca-sa' tem duas sílabas, sendo dissílaba."
        },
        {
            question: "Qual frase está no plural?",
            options: [
                "O gato dorme.",
                "Os gatos dormem.",
                "Eu durmo.",
                "Você dorme."
            ],
            correct: 1,
            explanation: "'Os gatos dormem' está no plural."
        },
        {
            question: "Qual palavra tem dígrafo 'nh'?",
            options: [
                "chave",
                "banho",
                "queijo",
                "flor"
            ],
            correct: 1,
            explanation: "'Banho' tem o dígrafo 'nh'."
        },
        {
            question: "Qual é o aumentativo de 'flor'?",
            options: [
                "florzinha",
                "florão",
                "floroca",
                "flor"
            ],
            correct: 1,
            explanation: "O aumentativo de 'flor' é 'florão'."
        },
        {
            question: "Qual palavra tem encontro vocálico?",
            options: [
                "casa",
                "pão",
                "livro",
                "flor"
            ],
            correct: 0,
            explanation: "'Casa' tem o encontro vocálico 'a-a'."
        },
        {
            question: "Qual frase tem um verbo no passado?",
            options: [
                "Eu brinco no parque.",
                "Eu brincarei no parque.",
                "Eu brincava no parque.",
                "Eu brincarei no parque."
            ],
            correct: 2,
            explanation: "'Brincava' é verbo no pretérito imperfeito."
        },
        {
            question: "Qual palavra tem o som do 'j'?",
            options: [
                "casa",
                "girafa",
                "gente",
                "gato"
            ],
            correct: 1,
            explanation: "'Girafa' tem o som do 'j' na letra 'g'."
        },
        {
            question: "Qual é o feminino de 'ator'?",
            options: [
                "atora",
                "atriz",
                "atores",
                "ator"
            ],
            correct: 1,
            explanation: "O feminino de 'ator' é 'atriz'."
        },
        {
            question: "Qual frase está no presente?",
            options: [
                "Eu brinquei no parque.",
                "Eu brincarei no parque.",
                "Eu brinco no parque.",
                "Eu brincava no parque."
            ],
            correct: 2,
            explanation: "'Brinco' é verbo no presente."
        },
        {
            question: "Qual palavra tem o mesmo som de 'c' em 'casa'?",
            options: [
                "cidade",
                "cenoura",
                "cigarro",
                "cérebro"
            ],
            correct: 1,
            explanation: "'Cenoura' tem o som do 'c' como em 'casa'."
        },
        {
            question: "Qual é o plural de 'animal'?",
            options: [
                "animais",
                "animales",
                "animaus",
                "animal"
            ],
            correct: 0,
            explanation: "O plural de 'animal' é 'animais'."
        },
        {
            question: "Qual palavra tem o som do 's' em 'asa'?",
            options: [
                "casa",
                "asa",
                "passa",
                "massa"
            ],
            correct: 1,
            explanation: "'Asa' tem o som do 's' entre vogais."
        },
        {
            question: "Qual frase tem sujeito simples?",
            options: [
                "O menino e a menina brincam.",
                "O menino brinca.",
                "Brincam no parque.",
                "Eu e você brincamos."
            ],
            correct: 1,
            explanation: "'O menino brinca' tem sujeito simples."
        },
        {
            question: "Qual palavra tem o som do 'x' em 'exame'?",
            options: [
                "caixa",
                "texto",
                "exato",
                "enxame"
            ],
            correct: 2,
            explanation: "'Exato' tem o som do 'x' como em 'exame'."
        },
        {
            question: "Qual é o diminutivo de 'pão'?",
            options: [
                "pãozinho",
                "pãezinho",
                "pãozito",
                "pão"
            ],
            correct: 0,
            explanation: "O diminutivo de 'pão' é 'pãozinho'."
        },
        {
            question: "Qual palavra tem sílaba tônica na antepenúltima sílaba?",
            options: [
                "sofá",
                "mesa",
                "médico",
                "livro"
            ],
            correct: 2,
            explanation: "'Médico' é proparoxítona, com acento na antepenúltima sílaba."
        },
        {
            question: "Qual frase tem predicado verbal?",
            options: [
                "O menino é inteligente.",
                "A menina correu.",
                "O céu está azul.",
                "Ela parece cansada."
            ],
            correct: 1,
            explanation: "'Correu' é verbo de ação, formando predicado verbal."
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
        },
        {
            question: "Qual é o sujeito da frase: 'Naquela manhã, todos acordaram cedo'?",
            options: [
                "Naquela manhã",
                "todos",
                "acordaram",
                "cedo"
            ],
            correct: 1,
            explanation: "'Todos' é o sujeito simples da oração."
        },
        {
            question: "Qual alternativa apresenta um adjunto adnominal?",
            options: [
                "O livro novo chegou.",
                "Ele chegou rapidamente.",
                "Estudamos para a prova.",
                "O menino, feliz, sorriu."
            ],
            correct: 0,
            explanation: "'Novo' é adjunto adnominal, caracterizando o livro."
        },
        {
            question: "Qual é o tempo verbal em: 'Nós teríamos ido se soubéssemos'?",
            options: [
                "Futuro do pretérito",
                "Pretérito mais-que-perfeito",
                "Presente do subjuntivo",
                "Infinitivo"
            ],
            correct: 0,
            explanation: "'Teríamos ido' está no futuro do pretérito."
        },
        {
            question: "Qual frase contém uma oração subordinada adverbial?",
            options: [
                "O livro que comprei é interessante.",
                "Quando cheguei, ela já tinha saído.",
                "Ele disse que viria mais tarde.",
                "Quero um carro que seja econômico."
            ],
            correct: 1,
            explanation: "'Quando cheguei' introduz uma oração subordinada adverbial temporal."
        },
        {
            question: "Qual é o predicativo do sujeito em: 'As crianças pareciam cansadas'?",
            options: [
                "As crianças",
                "pareciam",
                "cansadas",
                "pareciam cansadas"
            ],
            correct: 2,
            explanation: "'Cansadas' é predicativo do sujeito, indicando estado das crianças."
        },
        {
            question: "Qual alternativa apresenta linguagem conotativa?",
            options: [
                "O sol nasceu às 6h.",
                "O tempo voa quando estamos felizes.",
                "A água ferve a 100°C.",
                "Ele mede 1,80m de altura."
            ],
            correct: 1,
            explanation: "'O tempo voa' é linguagem conotativa, com sentido figurado."
        },
        {
            question: "Qual é a função do 'que' em: 'Disse que não viria'?",
            options: [
                "Pronome relativo",
                "Conjunção integrante",
                "Advérbio",
                "Preposição"
            ],
            correct: 1,
            explanation: "Neste caso, 'que' é conjunção integrante, introduzindo oração subordinada substantiva."
        },
        {
            question: "Qual frase está na voz reflexiva?",
            options: [
                "Ele machucou-se na queda.",
                "O menino quebrou o vaso.",
                "A carta foi escrita por mim.",
                "Choveu muito ontem."
            ],
            correct: 0,
            explanation: "'Machucou-se' indica ação reflexiva, onde sujeito pratica e recebe a ação."
        },
        {
            question: "Qual é o núcleo do sujeito em: 'Os belos pássaros coloridos voaram'?",
            options: [
                "Os",
                "belos",
                "pássaros",
                "coloridos"
            ],
            correct: 2,
            explanation: "'Pássaros' é o núcleo do sujeito composto."
        },
        {
            question: "Qual alternativa contém uma oração coordenada sindética adversativa?",
            options: [
                "Estudei muito, portanto fui bem.",
                "Ele chegou e todos aplaudiram.",
                "Quero ir, mas estou cansado.",
                "Quando cheguei, ela já tinha saído."
            ],
            correct: 2,
            explanation: "'mas estou cansado' é coordenada sindética adversativa."
        },
        {
            question: "Qual é o complemento nominal em: 'Tenho necessidade de silêncio'?",
            options: [
                "Tenho",
                "necessidade",
                "de silêncio",
                "silêncio"
            ],
            correct: 2,
            explanation: "'De silêncio' completa o sentido do nome 'necessidade'."
        },
        {
            question: "Qual frase contém um aposto?",
            options: [
                "Rio de Janeiro, cidade maravilhosa, atrai turistas.",
                "O livro que comprei é interessante.",
                "Estudamos para a prova.",
                "Ele chegou rapidamente."
            ],
            correct: 0,
            explanation: "'cidade maravilhosa' é aposto explicativo de 'Rio de Janeiro'."
        },
        {
            question: "Qual é o valor semântico da conjunção em: 'Embora cansado, foi à reunião'?",
            options: [
                "Adição",
                "Oposição",
                "Causa",
                "Conclusão"
            ],
            correct: 1,
            explanation: "'Embora' indica ideia de concessão/oposição."
        },
        {
            question: "Qual alternativa apresenta uma metáfora?",
            options: [
                "O vento soprou forte.",
                "Seus olhos são estrelas.",
                "A água ferve a 100°C.",
                "Ele correu rapidamente."
            ],
            correct: 1,
            explanation: "'Seus olhos são estrelas' é uma metáfora, comparando olhos a estrelas."
        },
        {
            question: "Qual é o objeto indireto em: 'Entreguei o livro ao professor'?",
            options: [
                "Entreguei",
                "o livro",
                "ao professor",
                "professor"
            ],
            correct: 2,
            explanation: "'Ao professor' é objeto indireto, complementando o verbo 'entreguei'."
        },
        {
            question: "Qual frase está no discurso indireto?",
            options: [
                "Ele disse: 'Vou chegar tarde'.",
                "'Vou chegar tarde', disse ele.",
                "Ele disse que chegaria tarde.",
                "Chegarei tarde, disse ele."
            ],
            correct: 2,
            explanation: "'Ele disse que chegaria tarde' está no discurso indireto."
        },
        {
            question: "Qual é a função do 'se' em: 'Eles se machucaram na queda'?",
            options: [
                "Partícula apassivadora",
                "Índice de indeterminação",
                "Pronome reflexivo",
                "Conjunção"
            ],
            correct: 2,
            explanation: "Neste caso, 'se' é pronome reflexivo."
        },
        {
            question: "Qual alternativa apresenta uma hipérbole?",
            options: [
                "Estou morrendo de sede.",
                "A água é molhada.",
                "O sol nasceu às 6h.",
                "Ele estuda muito."
            ],
            correct: 0,
            explanation: "'Estou morrendo de sede' é hipérbole, exagero para expressar sede intensa."
        },
        {
            question: "Qual é o predicativo do objeto em: 'Ele considerou a prova difícil'?",
            options: [
                "Ele",
                "considerou",
                "a prova",
                "difícil"
            ],
            correct: 3,
            explanation: "'Difícil' é predicativo do objeto 'prova'."
        },
        {
            question: "Qual frase contém uma oração subordinada adjetiva restritiva?",
            options: [
                "O livro, que comprei ontem, é interessante.",
                "O livro que comprei ontem é interessante.",
                "Disse que não viria.",
                "Quando cheguei, ela já tinha saído."
            ],
            correct: 1,
            explanation: "'que comprei ontem' é subordinada adjetiva restritiva."
        },
        {
            question: "Qual é o sujeito indeterminado em: ",
            options: [
                "Choveu muito ontem.",
                "Alguém bateu na porta.",
                "Nós fomos ao cinema.",
                "O menino correu."
            ],
            correct: 0,
            correct: 0,
            explanation: "'Choveu muito ontem' tem sujeito indeterminado, pois não se pode identificar quem pratica a ação."
        },
        {
            question: "Qual alternativa apresenta um pleonasmo?",
            options: [
                "Subir para cima",
                "Cair no chão",
                "Entrar dentro",
                "Todas as anteriores"
            ],
            correct: 3,
            explanation: "Todas as opções apresentam pleonasmos (redundâncias)."
        },
        {
            question: "Qual é o objeto direto em: 'Ele comprou um carro novo'?",
            options: [
                "Ele",
                "comprou",
                "um carro novo",
                "novo"
            ],
            correct: 2,
            explanation: "'Um carro novo' é objeto direto, sofrendo a ação do verbo 'comprou'."
        },
        {
            question: "Qual frase está na voz ativa?",
            options: [
                "O bolo foi feito por mim.",
                "As cartas foram escritas pelos alunos.",
                "Eu fiz o bolo.",
                "A casa foi construída rapidamente."
            ],
            correct: 2,
            explanation: "'Eu fiz o bolo' está na voz ativa, com sujeito praticando a ação."
        },
        {
            question: "Qual é o adjunto adverbial de lugar em: 'Coloque os livros aqui'?",
            options: [
                "Coloque",
                "os livros",
                "aqui",
                "livros aqui"
            ],
            correct: 2,
            explanation: "'Aqui' é adjunto adverbial de lugar."
        },
        {
            question: "Qual alternativa apresenta uma personificação?",
            options: [
                "O vento sussurrava nas árvores.",
                "O sol é uma estrela.",
                "A água ferve a 100°C.",
                "Ele correu como um leão."
            ],
            correct: 0,
            explanation: "'O vento sussurrava' é personificação, atribuindo ação humana ao vento."
        },
        {
            question: "Qual é o sujeito composto em:",
            options: [
                "O menino e a menina brincavam.",
                "O menino brincava sozinho.",
                "Brincavam no parque.",
                "Ele e eu fomos ao cinema."
            ],
            correct: 0,
            explanation: "'O menino e a menina' formam sujeito composto."
        },
        {
            question: "Qual é o predicativo do sujeito em: 'A aula pareceu longa'?",
            options: [
                "A aula",
                "pareceu",
                "longa",
                "pareceu longa"
            ],
            correct: 2,
            explanation: "'Longa' é predicativo do sujeito 'aula'."
        },
        {
            question: "Qual alternativa apresenta uma comparação?",
            options: [
                "Ele é forte como um touro.",
                "Seus olhos são estrelas.",
                "O tempo voa.",
                "A água é molhada."
            ],
            correct: 0,
            explanation: "'Ele é forte como um touro' é uma comparação explícita."
        },
        {
            question: "Qual é o agente da passiva em: 'A carta foi escrita por mim'?",
            options: [
                "A carta",
                "foi escrita",
                "por mim",
                "mim"
            ],
            correct: 2,
            explanation: "'Por mim' indica o agente da passiva."
        },
        {
            question: "Qual frase contém uma oração subordinada substantiva objetiva direta?",
            options: [
                "Quero que você venha.",
                "O livro que comprei é bom.",
                "Quando cheguei, ela saiu.",
                "Embora cansado, foi à reunião."
            ],
            correct: 0,
            explanation: "'que você venha' é subordinada substantiva objetiva direta."
        },
        {
            question: "Qual é o adjunto adnominal em: 'Os belos pássaros coloridos voaram'?",
            options: [
                "Os",
                "belos",
                "pássaros",
                "voaram"
            ],
            correct: 1,
            explanation: "'belos' e 'coloridos' são adjuntos adnominais caracterizando 'pássaros'."
        },
        {
            question: "Qual alternativa apresenta uma antítese?",
            options: [
                "O amor é fogo que arde sem se ver.",
                "Ela era doce como mel.",
                "Ele trabalha de dia e descansa de noite.",
                "O sol nasceu às 6h."
            ],
            correct: 2,
            explanation: "'trabalha de dia e descansa de noite' apresenta ideias opostas (antítese)."
        },
        {
            question: "Qual é o complemento nominal em: 'Tenho medo de altura'?",
            options: [
                "Tenho",
                "medo",
                "de altura",
                "altura"
            ],
            correct: 2,
            explanation: "'de altura' completa o sentido do nome 'medo'."
        },
        {
            question: "Qual frase contém um vocativo?",
            options: [
                "Maria, venha aqui!",
                "O livro de Maria é interessante.",
                "Maria estuda muito.",
                "Eu e Maria fomos ao cinema."
            ],
            correct: 0,
            explanation: "'Maria' no início da frase, seguido de vírgula, é vocativo."
        },
        {
            question: "Qual é o sujeito simples em:",
            options: [
                "O menino e a menina brincavam.",
                "O menino brincava sozinho.",
                "Brincavam no parque.",
                "Ele e eu fomos ao cinema."
            ],
            correct: 1,
            explanation: "'O menino' é sujeito simples."
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
        },
        {
            question: "Qual é a função do 'se' na frase: 'Vive-se bem nesta cidade'?",
            options: [
                "Partícula apassivadora",
                "Índice de indeterminação do sujeito",
                "Pronome reflexivo",
                "Conjunção"
            ],
            correct: 1,
            explanation: "Neste caso, 'se' indica sujeito indeterminado."
        },
        {
            question: "Qual alternativa apresenta uma oração subordinada adverbial causal?",
            options: [
                "Quando cheguei, ela já tinha saído.",
                "Como estava chovendo, ficamos em casa.",
                "O livro que comprei é interessante.",
                "Quero que você venha."
            ],
            correct: 1,
            explanation: "'Como estava chovendo' introduz uma oração subordinada adverbial causal."
        },
        {
            question: "Qual é o núcleo do predicado em: 'Os alunos fizeram a prova com atenção'?",
            options: [
                "Os alunos",
                "fizeram",
                "a prova",
                "com atenção"
            ],
            correct: 1,
            explanation: "'Fizeram' é o verbo que funciona como núcleo do predicado."
        },
        {
            question: "Qual alternativa apresenta uma zeugma?",
            options: [
                "Ele prefere cinema; eu, teatro.",
                "O sol brilhava e as aves cantavam.",
                "Estudei muito, portanto fui bem.",
                "Embora cansado, foi à reunião."
            ],
            correct: 0,
            explanation: "'Eu, teatro' é zeugma, com omissão do verbo 'prefiro'."
        },
        {
            question: "Qual é o complemento nominal em: 'A necessidade de carinho é grande'?",
            options: [
                "A necessidade",
                "de carinho",
                "é grande",
                "grande"
            ],
            correct: 1,
            explanation: "'de carinho' completa o sentido do nome 'necessidade'."
        },
        {
            question: "Qual frase contém um anacoluto?",
            options: [
                "O livro, que comprei ontem, é interessante.",
                "Quanto a mim, não vou opinar.",
                "Estudei muito, portanto fui bem.",
                "Ele chegou e todos aplaudiram."
            ],
            correct: 1,
            explanation: "'Quanto a mim' é construção solta, caracterizando anacoluto."
        },
        {
            question: "Qual é o valor semântico da conjunção 'pois' em: 'Estude, pois o exame é amanhã'?",
            options: [
                "Explicação",
                "Conclusão",
                "Oposição",
                "Alternância"
            ],
            correct: 0,
            explanation: "Neste caso, 'pois' introduz uma explicação."
        },
        {
            question: "Qual alternativa apresenta uma gradação?",
            options: [
                "Ele veio, viu e venceu.",
                "O sol brilha e as aves cantam.",
                "Estudei muito, portanto fui bem.",
                "Embora cansado, foi à reunião."
            ],
            correct: 0,
            explanation: "'veio, viu e venceu' apresenta ideias em gradação crescente."
        },
        {
            question: "Qual é o sujeito da oração: 'É necessário estudar mais'?",
            options: [
                "sujeito indeterminado",
                "sujeito simples",
                "sujeito composto",
                "oração sem sujeito"
            ],
            correct: 0,
            explanation: "A oração possui sujeito indeterminado."
        },
        {
            question: "Qual alternativa apresenta uma antítese?",
            options: [
                "O amor é fogo que arde sem se ver.",
                "Ela era doce como mel.",
                "Ele trabalha de dia e descansa de noite.",
                "O sol nasceu às 6h."
            ],
            correct: 2,
            explanation: "'trabalha de dia e descansa de noite' apresenta ideias opostas."
        },
        {
            question: "Qual é o objeto direto preposicionado em: 'Amaram a todos igualmente'?",
            options: [
                "Amaram",
                "a todos",
                "igualmente",
                "todos"
            ],
            correct: 1,
            explanation: "'a todos' é objeto direto preposicionado por exigência do verbo."
        },
        {
            question: "Qual frase contém uma oração subordinada substantiva predicativa?",
            options: [
                "Minha vontade é que você venha.",
                "O livro que comprei é interessante.",
                "Quando cheguei, ela saiu.",
                "Embora cansado, foi à reunião."
            ],
            correct: 0,
            explanation: "'que você venha' é subordinada substantiva predicativa."
        },
        {
            question: "Qual é o adjunto adverbial de modo em: 'Ele falou calmamente com todos'?",
            options: [
                "Ele",
                "falou",
                "calmamente",
                "com todos"
            ],
            correct: 2,
            explanation: "'calmamente' é adjunto adverbial de modo."
        },
        {
            question: "Qual alternativa apresenta uma silepse de número?",
            options: [
                "O povo brasileiro é trabalhador.",
                "Vossa Excelência está enganado.",
                "A maioria chegou e foram embora.",
                "O livro e a caneta estão na mesa."
            ],
            correct: 2,
            explanation: "'A maioria chegou e foram embora' apresenta silepse de número (concordância ideológica)."
        },
        {
            question: "Qual é o predicativo do objeto em: ",
            options: [
                "Ele considerou a prova difícil.",
                "A prova pareceu difícil.",
                "Ele é muito inteligente.",
                "A aula foi longa."
            ],
            correct: 0,
            explanation: "'difícil' é predicativo do objeto 'prova'."
        },
        {
            question: "Qual alternativa apresenta uma hipálage?",
            options: [
                "Ele fumava um pensativo cigarro.",
                "O sol brilhava no céu.",
                "Estudei muito, portanto fui bem.",
                "O vento sussurrava nas árvores."
            ],
            correct: 0,
            explanation: "'pensativo cigarro' é hipálage, transferindo o atributo do fumante para o cigarro."
        },
        {
            question: "Qual é o sujeito da oração: 'Faz dois anos que não o vejo'?",
            options: [
                "sujeito indeterminado",
                "sujeito simples",
                "sujeito composto",
                "oração sem sujeito"
            ],
            correct: 3,
            explanation: "O verbo 'fazer' indicando tempo é impessoal (sem sujeito)."
        },
        {
            question: "Qual alternativa apresenta um paradoxo?",
            options: [
                "O silêncio é eloquente.",
                "Ela é doce como mel.",
                "O sol brilha no céu.",
                "Estudei muito, portanto fui bem."
            ],
            correct: 0,
            explanation: "'O silêncio é eloquente' é paradoxo, unindo ideias contraditórias."
        },
        {
            question: "Qual é o objeto indireto em: 'Obedeci às ordens do chefe'?",
            options: [
                "Obedeci",
                "às ordens",
                "do chefe",
                "chefe"
            ],
            correct: 1,
            explanation: "'às ordens' é objeto indireto, complementando o verbo 'obedeci'."
        },
        {
            question: "Qual frase contém uma oração subordinada adjetiva explicativa?",
            options: [
                "O livro, que comprei ontem, é interessante.",
                "O livro que comprei ontem é interessante.",
                "Disse que não viria.",
                "Quando cheguei, ela já tinha saído."
            ],
            correct: 0,
            explanation: "'que comprei ontem' entre vírgulas é subordinada adjetiva explicativa."
        },
        {
            question: "Qual é o adjunto adnominal em: 'Os belos pássaros coloridos voaram'?",
            options: [
                "Os",
                "belos",
                "pássaros",
                "voaram"
            ],
            correct: 1,
            explanation: "'belos' e 'coloridos' são adjuntos adnominais caracterizando 'pássaros'."
        },
        {
            question: "Qual alternativa apresenta uma elipse?",
            options: [
                "Ele prefere cinema; eu, teatro.",
                "O sol brilhava e as aves cantavam.",
                "Estudei muito, portanto fui bem.",
                "Embora cansado, foi à reunião."
            ],
            correct: 0,
            explanation: "'eu, teatro' apresenta elipse do verbo 'prefiro'."
        },
        {
            question: "Qual é o complemento nominal em: 'Tenho necessidade de silêncio'?",
            options: [
                "Tenho",
                "necessidade",
                "de silêncio",
                "silêncio"
            ],
            correct: 2,
            explanation: "'de silêncio' completa o sentido do nome 'necessidade'."
        },
        {
            question: "Qual frase contém um pleonasmo?",
            options: [
                "Subir para cima",
                "Cair no chão",
                "Entrar dentro",
                "Todas as anteriores"
            ],
            correct: 3,
            explanation: "Todas as opções apresentam pleonasmos (redundâncias)."
        },
        {
            question: "Qual é o objeto direto em: 'Ele comprou um carro novo'?",
            options: [
                "Ele",
                "comprou",
                "um carro novo",
                "novo"
            ],
            correct: 2,
            explanation: "'um carro novo' é objeto direto, sofrendo a ação do verbo 'comprou'."
        },
        {
            question: "Qual alternativa apresenta uma catacrese?",
            options: [
                "O pé da mesa está quebrado.",
                "O sol brilha no céu.",
                "Estudei muito, portanto fui bem.",
                "O vento sussurrava nas árvores."
            ],
            correct: 0,
            explanation: "'pé da mesa' é catacrese, uso de palavra em sentido figurado por falta de termo próprio."
        },
        {
            question: "Qual é o adjunto adverbial de lugar em: 'Coloque os livros aqui'?",
            options: [
                "Coloque",
                "os livros",
                "aqui",
                "livros aqui"
            ],
            correct: 2,
            explanation: "'aqui' é adjunto adverbial de lugar."
        },
        {
            question: "Qual alternativa apresenta uma personificação?",
            options: [
                "O vento sussurrava nas árvores.",
                "O sol é uma estrela.",
                "A água ferve a 100°C.",
                "Ele correu como um leão."
            ],
            correct: 0,
            explanation: "'O vento sussurrava' é personificação, atribuindo ação humana ao vento."
        },
        {
            question: "Qual é o sujeito composto em:",
            options: [
                "O menino e a menina brincavam.",
                "O menino brincava sozinho.",
                "Brincavam no parque.",
                "Ele e eu fomos ao cinema."
            ],
            correct: 0,
            explanation: "'O menino e a menina' formam sujeito composto."
        },
        {
            question: "Qual é o predicativo do sujeito em: 'A aula pareceu longa'?",
            options: [
                "A aula",
                "pareceu",
                "longa",
                "pareceu longa"
            ],
            correct: 2,
            explanation: "'longa' é predicativo do sujeito 'aula'."
        },
        {
            question: "Qual alternativa apresenta uma comparação?",
            options: [
                "Ele é forte como um touro.",
                "Seus olhos são estrelas.",
                "O tempo voa.",
                "A água é molhada."
            ],
            correct: 0,
            explanation: "'Ele é forte como um touro' é uma comparação explícita."
        }
    ]
};