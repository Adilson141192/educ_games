// Configurações do jogo
const GAME_CONFIG = {
    totalQuestions: 10,
    timePerQuestion: {
        easy: 60,
        medium: 45,
        hard: 30
    },
    timeBonusDivisor: 5,
    answerDelay: 2000
};

// Banco de palavras
const WORD_DATABASE = {
    easy: [
        {
            word: "abrupto",
            options: ["abrupto", "avrupto", "abruptu", "abrupta"],
            correct: 0,
            explanation: "A grafia correta é 'abrupto' (com 'b').",
            hint: "Palavras com 'b' antes de 'r' geralmente mantêm o 'b'."
        },
        {
            word: "advogado",
            options: ["advogado", "avogado", "adivogado", "advogadu"],
            correct: 0,
            explanation: "A grafia correta é 'advogado' (com 'd').",
            hint: "Palavras com prefixo 'ad-' mantêm o 'd' antes de consoantes."
        }
    ],
    medium: [
        {
            word: "obscuro",
            options: ["obscuro", "oscuro", "obscuru", "obscuro"],
            correct: 0,
            explanation: "A grafia correta é 'obscuro' (com 'b').",
            hint: "Palavras com 'b' antes de 'sc' mantêm o 'b'."
        },
        {
            word: "excesso",
            options: ["excesso", "ecesso", "exsesso", "exceço"],
            correct: 0,
            explanation: "A grafia correta é 'excesso' (com 'x' e 'ss').",
            hint: "Palavras com 'x' seguido de 'c' mantêm essa grafia."
        }
    ],
    hard: [
        {
            word: "pneumonia",
            options: ["pneumonia", "neumonia", "pneumônia", "pneumonia"],
            correct: 0,
            explanation: "A grafia correta é 'pneumonia' (com 'pn' mudo).",
            hint: "Palavras de origem grega com 'pn' no início mantêm essa grafia."
        },
        {
            word: "psicólogo",
            options: ["psicólogo", "sicólogo", "psicológo", "psicologo"],
            correct: 0,
            explanation: "A grafia correta é 'psicólogo' (com 'ps' mudo).",
            hint: "Palavras de origem grega com 'ps' no início mantêm essa grafia."
        }
    ]
};

// Estado do jogo
const gameState = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    currentDifficulty: 'easy',
    currentWord: null,
    isPlaying: false
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

    // Atualiza a UI
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
function loadQuestion() {
    if (gameState.currentQuestion >= GAME_CONFIG.totalQuestions) {
        endGame();
        return;
    }

    const words = WORD_DATABASE[gameState.currentDifficulty];
    gameState.currentWord = words[Math.floor(Math.random() * words.length)];

    displayQuestion();
    startTimer();
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
    if (!gameState.isPlaying) return;

    gameState.isPlaying = false;
    clearInterval(gameState.timer);

    const isCorrect = selectedIndex === gameState.currentWord.correct;
    const options = DOM.options.querySelectorAll('.option');

    // Destaca as respostas
    options[gameState.currentWord.correct].style.backgroundColor = "var(--correct)";
    if (!isCorrect) {
        options[selectedIndex].style.backgroundColor = "var(--incorrect)";
    }

    // Atualiza a pontuação
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

    // Próxima pergunta após delay
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
    if (!gameState.currentWord) return;
    
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

// Inicializa o jogo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);