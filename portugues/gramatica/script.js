const GAME_CONFIG = {
    totalQuestions: 5,
    timePerQuestion: {
        easy: 40,
        medium: 30,
        hard: 20
    },
    answerDelay: 2000
};

const SENTENCES = {
    easy: [
        {
            sentence: "Ele assistiu o jogo na TV.",
            correct: "Ele assistiu ao jogo na TV.",
            explanation: "Regência verbal: 'assistir a' é obrigatório.",
            options: [
                "Ele assistiu ao jogo na TV.",
                "Ele assistiu o jogo na televisão.",
                "Ele assistiu o jogo na TV.",
                "Ele assistiu à jogo na TV."
            ]
        },
        {
            sentence: "Vou emprestar seu livro para você.",
            correct: "Vou te emprestar o livro.",
            explanation: "'Emprestar' significa dar emprestado, não pegar emprestado.",
            options: [
                "Vou te emprestar o livro.",
                "Vou emprestar seu livro para você.",
                "Vou emprestar o livro para você.",
                "Vou te emprestar seu livro."
            ]
        }
    ],
    medium: [
        {
            sentence: "Houveram muitos problemas na festa.",
            correct: "Houve muitos problemas na festa.",
            explanation: "Verbo 'haver' (existir) é impessoal - use apenas 3ª pessoa do singular.",
            options: [
                "Houve muitos problemas na festa.",
                "Haviam muitos problemas na festa.",
                "Houveram muitos problemas na festa.",
                "Houve muitos problema na festa."
            ]
        },
        {
            sentence: "Fazem dois anos que não o vejo.",
            correct: "Faz dois anos que não o vejo.",
            explanation: "Verbo 'fazer' (tempo decorrido) é impessoal - use apenas 3ª pessoa do singular.",
            options: [
                "Faz dois anos que não o vejo.",
                "Fazem dois anos que não o vejo.",
                "Faz dois anos que não vejo ele.",
                "Faz dois anos que não o vê."
            ]
        }
    ],
    hard: [
        {
            sentence: "A maioria dos alunos faltaram à prova.",
            correct: "A maioria dos alunos faltou à prova.",
            explanation: "Concordância: verbo concorda com 'maioria' (singular).",
            options: [
                "A maioria dos alunos faltou à prova.",
                "A maioria dos alunos faltaram a prova.",
                "A maioria dos alunos faltaram à prova.",
                "A maioria de alunos faltou à prova."
            ]
        },
        {
            sentence: "Os livro está na mesa.",
            correct: "O livro está na mesa.",
            explanation: "Concordância: artigo deve concordar em número com o substantivo.",
            options: [
                "O livro está na mesa.",
                "Os livro está na mesa.",
                "O livros está na mesa.",
                "Os livros está na mesa."
            ]
        }
    ]
};

const gameState = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    timeLeft: 0,
    currentDifficulty: 'easy',
    isPlaying: false,
    currentSentence: null,
    usedSentences: { easy: [], medium: [], hard: [] }
};

const ranking = JSON.parse(localStorage.getItem('grammarRanking')) || [];

const DOM = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    rankingScreen: document.getElementById('ranking-screen'),
    nameInputScreen: document.getElementById('name-input-screen'),
    startButton: document.getElementById('start-button'),
    difficultyButtons: document.querySelectorAll('.difficulty-btn'),
    sentence: document.getElementById('sentence'),
    options: document.getElementById('options'),
    timerText: document.querySelector('#timer span'),
    scoreText: document.querySelector('#score span'),
    questionCounter: document.querySelector('#question-counter span'),
    feedback: document.getElementById('feedback'),
    backButton: document.getElementById('back-button'),
    backToMainButton: document.getElementById('back-to-main'),
    timePerQuestion: document.getElementById('time-per-question'),
    currentLevel: document.getElementById('current-level'),
    showRanking: document.getElementById('show-ranking'),
    rankingList: document.getElementById('ranking-list'),
    rankingTabs: document.getElementById('ranking-tabs'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    backToStart: document.getElementById('back-to-start'),
    finalScore: document.getElementById('final-score'),
    finalDifficulty: document.getElementById('final-difficulty'),
    playerName: document.getElementById('player-name'),
    saveScore: document.getElementById('save-score'),
    difficultyIndicator: document.getElementById('difficulty-indicator')
};

function init() {
    setupEventListeners();
    updateDifficultyDisplay();
    loadRanking();
    checkBackButton();
}

function setupEventListeners() {
    DOM.startButton.addEventListener('click', startGame);
    DOM.backButton.addEventListener('click', returnToMenu);
    DOM.backToMainButton.addEventListener('click', () => {
        window.location.href = '../../../index.html';
    });
    
    DOM.difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => setDifficulty(btn.dataset.level));
    });
    
    DOM.showRanking.addEventListener('click', showRanking);
    DOM.backToStart.addEventListener('click', returnToStart);
    DOM.saveScore.addEventListener('click', savePlayerScore);
    
    DOM.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => filterRanking(btn.dataset.level));
    });

    // Melhorias para mobile
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function handleTouchStart() {
    // Adiciona classe active para feedback visual
    document.body.classList.add('touch-active');
}

function handleTouchEnd() {
    // Remove classe active após um curto período
    setTimeout(() => {
        document.body.classList.remove('touch-active');
    }, 100);
}

function checkBackButton() {
    // Verifica se é a página inicial para ocultar o botão de voltar
    if (window.location.pathname.endsWith('index.html')) {
        DOM.backButton.classList.add('hidden');
    }
}

function setDifficulty(level) {
    gameState.currentDifficulty = level;
    DOM.difficultyButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
    
    DOM.timePerQuestion.textContent = `${GAME_CONFIG.timePerQuestion[level]}s`;
    DOM.currentLevel.textContent = 
        level === 'easy' ? 'Fácil' : 
        level === 'medium' ? 'Médio' : 'Difícil';
    
    updateDifficultyDisplay();
}

function updateDifficultyDisplay() {
    const levelName = 
        gameState.currentDifficulty === 'easy' ? 'Fácil' : 
        gameState.currentDifficulty === 'medium' ? 'Médio' : 'Difícil';
    
    DOM.difficultyIndicator.className = `game-difficulty ${gameState.currentDifficulty}`;
    DOM.difficultyIndicator.innerHTML = `<i class="fas fa-chart-line"></i> <span>${levelName}</span>`;
}

function startGame() {
    DOM.startScreen.style.display = 'none';
    DOM.gameScreen.style.display = 'block';
    DOM.backButton.classList.remove('hidden');
    DOM.backToMainButton.classList.add('hidden');

    resetGame();
    loadQuestion();
}

function resetGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentDifficulty];
    gameState.isPlaying = true;
    gameState.usedSentences = { easy: [], medium: [], hard: [] };
    
    updateScore();
    updateQuestionCounter();
}

function loadQuestion() {
    if (gameState.currentQuestion >= GAME_CONFIG.totalQuestions) {
        endGame();
        return;
    }

    DOM.sentence.textContent = "Carregando frase...";
    DOM.options.innerHTML = '';

    const availableSentences = SENTENCES[gameState.currentDifficulty].filter(s => 
        !gameState.usedSentences[gameState.currentDifficulty].includes(s.sentence)
    );

    if (availableSentences.length === 0) {
        gameState.usedSentences[gameState.currentDifficulty] = [];
        loadQuestion();
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableSentences.length);
    gameState.currentSentence = availableSentences[randomIndex];
    gameState.usedSentences[gameState.currentDifficulty].push(gameState.currentSentence.sentence);
    
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    DOM.sentence.textContent = gameState.currentSentence.sentence;
    DOM.options.innerHTML = '';

    gameState.currentSentence.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option === gameState.currentSentence.correct));
        button.addEventListener('touchstart', () => {
            button.classList.add('active');
        });
        button.addEventListener('touchend', () => {
            button.classList.remove('active');
        });
        DOM.options.appendChild(button);
    });

    updateQuestionCounter();
    DOM.feedback.textContent = '';
}

function checkAnswer(isCorrect) {
    if (!gameState.isPlaying) return;

    gameState.isPlaying = false;
    clearInterval(gameState.timer);

    if (isCorrect) {
        const timeBonus = Math.floor(gameState.timeLeft / 5);
        gameState.score += 1 + timeBonus;
        updateScore();
        DOM.feedback.textContent = `Correto! +${timeBonus} bônus! ${gameState.currentSentence.explanation}`;
        DOM.feedback.className = "feedback-card correct";
    } else {
        DOM.feedback.textContent = `Incorreto! O correto é: "${gameState.currentSentence.correct}". ${gameState.currentSentence.explanation}`;
        DOM.feedback.className = "feedback-card incorrect";
    }

    setTimeout(() => {
        gameState.currentQuestion++;
        gameState.isPlaying = true;
        loadQuestion();
    }, GAME_CONFIG.answerDelay);
}

function startTimer() {
    gameState.timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentDifficulty];
    DOM.timerText.textContent = gameState.timeLeft;

    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        DOM.timerText.textContent = gameState.timeLeft;

        const timerElement = document.getElementById('timer');
        timerElement.className = 'game-timer';
        
        if (gameState.timeLeft <= 10) {
            timerElement.classList.add('warning');
        }
        if (gameState.timeLeft <= 5) {
            timerElement.classList.remove('warning');
            timerElement.classList.add('critical');
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeOut();
        }
    }, 1000);
}

function clearTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

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

function updateScore() {
    DOM.scoreText.textContent = gameState.score;
}

function updateQuestionCounter() {
    DOM.questionCounter.textContent = `${gameState.currentQuestion + 1}/${GAME_CONFIG.totalQuestions}`;
}

function endGame() {
    DOM.gameScreen.style.display = 'none';
    DOM.nameInputScreen.style.display = 'block';
    
    DOM.finalScore.textContent = gameState.score;
    DOM.finalDifficulty.textContent = 
        gameState.currentDifficulty === 'easy' ? 'Fácil' : 
        gameState.currentDifficulty === 'medium' ? 'Médio' : 'Difícil';
}

function showRanking() {
    DOM.startScreen.style.display = 'none';
    DOM.rankingScreen.style.display = 'block';
    DOM.backButton.classList.remove('hidden');
    DOM.backToMainButton.classList.add('hidden');
    
    filterRanking('all');
}

function filterRanking(level) {
    DOM.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
    
    let filteredRanking = [...ranking];
    if (level !== 'all') {
        filteredRanking = ranking.filter(item => item.difficulty === level);
    }
    
    // Ordena por pontuação (maior primeiro)
    filteredRanking.sort((a, b) => b.score - a.score);
    
    renderRanking(filteredRanking);
}

function renderRanking(items) {
    DOM.rankingList.innerHTML = '';
    
    if (items.length === 0) {
        DOM.rankingList.innerHTML = '<p class="no-results">Nenhum registro encontrado</p>';
        return;
    }
    
    items.forEach((item, index) => {
        const rankItem = document.createElement('div');
        rankItem.className = 'rank-item';
        
        const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : `${index + 1}º`;
        const difficultyClass = `difficulty-${item.difficulty}`;
        const difficultyName = 
            item.difficulty === 'easy' ? 'Fácil' : 
            item.difficulty === 'medium' ? 'Médio' : 'Difícil';
        
        rankItem.innerHTML = `
            <div class="rank-position">${medal}</div>
            <div class="rank-name">${item.name}</div>
            <div class="rank-difficulty ${difficultyClass}">${difficultyName}</div>
            <div class="rank-score">${item.score} pts</div>
        `;
        
        DOM.rankingList.appendChild(rankItem);
    });
}

function savePlayerScore() {
    const name = DOM.playerName.value.trim();
    if (!name) {
        alert('Por favor, digite seu nome para salvar sua pontuação!');
        return;
    }
    
    const newEntry = {
        name: name,
        score: gameState.score,
        difficulty: gameState.currentDifficulty,
        date: new Date().toISOString()
    };
    
    ranking.push(newEntry);
    localStorage.setItem('grammarRanking', JSON.stringify(ranking));
    
    DOM.nameInputScreen.style.display = 'none';
    DOM.rankingScreen.style.display = 'block';
    filterRanking('all');
}

function loadRanking() {
    if (ranking.length > 0) {
        // Mantém apenas os 50 melhores resultados para economizar espaço
        ranking.sort((a, b) => b.score - a.score);
        while (ranking.length > 50) {
            ranking.pop();
        }
        localStorage.setItem('grammarRanking', JSON.stringify(ranking));
    }
}

function returnToMenu() {
    DOM.gameScreen.style.display = 'none';
    DOM.rankingScreen.style.display = 'none';
    DOM.nameInputScreen.style.display = 'none';
    DOM.startScreen.style.display = 'flex';
    DOM.backButton.classList.add('hidden');
    DOM.backToMainButton.classList.remove('hidden');
    clearTimer();
}

function returnToStart() {
    DOM.rankingScreen.style.display = 'none';
    DOM.startScreen.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', init);