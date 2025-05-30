const GAME_CONFIG = {
    totalQuestions: 10,
    timePerQuestion: {
        "2": 45,
        "5": 35,
        "9": 25
    },
    answerDelay: 2000
};

const gameState = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    timeLeft: 0,
    currentYear: '2',
    isPlaying: false,
    currentQuestionObj: null,
    usedQuestions: { "2": [], "5": [], "9": [] }
};

const DOM = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    endScreen: document.getElementById('end-screen'),
    startButton: document.getElementById('start-button'),
    yearButtons: document.querySelectorAll('.year-btn'),
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
    
    DOM.yearButtons.forEach(btn => {
        btn.addEventListener('click', () => setYear(btn.dataset.year));
    });
    
    setYear('2');
}

function setYear(year) {
    gameState.currentYear = year;
    DOM.yearButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.year === year);
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
    gameState.timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentYear];
    gameState.isPlaying = true;
    gameState.usedQuestions = { "2": [], "5": [], "9": [] };
    
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
    
    const availableQuestions = SAEB_QUESTIONS[gameState.currentYear].filter(q => 
        !gameState.usedQuestions[gameState.currentYear].includes(q.question)
    );
    
    if (availableQuestions.length === 0) {
        gameState.usedQuestions[gameState.currentYear] = [];
        loadQuestion();
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    gameState.currentQuestionObj = availableQuestions[randomIndex];
    gameState.usedQuestions[gameState.currentYear].push(gameState.currentQuestionObj.question);
    
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
    gameState.timeLeft = GAME_CONFIG.timePerQuestion[gameState.currentYear];
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