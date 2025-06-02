const GAME_CONFIG = {
    totalQuestions: 10,
    timePerQuestion: {
        "2": 60,
        "5": 45,
        "9": 30
    },
    answerDelay: 5000,
    basePoints: 10
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
    backToMenu: document.getElementById('back-to-menu'),
    rankingList: document.getElementById('ranking-list'),
    playerName: document.getElementById('player-name'),
    saveScoreBtn: document.getElementById('save-score-btn'),
    nameInputContainer: document.getElementById('name-input-container'),
    timerElement: document.getElementById('timer')
};

// Sistema de Ranking
const RANKING_KEY = 'saeb_math_ranking';

function getRanking() {
    const ranking = localStorage.getItem(RANKING_KEY);
    return ranking ? JSON.parse(ranking) : [];
}

function saveRanking(ranking) {
    localStorage.setItem(RANKING_KEY, JSON.stringify(ranking));
}

function updateRanking(name, year, score) {
    const ranking = getRanking();
    const yearName = { '2': '2º Ano', '5': '5º Ano', '9': '9º Ano' }[year];
    
    ranking.push({
        name: name || 'Anônimo',
        year: yearName,
        score: score,
        date: new Date().toLocaleDateString('pt-BR')
    });
    
    // Ordenar por pontuação (maior primeiro) e manter apenas os top 10
    ranking.sort((a, b) => b.score - a.score);
    const top10 = ranking.slice(0, 10);
    
    saveRanking(top10);
    displayRanking();
}

function displayRanking() {
    const ranking = getRanking();
    DOM.rankingList.innerHTML = '';
    
    if (ranking.length === 0) {
        DOM.rankingList.innerHTML = '<p class="no-ranking">Nenhum recorde ainda!</p>';
        return;
    }
    
    const table = document.createElement('table');
    table.className = 'ranking-table';
    
    // Cabeçalho
    const headerRow = document.createElement('tr');
    ['#', 'Nome', 'Ano', 'Pontos', 'Data'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Itens do ranking
    ranking.forEach((item, index) => {
        const row = document.createElement('tr');
        if (index === 0) row.classList.add('first-place');
        else if (index === 1) row.classList.add('second-place');
        else if (index === 2) row.classList.add('third-place');
        
        [index + 1, item.name, item.year, item.score, item.date].forEach((text, i) => {
            const cell = document.createElement('td');
            cell.textContent = text;
            if (i === 3) cell.classList.add('score-cell');
            row.appendChild(cell);
        });
        
        table.appendChild(row);
    });
    
    DOM.rankingList.appendChild(table);
}

function init() {
    DOM.startButton.addEventListener('click', startGame);
    DOM.restartButton.addEventListener('click', restartGame);
    DOM.backToMenu.addEventListener('click', returnToMenu);
    DOM.saveScoreBtn.addEventListener('click', saveScore);
    
    DOM.yearButtons.forEach(btn => {
        btn.addEventListener('click', () => setYear(btn.dataset.year));
    });
    
    setYear('2');
    displayRanking();
}

function saveScore() {
    const name = DOM.playerName.value.trim();
    if (name === '') {
        alert('Por favor, digite seu nome para salvar a pontuação!');
        return;
    }
    
    updateRanking(name, gameState.currentYear, gameState.score);
    DOM.nameInputContainer.style.display = 'none';
    DOM.playerName.value = '';
    
    // Mostrar mensagem de sucesso
    const successMsg = document.createElement('p');
    successMsg.textContent = 'Pontuação salva com sucesso!';
    successMsg.style.color = 'var(--correct)';
    successMsg.style.textAlign = 'center';
    successMsg.style.margin = '10px 0';
    DOM.nameInputContainer.parentNode.insertBefore(successMsg, DOM.nameInputContainer.nextSibling);
    
    setTimeout(() => {
        successMsg.remove();
    }, 3000);
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
        gameState.score += GAME_CONFIG.basePoints + timeBonus;
        updateScore();
        DOM.feedback.textContent = `✅ Correto! +${timeBonus} bônus!\n${gameState.currentQuestionObj.explanation}`;
        DOM.feedback.className = "feedback-card correct";
    } else {
        const correctOption = gameState.currentQuestionObj.options[gameState.currentQuestionObj.correct];
        DOM.feedback.textContent = `❌ Incorreto! A resposta correta é: "${correctOption}".\n${gameState.currentQuestionObj.explanation}`;
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
    DOM.timerElement.className = 'game-info';
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        DOM.timerText.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 10) {
            DOM.timerElement.classList.add('warning');
        }
        if (gameState.timeLeft <= 5) {
            DOM.timerElement.classList.remove('warning');
            DOM.timerElement.classList.add('critical');
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeOut();
        }
    }, 1000);
}

function timeOut() {
    gameState.isPlaying = false;
    DOM.feedback.textContent = "⏰ Tempo esgotado!";
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
    DOM.nameInputContainer.style.display = 'flex';
    DOM.playerName.focus();
}

function restartGame() {
    startGame();
}

function returnToMenu() {
    DOM.startScreen.style.display = 'block';
    DOM.gameScreen.style.display = 'none';
    DOM.endScreen.style.display = 'none';
    displayRanking();
}

// Inicializa o jogo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);