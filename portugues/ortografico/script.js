const GAME_CONFIG = {
    totalQuestions: 10,
    timePerQuestion: {
        easy: 60,
        medium: 45,
        hard: 30
    },
    timeBonusDivisor: 5,
    answerDelay: 2000,
    apiFallbackProbability: 0.1, // Reduzi ainda mais a probabilidade de usar API
    apiRequestTimeout: 3000,
    apiEndpoints: [
        {
            url: 'https://api.dicionario-aberto.net/random',
            parser: data => data.word
        },
        {
            url: 'https://random-word-api.herokuapp.com/word?lang=pt',
            parser: data => data[0]
        }
    ]
};

// Banco de palavras local expandido
const LOCAL_WORDS = {
    easy: [
        { word: "abacaxi", options: ["abacaxi", "avacaxi", "abacachi", "abacaxí"], explanation: "A grafia correta é 'abacaxi' (com 'x').", hint: "Palavras com 'x' no final geralmente mantêm essa grafia." },
        { word: "batata", options: ["batata", "vatata", "batáta", "batatta"], explanation: "A grafia correta é 'batata' (com 'b').", hint: "Palavras com 'b' no início geralmente mantêm essa grafia." },
        { word: "casa", options: ["casa", "caza", "caça", "cassa"], explanation: "A grafia correta é 'casa' (com 's').", hint: "Palavras com 's' entre vogais geralmente mantêm essa grafia." },
        { word: "dado", options: ["dado", "dádo", "dádo", "daddo"], explanation: "A grafia correta é 'dado' (com 'd').", hint: "Palavras com 'd' no início geralmente mantêm essa grafia." },
        { word: "elefante", options: ["elefante", "elefante", "elephante", "elefánte"], explanation: "A grafia correta é 'elefante' (com 'f').", hint: "Palavras com 'f' geralmente mantêm essa grafia." },
        { word: "faca", options: ["faca", "vaca", "facca", "faka"], explanation: "A grafia correta é 'faca' (com 'f' e 'c').", hint: "Palavras com 'f' no início geralmente mantêm essa grafia." },
        { word: "gato", options: ["gato", "jato", "gatto", "gatho"], explanation: "A grafia correta é 'gato' (com 'g').", hint: "Palavras com 'g' antes de 'a' geralmente mantêm essa grafia." },
        { word: "hoje", options: ["hoje", "oge", "hoje", "hojje"], explanation: "A grafia correta é 'hoje' (com 'h' mudo).", hint: "Palavras com 'h' no início geralmente mantêm essa grafia." },
        { word: "igreja", options: ["igreja", "igreija", "igreia", "igréja"], explanation: "A grafia correta é 'igreja' (com 'j').", hint: "Palavras com 'j' geralmente mantêm essa grafia." },
        { word: "janela", options: ["janela", "ganela", "janella", "janéla"], explanation: "A grafia correta é 'janela' (com 'j').", hint: "Palavras com 'j' no início geralmente mantêm essa grafia." },
        { word: "lápis", options: ["lápis", "láppis", "lápes", "lápi"], explanation: "A grafia correta é 'lápis' (com 's' no final).", hint: "Palavras terminadas em 'is' geralmente mantêm essa grafia." },
        { word: "mala", options: ["mala", "malla", "malla", "mála"], explanation: "A grafia correta é 'mala' (com um 'l').", hint: "Palavras com 'l' entre vogais geralmente têm apenas um 'l'." },
        { word: "nuvem", options: ["nuvem", "núvem", "nuvém", "nuvêm"], explanation: "A grafia correta é 'nuvem' (com 'u' e 'e' abertos).", hint: "Palavras com 'v' geralmente mantêm essa grafia." },
        { word: "ovo", options: ["ovo", "ôvo", "óvo", "ôvô"], explanation: "A grafia correta é 'ovo' (com 'o' aberto).", hint: "Palavras com 'v' entre vogais geralmente mantêm essa grafia." },
        { word: "pato", options: ["pato", "phato", "páto", "patto"], explanation: "A grafia correta é 'pato' (com 'p').", hint: "Palavras com 'p' no início geralmente mantêm essa grafia." },
        { word: "queijo", options: ["queijo", "keijo", "queijo", "queijo"], explanation: "A grafia correta é 'queijo' (com 'qu').", hint: "O som de 'k' antes de 'e' e 'i' geralmente é escrito com 'qu'." },
        { word: "rato", options: ["rato", "ráto", "hrato", "ratto"], explanation: "A grafia correta é 'rato' (com 'r').", hint: "Palavras com 'r' no início geralmente mantêm essa grafia." },
        { word: "sapo", options: ["sapo", "zapo", "ssapo", "sápo"], explanation: "A grafia correta é 'sapo' (com 's').", hint: "Palavras com 's' no início geralmente mantêm essa grafia." },
        { word: "tatu", options: ["tatu", "tathu", "táthu", "tátu"], explanation: "A grafia correta é 'tatu' (com 't').", hint: "Palavras com 't' no início geralmente mantêm essa grafia." },
        { word: "uva", options: ["uva", "úva", "uva", "uvva"], explanation: "A grafia correta é 'uva' (com 'v').", hint: "Palavras com 'v' geralmente mantêm essa grafia." }
    ],
    medium: [
        { word: "exemplo", options: ["exemplo", "ecemplo", "ezemplo", "ecemplo"], explanation: "A grafia correta é 'exemplo' (com 'x').", hint: "Palavras com prefixo 'ex-' geralmente mantêm o 'x'." },
        { word: "chocolate", options: ["chocolate", "xocolate", "chocolatte", "chocoláte"], explanation: "A grafia correta é 'chocolate' (com 'ch').", hint: "Palavras de origem indígena geralmente usam 'ch'." },
        { word: "girafa", options: ["girafa", "jirafa", "giraffa", "giráfa"], explanation: "A grafia correta é 'girafa' (com 'g').", hint: "Palavras com 'g' antes de 'i' geralmente mantêm essa grafia." },
        { word: "jardim", options: ["jardim", "gardim", "jardim", "járdim"], explanation: "A grafia correta é 'jardim' (com 'j').", hint: "Palavras com 'j' no início geralmente mantêm essa grafia." },
        { word: "caixa", options: ["caixa", "caicha", "caixa", "caíxa"], explanation: "A grafia correta é 'caixa' (com 'x').", hint: "Palavras com 'x' geralmente mantêm essa grafia." },
        { word: "enxame", options: ["enxame", "enchame", "enxame", "enxáme"], explanation: "A grafia correta é 'enxame' (com 'x').", hint: "Palavras com 'x' após 'en' geralmente mantêm essa grafia." },
        { word: "texto", options: ["texto", "testo", "texto", "téxto"], explanation: "A grafia correta é 'texto' (com 'x').", hint: "Palavras com 'x' geralmente mantêm essa grafia." },
        { word: "máquina", options: ["máquina", "mákina", "máquina", "máquína"], explanation: "A grafia correta é 'máquina' (com 'qu').", hint: "O som de 'k' antes de 'i' e 'e' geralmente é escrito com 'qu'." },
        { word: "quilo", options: ["quilo", "kilo", "quilo", "quílo"], explanation: "A grafia correta é 'quilo' (com 'qu').", hint: "O som de 'k' antes de 'i' e 'e' geralmente é escrito com 'qu'." },
        { word: "cinco", options: ["cinco", "sinco", "cinco", "cínco"], explanation: "A grafia correta é 'cinco' (com 'c').", hint: "O som de 's' antes de 'e' e 'i' geralmente é escrito com 'c'." },
        { word: "auxílio", options: ["auxílio", "aucílio", "auxílio", "auxilio"], explanation: "A grafia correta é 'auxílio' (com 'x').", hint: "Palavras com 'x' após 'au' geralmente mantêm essa grafia." },
        { word: "baixo", options: ["baixo", "baicho", "baixo", "báixo"], explanation: "A grafia correta é 'baixo' (com 'x').", hint: "Palavras com 'x' após 'ai' geralmente mantêm essa grafia." },
        { word: "descer", options: ["descer", "decer", "desser", "décer"], explanation: "A grafia correta é 'descer' (com 'sc').", hint: "Palavras com 'sc' antes de 'e' geralmente mantêm essa grafia." },
        { word: "exceção", options: ["exceção", "ecessão", "excessão", "exceção"], explanation: "A grafia correta é 'exceção' (com 'xc').", hint: "Palavras com 'xc' geralmente mantêm essa grafia." },
        { word: "frouxo", options: ["frouxo", "froucho", "frouxo", "fróuxo"], explanation: "A grafia correta é 'frouxo' (com 'x').", hint: "Palavras com 'x' após 'ou' geralmente mantêm essa grafia." },
        { word: "gesso", options: ["gesso", "jesso", "geso", "géço"], explanation: "A grafia correta é 'gesso' (com 'g' e 'ss').", hint: "Palavras com 'g' antes de 'e' geralmente mantêm essa grafia." },
        { word: "injeção", options: ["injeção", "ingessão", "injeção", "injessão"], explanation: "A grafia correta é 'injeção' (com 'j').", hint: "Palavras com 'j' antes de 'e' geralmente mantêm essa grafia." },
        { word: "luxo", options: ["luxo", "lucho", "luxo", "lúxo"], explanation: "A grafia correta é 'luxo' (com 'x').", hint: "Palavras com 'x' após 'u' geralmente mantêm essa grafia." },
        { word: "mexer", options: ["mexer", "mecher", "mexer", "méxer"], explanation: "A grafia correta é 'mexer' (com 'x').", hint: "Palavras com 'x' após 'e' geralmente mantêm essa grafia." },
        { word: "peixe", options: ["peixe", "peiche", "peixe", "péixe"], explanation: "A grafia correta é 'peixe' (com 'x').", hint: "Palavras com 'x' após 'ei' geralmente mantêm essa grafia." }
    ],
    hard: [
        { word: "gnóstico", options: ["gnóstico", "nóstico", "gnostico", "gnóstiko"], explanation: "A grafia correta é 'gnóstico' (com 'gn' mudo).", hint: "Palavras de origem grega com 'gn' no início mantêm essa grafia." },
        { word: "ptialina", options: ["ptialina", "tialina", "ptialina", "ptialína"], explanation: "A grafia correta é 'ptialina' (com 'pt' mudo).", hint: "Palavras de origem grega com 'pt' no início mantêm essa grafia." },
        { word: "xenofobia", options: ["xenofobia", "zenofobia", "senofobia", "xenofóbia"], explanation: "A grafia correta é 'xenofobia' (com 'x').", hint: "Palavras com prefixo 'xeno-' mantêm o 'x'." },
        { word: "psicólogo", options: ["psicólogo", "sicólogo", "psicologo", "psicológo"], explanation: "A grafia correta é 'psicólogo' (com 'ps' mudo).", hint: "Palavras de origem grega com 'ps' no início mantêm essa grafia." },
        { word: "mnemônico", options: ["mnemônico", "nemônico", "mnemonico", "mnemôniko"], explanation: "A grafia correta é 'mnemônico' (com 'mn' mudo).", hint: "Palavras de origem grega com 'mn' no início mantêm essa grafia." },
        { word: "técnico", options: ["técnico", "técnico", "técnico", "téknico"], explanation: "A grafia correta é 'técnico' (com 'técn').", hint: "Palavras com 'técn' geralmente mantêm essa grafia." },
        { word: "flegmático", options: ["flegmático", "flegmático", "flegmatico", "flegmátiko"], explanation: "A grafia correta é 'flegmático' (com 'gm').", hint: "Palavras com 'gm' geralmente mantêm essa grafia." },
        { word: "oftalmologista", options: ["oftalmologista", "oftalmologista", "oftalmologista", "oftalmológista"], explanation: "A grafia correta é 'oftalmologista' (com 'f' e 't' mudos).", hint: "Palavras médicas com origem grega mantêm grafias complexas." },
        { word: "hermenêutica", options: ["hermenêutica", "ermenêutica", "hermenêutica", "hermenêutika"], explanation: "A grafia correta é 'hermenêutica' (com 'h' mudo).", hint: "Palavras com origem grega mantêm o 'h' inicial." },
        { word: "idiosincrasia", options: ["idiosincrasia", "idiosincrasia", "idiosincrasia", "idiosincrásia"], explanation: "A grafia correta é 'idiosincrasia' (com 's' e 'c').", hint: "Palavras com origens complexas mantêm grafias específicas." },
        { word: "pneumonia", options: ["pneumonia", "neumonia", "pneumonia", "pneumónia"], explanation: "A grafia correta é 'pneumonia' (com 'pn' mudo).", hint: "Palavras médicas com origem grega mantêm o 'p' mudo." },
        { word: "psoríase", options: ["psoríase", "soríase", "psoríase", "psoríaze"], explanation: "A grafia correta é 'psoríase' (com 'ps' mudo).", hint: "Palavras médicas com origem grega mantêm o 'p' mudo." },
        { word: "mnesico", options: ["mnesico", "nesico", "mnesico", "mnésico"], explanation: "A grafia correta é 'mnesico' (com 'mn' mudo).", hint: "Palavras com 'mn' no início geralmente mantêm essa grafia." },
        { word: "btumen", options: ["btumen", "tumen", "btumen", "btúmen"], explanation: "A grafia correta é 'btumen' (com 'bt' mudo).", hint: "Palavras técnicas com origem grega mantêm o 'b' mudo." },
        { word: "ctenóforo", options: ["ctenóforo", "tenóforo", "ctenóforo", "ctenóforro"], explanation: "A grafia correta é 'ctenóforo' (com 'ct' mudo).", hint: "Palavras científicas com origem grega mantêm o 'c' mudo." },
        { word: "dna", options: ["dna", "dna", "dna", "dná"], explanation: "A grafia correta é 'dna' (com 'dn').", hint: "Termos científicos mantêm sua grafia original." },
        { word: "fthiotida", options: ["fthiotida", "thiotida", "fthiotida", "fthiótida"], explanation: "A grafia correta é 'fthiotida' (com 'fth').", hint: "Palavras com grupos consonantais incomuns geralmente mantêm essa grafia." },
        { word: "gnetófitas", options: ["gnetófitas", "netófitas", "gnetófitas", "gnetófittas"], explanation: "A grafia correta é 'gnetófitas' (com 'gn').", hint: "Termos botânicos com origem grega mantêm o 'g' mudo." },
        { word: "hialoplasma", options: ["hialoplasma", "ialoplasma", "hialoplasma", "hialoplásma"], explanation: "A grafia correta é 'hialoplasma' (com 'h' mudo).", hint: "Termos científicos com origem grega mantêm o 'h' inicial." },
        { word: "isocórico", options: ["isocórico", "isocórico", "isocórico", "isocórrico"], explanation: "A grafia correta é 'isocórico' (com 'córico').", hint: "Termos técnicos mantêm sua grafia original." }
    ]
};

// Função auxiliar para fetch com timeout
async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 3000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal  
    });
    
    clearTimeout(id);
    
    return response;
}

// Estado do jogo
const gameState = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    currentDifficulty: 'easy',
    currentWord: null,
    isPlaying: false,
    isLoading: false,
    usedWords: { easy: [], medium: [], hard: [] }
};

// Elementos do DOM
const DOM = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    startButton: document.getElementById('start-button'),
    difficultyButtons: document.querySelectorAll('.difficulty-btn'),
    word: document.getElementById('word'),
    options: document.getElementById('options'),
    timerText: document.querySelector('#timer span'),
    scoreText: document.querySelector('#score span'),
    questionCounter: document.querySelector('#question-counter span'),
    feedback: document.getElementById('feedback'),
    hintButton: document.getElementById('hint-button'),
    hintContent: document.getElementById('hint-content'),
    backButton: document.getElementById('back-to-menu'),
    backToMainButton: document.getElementById('back-to-main'),
    timePerQuestion: document.getElementById('time-per-question'),
    currentLevel: document.getElementById('current-level'),
    currentRules: document.getElementById('current-rules'),
    difficultyIndicator: document.getElementById('difficulty-indicator')
};

// Inicialização do jogo
function init() {
    setupEventListeners();
    setDifficulty('easy');
}

// Configura os event listeners
function setupEventListeners() {
    DOM.startButton.addEventListener('click', startGame);
    DOM.difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => setDifficulty(btn.dataset.level));
    });
    DOM.hintButton.addEventListener('click', toggleHint);
    DOM.backButton.addEventListener('click', returnToMenu);
    DOM.backToMainButton.addEventListener('click', () => {
        window.location.href = '../../../index.html';
    });
}

// Define a dificuldade do jogo
function setDifficulty(level) {
    gameState.currentDifficulty = level;
    const settings = {
        easy: { name: "Fácil", rules: "Regras básicas (b/v, s/z, c/ç)" },
        medium: { name: "Médio", rules: "Regras intermediárias (x/ch, ss/s, g/j)" },
        hard: { name: "Difícil", rules: "Regras avançadas (pn, ps, mn, etc)" }
    }[level];

    DOM.difficultyButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });

    DOM.timePerQuestion.textContent = `${GAME_CONFIG.timePerQuestion[level]}s`;
    DOM.currentLevel.textContent = settings.name;
    DOM.currentRules.textContent = settings.rules;
}

// Inicia o jogo
function startGame() {
    DOM.startScreen.style.display = 'none';
    DOM.gameScreen.style.display = 'block';
    DOM.backButton.classList.remove('hidden');
    DOM.backToMainButton.classList.add('hidden');

    gameState.usedWords = { easy: [], medium: [], hard: [] };
    resetGame();
    loadQuestion();
}

// Reinicia o estado do jogo
function resetGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.isPlaying = true;
    updateScore();
    updateQuestionCounter();
}

// Carrega uma pergunta
async function loadQuestion() {
    if (gameState.currentQuestion >= GAME_CONFIG.totalQuestions) {
        endGame();
        return;
    }

    gameState.isLoading = true;
    DOM.word.textContent = "Carregando palavra...";
    DOM.options.innerHTML = '';

    try {
        const useAPI = Math.random() < GAME_CONFIG.apiFallbackProbability;
        const wordData = useAPI ? await fetchWordFromAPI() : getLocalWord();
        
        // Embaralha as opções e encontra o índice correto
        const shuffledOptions = shuffleArray([...wordData.options]);
        const correctWord = wordData.word;
        const correctIndex = shuffledOptions.indexOf(correctWord);
        
        // Seleciona uma versão incorreta para exibir como pergunta
        const incorrectOptions = shuffledOptions.filter(option => option !== correctWord);
        const displayedWord = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
        
        gameState.currentWord = {
            word: displayedWord,
            options: shuffledOptions,
            correct: correctIndex,
            explanation: wordData.explanation,
            hint: wordData.hint
        };

        gameState.usedWords[gameState.currentDifficulty].push(correctWord.toLowerCase());
        displayQuestion();
        startTimer();
    } catch (error) {
        console.error("Erro ao carregar palavra:", error);
        // Fallback para palavra local em caso de erro
        const wordData = getLocalWord();
        const shuffledOptions = shuffleArray([...wordData.options]);
        const correctIndex = shuffledOptions.indexOf(wordData.word);
        const incorrectOptions = shuffledOptions.filter(option => option !== wordData.word);
        const displayedWord = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
        
        gameState.currentWord = {
            word: displayedWord,
            options: shuffledOptions,
            correct: correctIndex,
            explanation: wordData.explanation,
            hint: wordData.hint
        };
        displayQuestion();
        startTimer();
    } finally {
        gameState.isLoading = false;
    }
}

// Busca uma palavra da API
async function fetchWordFromAPI() {
    const shuffledEndpoints = shuffleArray([...GAME_CONFIG.apiEndpoints]);
    
    for (const endpoint of shuffledEndpoints) {
        try {
            console.log(`Tentando API: ${endpoint.url}`);
            const response = await fetchWithTimeout(endpoint.url, {
                timeout: GAME_CONFIG.apiRequestTimeout
            });
            
            if (!response.ok) {
                console.log(`API ${endpoint.url} respondeu com status ${response.status}`);
                continue;
            }
            
            const data = await response.json();
            console.log("Resposta da API:", data);
            
            // Extrai a palavra usando o parser específico do endpoint
            const word = endpoint.parser(data)?.toLowerCase().trim();
            
            if (!word) {
                console.log(`API ${endpoint.url} não retornou uma palavra válida`);
                continue;
            }
            
            // Verifica se a palavra já foi usada
            if (gameState.usedWords[gameState.currentDifficulty].includes(word)) {
                console.log(`Palavra "${word}" já foi usada`);
                continue;
            }
            
            // Filtra palavras muito curtas ou muito longas
            if (word.length < 4 || word.length > 12) {
                console.log(`Palavra "${word}" fora do tamanho ideal`);
                continue;
            }
            
            // Remove caracteres especiais e acentos
            const cleanWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            // Gera opções e dica com base na dificuldade
            const options = generateOptions(cleanWord, gameState.currentDifficulty);
            const hint = generateHint(cleanWord, gameState.currentDifficulty);
            
            console.log(`Palavra obtida com sucesso da API ${endpoint.url}: ${cleanWord}`);
            return {
                word: cleanWord,
                options: options,
                explanation: `A grafia correta é '${cleanWord}'.`,
                hint: hint
            };
            
        } catch (error) {
            console.error(`Erro com endpoint ${endpoint.url}:`, error.message);
            continue;
        }
    }
    
    // Se todas as APIs falharem, usa palavra local
    console.error("Todas as APIs falharam, usando palavra local");
    return getLocalWord();
}

// Obtém uma palavra local aleatória não usada
function getLocalWord() {
    const words = LOCAL_WORDS[gameState.currentDifficulty];
    const unusedWords = words.filter(wordObj => 
        !gameState.usedWords[gameState.currentDifficulty].includes(wordObj.word.toLowerCase())
    );
    
    if (unusedWords.length === 0) {
        console.log("Todas as palavras locais foram usadas, reiniciando lista...");
        gameState.usedWords[gameState.currentDifficulty] = [];
        return words[Math.floor(Math.random() * words.length)];
    }
    
    return unusedWords[Math.floor(Math.random() * unusedWords.length)];
}

// Gera opções de resposta para uma palavra
function generateOptions(word, difficulty) {
    const options = [word];
    
    while (options.length < 4) {
        const variation = generateVariation(word, difficulty);
        if (!options.includes(variation)) {
            options.push(variation);
        }
    }

    return shuffleArray(options);
}

// Gera uma variação incorreta para uma palavra
function generateVariation(word, difficulty) {
    const variations = {
        easy: [
            word.replace(/b/g, 'v'),
            word.replace(/v/g, 'b'),
            word.replace(/s([aou])/g, 'z$1'),
            word.replace(/z([aou])/g, 's$1'),
            word.replace(/ç/g, 'c'),
            word.replace(/c([ei])/g, 'ç$1')
        ],
        medium: [
            word.replace(/x/g, 'ch'),
            word.replace(/ch/g, 'x'),
            word.replace(/ss/g, 's'),
            word.replace(/([^s])s([aou])/g, '$1ss$2'),
            word.replace(/g([ei])/g, 'j$1'),
            word.replace(/j([aou])/g, 'g$1')
        ],
        hard: [
            word.replace(/^pn/, 'n'),
            word.replace(/^ps/, 's'),
            word.replace(/^mn/, 'n'),
            word.replace(/^bt/, 't'),
            word.replace(/^gm/, 'm'),
            word.replace(/^tm/, 'm')
        ]
    };

    const possibleVariations = variations[difficulty]
        .filter(v => v !== word && v.length >= word.length - 2 && v.length <= word.length + 2);

    return possibleVariations.length > 0 
        ? possibleVariations[Math.floor(Math.random() * possibleVariations.length)]
        : word + (word.endsWith("s") ? "es" : "s");
}

// Gera uma dica com base na palavra e dificuldade
function generateHint(word, difficulty) {
    const hints = {
        easy: [
            "Palavras com 'b' antes de 'r' geralmente mantêm o 'b'.",
            "Palavras com prefixo 'ad-' mantêm o 'd' antes de consoantes.",
            "Palavras com 'x' seguido de 'c' mantêm essa grafia.",
            "Palavras com 'ç' geralmente mantêm essa grafia antes de 'a', 'o', 'u'."
        ],
        medium: [
            "Palavras com 'b' antes de 'sc' mantêm o 'b'.",
            "Palavras com 'x' seguido de 'c' mantêm essa grafia.",
            "Palavras com 'ss' geralmente têm essa grafia.",
            "Palavras com 'ch' geralmente mantêm essa grafia."
        ],
        hard: [
            "Palavras de origem grega com 'pn' no início mantêm essa grafia.",
            "Palavras de origem grega com 'ps' no início mantêm essa grafia.",
            "Palavras de origem grega com 'mn' no início mantêm essa grafia.",
            "Palavras com grupos consonantais no início geralmente mantêm essa grafia."
        ]
    };
    
    return hints[difficulty][Math.floor(Math.random() * hints[difficulty].length)];
}

// Exibe a pergunta na tela
function displayQuestion() {
    DOM.word.textContent = gameState.currentWord.word;
    DOM.options.innerHTML = '';

    gameState.currentWord.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', () => checkAnswer(index));
        DOM.options.appendChild(button);
    });

    updateQuestionCounter();
    DOM.feedback.textContent = '';
    DOM.hintContent.classList.add('hidden');
}

// Verifica a resposta do jogador
function checkAnswer(selectedIndex) {
    if (!gameState.isPlaying || gameState.isLoading) return;

    gameState.isPlaying = false;
    clearInterval(gameState.timer);

    const isCorrect = selectedIndex === gameState.currentWord.correct;
    const options = DOM.options.querySelectorAll('.option');

    options[gameState.currentWord.correct].style.backgroundColor = "var(--correct)";
    if (!isCorrect) {
        options[selectedIndex].style.backgroundColor = "var(--incorrect)";
    }

    if (isCorrect) {
        const timeBonus = Math.floor(parseInt(DOM.timerText.textContent) / GAME_CONFIG.timeBonusDivisor);
        gameState.score += 1 + timeBonus;
        updateScore();
        DOM.feedback.textContent = `Correto! ${gameState.currentWord.explanation}`;
        DOM.feedback.className = "feedback-card correct";
    } else {
        DOM.feedback.textContent = `Incorreto! ${gameState.currentWord.explanation}`;
        DOM.feedback.className = "feedback-card incorrect";
    }

    setTimeout(() => {
        gameState.currentQuestion++;
        gameState.isPlaying = true;
        loadQuestion();
    }, GAME_CONFIG.answerDelay);
}

// Inicia o temporizador
function startTimer() {
    let timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentDifficulty];
    DOM.timerText.textContent = timeLeft;

    gameState.timer = setInterval(() => {
        timeLeft--;
        DOM.timerText.textContent = timeLeft;

        const timerElement = document.getElementById('timer');
        timerElement.className = 'game-timer';
        
        if (timeLeft <= 10) {
            timerElement.classList.add('warning');
        }
        if (timeLeft <= 5) {
            timerElement.classList.remove('warning');
            timerElement.classList.add('critical');
        }

        if (timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeOut();
        }
    }, 1000);
}

// Limpa o temporizador
function clearTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

// Tempo esgotado
function timeOut() {
    gameState.isPlaying = false;
    DOM.feedback.textContent = "Tempo esgotado!";
    DOM.feedback.className = "feedback-card incorrect";

    setTimeout(() => {
        gameState.currentQuestion++;
        gameState.isPlaying = true;
        loadQuestion();
    }, GAME_CONFIG.answerDelay);
}

// Atualiza a pontuação
function updateScore() {
    DOM.scoreText.textContent = gameState.score;
}

// Atualiza o contador de perguntas
function updateQuestionCounter() {
    DOM.questionCounter.textContent = `${gameState.currentQuestion + 1}/${GAME_CONFIG.totalQuestions}`;
}

// Mostra/oculta a dica
function toggleHint() {
    if (!gameState.currentWord || gameState.isLoading) return;
    
    DOM.hintContent.textContent = gameState.currentWord.hint;
    DOM.hintContent.classList.toggle('hidden');
}

// Finaliza o jogo
function endGame() {
    DOM.word.textContent = "Fim do Jogo!";
    DOM.options.innerHTML = `
        <div class="feedback-card">
            <p>Sua pontuação final: <strong>${gameState.score}</strong></p>
        </div>
        <button class="restart" onclick="startGame()">
            <i class="fas fa-redo"></i> Jogar Novamente
        </button>
    `;
}

// Volta ao menu
function returnToMenu() {
    DOM.gameScreen.style.display = 'none';
    DOM.startScreen.style.display = 'flex';
    DOM.backButton.classList.add('hidden');
    DOM.backToMainButton.classList.remove('hidden');
    clearTimer();
}

// Embaralha um array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Inicializa o jogo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);