// Variáveis de estado do jogo
let currentMode = null;
let currentScore = 0;
let currentLevel = 1;
let currentQuestion = 0;
let correctAnswers = 0;
let gameData = [];
let timer = null;
let timeLeft = 0;

// Elementos DOM
const modeSelection = document.getElementById('modeSelection');
const gameScreen = document.getElementById('gameScreen');
const resultsScreen = document.getElementById('resultsScreen');
const questionContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const nextBtn = document.getElementById('nextBtn');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const finalScoreElement = document.getElementById('finalScore');
const performanceFeedbackElement = document.getElementById('performanceFeedback');
const playAgainBtn = document.getElementById('playAgainBtn');
const changeModeBtn = document.getElementById('changeModeBtn');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const wordAudio = document.getElementById('wordAudio');

// Inicialização dos modos de jogo
document.getElementById('associationMode').addEventListener('click', () => startGame('association'));
document.getElementById('flashcardMode').addEventListener('click', () => startGame('flashcard'));
document.getElementById('sentenceMode').addEventListener('click', () => startGame('sentence'));

// Função para iniciar o jogo
function startGame(mode) {
    currentMode = mode;
    currentScore = 0;
    currentQuestion = 0;
    correctAnswers = 0;
    updateScore();
    
    // Preparar dados do jogo baseado no modo
    switch(mode) {
        case 'association':
            gameData = prepareAssociationGame();
            break;
        case 'flashcard':
            gameData = prepareFlashcardGame();
            break;
        case 'sentence':
            gameData = prepareSentenceGame();
            break;
    }
    
    modeSelection.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');
    
    showQuestion();
}

// Preparar dados para o modo de associação
function prepareAssociationGame() {
    const selectedCategories = difficultyLevels[getDifficultyLevel()].categories;
    let words = [];
    
    selectedCategories.forEach(category => {
        words = words.concat(vocabularyData[category]);
    });
    
    // Embaralhar palavras
    words = shuffleArray(words).slice(0, difficultyLevels[getDifficultyLevel()].wordsPerGame);
    
    return words.map(word => {
        // Pegar opções da mesma categoria
        const categoryWords = vocabularyData[Object.keys(vocabularyData).find(cat => 
            vocabularyData[cat].some(w => w.word === word.word)
        )];
        
        const options = shuffleArray(categoryWords)
            .filter(w => w.word !== word.word)
            .slice(0, 3)
            .map(w => w.word);
        
        options.push(word.word);
        
        return {
            type: 'association',
            word: word.word,
            image: word.image,
            audio: word.audio,
            translation: word.translation,
            options: shuffleArray(options)
        };
    });
}

// Preparar dados para o modo flashcard
function prepareFlashcardGame() {
    const selectedCategories = difficultyLevels[getDifficultyLevel()].categories;
    let words = [];
    
    selectedCategories.forEach(category => {
        words = words.concat(vocabularyData[category]);
    });
    
    return shuffleArray(words).slice(0, difficultyLevels[getDifficultyLevel()].wordsPerGame);
}

// Preparar dados para o modo de completar frases
function prepareSentenceGame() {
    return shuffleArray(sentenceData).slice(0, difficultyLevels[getDifficultyLevel()].wordsPerGame);
}

// Mostrar questão atual
function showQuestion() {
    if (currentQuestion >= gameData.length) {
        endGame();
        return;
    }
    
    const question = gameData[currentQuestion];
    questionContainer.innerHTML = '';
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    // Configurar baseado no modo de jogo
    switch(currentMode) {
        case 'association':
            showAssociationQuestion(question);
            break;
        case 'flashcard':
            showFlashcardQuestion(question);
            break;
        case 'sentence':
            showSentenceQuestion(question);
            break;
    }
    
    startTimer();
}

// Mostrar questão de associação palavra-imagem
function showAssociationQuestion(question) {
    // Mostrar imagem
    const img = document.createElement('img');
    img.src = `assets/images/${question.image}`;
    img.alt = question.word;
    img.className = 'word-image';
    questionContainer.appendChild(img);
    
    // Mostrar opções
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option, question.word));
        optionsContainer.appendChild(btn);
    });
}

// Mostrar questão de flashcard
function showFlashcardQuestion(question) {
    // Mostrar palavra em inglês
    const wordEl = document.createElement('div');
    wordEl.className = 'word-text';
    wordEl.textContent = question.word;
    questionContainer.appendChild(wordEl);
    
    // Botão para ouvir a pronúncia
    const audioBtn = document.createElement('button');
    audioBtn.className = 'feedback-audio';
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    audioBtn.addEventListener('click', () => {
        wordAudio.src = `assets/audio/${question.audio}`;
        wordAudio.play();
    });
    questionContainer.appendChild(audioBtn);
    
    // Opções de tradução (em um modo avançado poderia mostrar opções)
    setTimeout(() => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = 'Show Translation';
        btn.addEventListener('click', () => {
            wordEl.textContent = question.translation;
            btn.textContent = 'Next';
            btn.addEventListener('click', goToNextQuestion, { once: true });
        });
        optionsContainer.appendChild(btn);
    }, 1500);
}

// Mostrar questão de completar frase
function showSentenceQuestion(question) {
    // Mostrar frase com lacuna
    const sentenceEl = document.createElement('div');
    sentenceEl.className = 'sentence-text';
    sentenceEl.innerHTML = question.sentence.replace('___', '<span class="blank">______</span>');
    questionContainer.appendChild(sentenceEl);
    
    // Mostrar opções
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option, question.correct));
        optionsContainer.appendChild(btn);
    });
}

// Verificar resposta
function checkAnswer(selected, correct) {
    clearInterval(timer);
    
    const isCorrect = selected === correct;
    if (isCorrect) {
        currentScore += 10 * currentLevel;
        correctAnswers++;
        correctSound.play();
        showFeedback('Correct!', true);
    } else {
        wrongSound.play();
        showFeedback(`Incorrect. The correct answer is: ${correct}`, false);
        
        // Mostrar a resposta correta
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            }
            if (btn.textContent === selected) {
                btn.classList.add('incorrect');
            }
            btn.disabled = true;
        });
    }
    
    updateScore();
    nextBtn.classList.remove('hidden');
}

// Mostrar feedback
function showFeedback(message, isCorrect) {
    feedbackContainer.innerHTML = '';
    
    const feedbackEl = document.createElement('div');
    feedbackEl.className = isCorrect ? 'feedback-text correct' : 'feedback-text incorrect';
    feedbackEl.textContent = message;
    feedbackContainer.appendChild(feedbackEl);
    
    if (isCorrect) {
        const celebration = document.createElement('div');
        celebration.innerHTML = '🎉';
        celebration.style.fontSize = '2rem';
        celebration.style.marginTop = '0.5rem';
        feedbackContainer.appendChild(celebration);
    }
}

// Ir para próxima questão
function goToNextQuestion() {
    currentQuestion++;
    showQuestion();
}

// Iniciar timer
function startTimer() {
    timeLeft = difficultyLevels[getDifficultyLevel()].timeLimit / 1000;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

// Atualizar display do timer
function updateTimerDisplay() {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';
    timerElement.textContent = `Time: ${timeLeft}s`;
    
    const existingTimer = document.querySelector('.timer');
    if (existingTimer) {
        existingTimer.replaceWith(timerElement);
    } else {
        questionContainer.appendChild(timerElement);
    }
}

// Tempo esgotado
function handleTimeout() {
    wrongSound.play();
    showFeedback('Time is up!', false);
    nextBtn.classList.remove('hidden');
    
    // Desabilitar todos os botões
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
}

// Finalizar jogo
function endGame() {
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScoreElement.textContent = `Your Score: ${currentScore}`;
    
    // Feedback de desempenho
    const accuracy = Math.round((correctAnswers / gameData.length) * 100);
    let feedback = '';
    
    if (accuracy >= 90) {
        feedback = 'Excellent! You know these words very well.';
    } else if (accuracy >= 70) {
        feedback = 'Good job! Keep practicing to improve.';
    } else if (accuracy >= 50) {
        feedback = 'Not bad! Try again to get better.';
    } else {
        feedback = 'Keep practicing! You\'ll improve with time.';
    }
    
    performanceFeedbackElement.textContent = `You got ${correctAnswers} out of ${gameData.length} correct. ${feedback}`;
    
    // Salvar pontuação no ranking
    saveToRanking(currentScore, currentMode);
}

// Atualizar pontuação
function updateScore() {
    scoreElement.textContent = `Score: ${currentScore}`;
    levelElement.textContent = `Level: ${currentLevel}`;
}

// Obter nível de dificuldade
function getDifficultyLevel() {
    // Pode ser implementada uma lógica para aumentar a dificuldade
    return 'medium'; // Padrão para médio por enquanto
}

// Embaralhar array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Event listeners
nextBtn.addEventListener('click', goToNextQuestion);
playAgainBtn.addEventListener('click', () => startGame(currentMode));
changeModeBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    modeSelection.classList.remove('hidden');
});