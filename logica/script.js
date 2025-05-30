const GAME_CONFIG = {
    totalQuestions: 10,
    timePerQuestion: {
        "easy": 45,
        "medium": 35,
        "hard": 25
    },
    answerDelay: 2000
};

const gameState = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    timeLeft: 0,
    currentDifficulty: 'easy',
    isPlaying: false,
    currentQuestionObj: null,
    usedQuestions: { "easy": [], "medium": [], "hard": [] }
};

const DOM = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    endScreen: document.getElementById('end-screen'),
    startButton: document.getElementById('start-button'),
    difficultyButtons: document.querySelectorAll('.difficulty-btn'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    timerText: document.querySelector('#timer span'),
    scoreText: document.querySelector('#score span'),
    questionCounter: document.querySelector('#question-counter span'),
    feedback: document.getElementById('feedback'),
    finalScore: document.getElementById('final-score'),
    restartButton: document.getElementById('restart-button'),
    backToMenu: document.getElementById('back-to-menu')
};

function init() {
    DOM.startButton.addEventListener('click', startGame);
    DOM.restartButton.addEventListener('click', restartGame);
    DOM.backToMenu.addEventListener('click', returnToMenu);
    
    DOM.difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => setDifficulty(btn.dataset.difficulty));
    });
    
    setDifficulty('easy');
}

function setDifficulty(difficulty) {
    gameState.currentDifficulty = difficulty;
    DOM.difficultyButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
    });
}

function startGame() {
    DOM.startScreen.style.display = 'none';
    DOM.gameScreen.style.display = 'block';
    DOM.endScreen.style.display = 'none';
    
    resetGame();
    loadQuestion();
}

function resetGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentDifficulty];
    gameState.isPlaying = true;
    gameState.usedQuestions = { "easy": [], "medium": [], "hard": [] };
    
    updateScore();
    updateQuestionCounter();
}

function loadQuestion() {
    if (gameState.currentQuestion >= GAME_CONFIG.totalQuestions) {
        endGame();
        return;
    }
    
    DOM.question.textContent = "Carregando pergunta...";
    DOM.options.innerHTML = '';
    
    const availableQuestions = LOGIC_QUESTIONS[gameState.currentDifficulty].filter(q => 
        !gameState.usedQuestions[gameState.currentDifficulty].includes(q.question)
    );
    
    if (availableQuestions.length === 0) {
        gameState.usedQuestions[gameState.currentDifficulty] = [];
        loadQuestion();
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    gameState.currentQuestionObj = availableQuestions[randomIndex];
    gameState.usedQuestions[gameState.currentDifficulty].push(gameState.currentQuestionObj.question);
    
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    DOM.question.textContent = gameState.currentQuestionObj.question;
    DOM.options.innerHTML = '';
    
    gameState.currentQuestionObj.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index === gameState.currentQuestionObj.correct));
        DOM.options.appendChild(button);
    });
    
    updateQuestionCounter();
    DOM.feedback.textContent = '';
    DOM.feedback.className = 'feedback-card';
}

function checkAnswer(isCorrect) {
    if (!gameState.isPlaying) return;
    
    gameState.isPlaying = false;
    clearInterval(gameState.timer);
    
    if (isCorrect) {
        const timeBonus = Math.floor(gameState.timeLeft / 5);
        gameState.score += 10 + timeBonus;
        updateScore();
        DOM.feedback.textContent = `Correto! +${timeBonus} bônus! ${gameState.currentQuestionObj.explanation}`;
        DOM.feedback.className = "feedback-card correct";
    } else {
        const correctOption = gameState.currentQuestionObj.options[gameState.currentQuestionObj.correct];
        DOM.feedback.textContent = `Incorreto! A resposta correta é: "${correctOption}". ${gameState.currentQuestionObj.explanation}`;
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
        
        DOM.timer.className = 'game-timer';
        if (gameState.timeLeft <= 10) {
            DOM.timer.classList.add('warning');
        }
        if (gameState.timeLeft <= 5) {
            DOM.timer.classList.remove('warning');
            DOM.timer.classList.add('critical');
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeOut();
        }
    }, 1000);
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
    DOM.endScreen.style.display = 'block';
    DOM.finalScore.textContent = gameState.score;
}

function restartGame() {
    startGame();
}

function returnToMenu() {
    DOM.startScreen.style.display = 'block';
    DOM.gameScreen.style.display = 'none';
    DOM.endScreen.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);