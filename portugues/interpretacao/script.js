document.addEventListener('DOMContentLoaded', function() {
    // Configuração do jogo
    const FALLBACK_TEXTS = [
        {
            id: 1,
            title: "A Cigarra e a Formiga",
            content: "Num belo dia de verão, a cigarra cantava alegremente enquanto a formiga trabalhava duro, armazenando comida para o inverno. A cigarra zombava da formiga, dizendo que ela deveria aproveitar o sol. Quando o inverno chegou, a cigarra, sem ter o que comer, pediu ajuda à formiga. A formiga respondeu: 'Enquanto eu trabalhava, você cantava. Agora dance!'",
            questions: [
                {
                    question: "Qual era a atitude da cigarra durante o verão?",
                    options: [
                        "Trabalhava muito armazenando comida",
                        "Cantava alegremente sem se preocupar",
                        "Ajudava a formiga no trabalho",
                        "Fazia planos para o inverno"
                    ],
                    correct: 1,
                    explanation: "O texto diz que a cigarra 'cantava alegremente' enquanto a formiga trabalhava."
                },
                {
                    question: "Qual foi a resposta da formiga quando a cigarra pediu ajuda?",
                    options: [
                        "Deu metade de sua comida para a cigarra",
                        "Disse que agora era a vez da cigarra dançar",
                        "Ensinou a cigarra a armazenar comida",
                        "Ignorou completamente a cigarra"
                    ],
                    correct: 1,
                    explanation: "A formiga respondeu: 'Enquanto eu trabalhava, você cantava. Agora dance!'"
                },
                {
                    question: "Qual é a moral desta fábula?",
                    options: [
                        "Devemos sempre ajudar os outros",
                        "É importante se preparar para o futuro",
                        "Cantar é tão importante quanto trabalhar",
                        "O inverno é uma estação difícil"
                    ],
                    correct: 1,
                    explanation: "A fábula ensina sobre a importância de se preparar para o futuro."
                }
            ],
            difficulty: "easy"
        },
        {
            id: 2,
            title: "O Leão e o Rato",
            content: "Um leão dormia quando um rato começou a correr sobre seu corpo. Acordando, o leão pegou o rato com suas patas e estava prestes a matá-lo, quando o rato suplicou: 'Se me soltares, te pagarei com minha gratidão'. O leão riu e soltou o rato. Tempos depois, o leão ficou preso numa rede de caçadores. Ouvindo seus rugidos, o rato apareceu e roeu as cordas da rede, libertando o leão.",
            questions: [
                {
                    question: "Por que o leão soltou o rato inicialmente?",
                    options: [
                        "Porque achou graça no pedido do rato",
                        "Porque não gostava de comer ratos",
                        "Porque o rato prometeu ajudá-lo depois",
                        "Porque estava com sono"
                    ],
                    correct: 0,
                    explanation: "O texto diz que 'o leão riu e soltou o rato'."
                },
                {
                    question: "Como o rato ajudou o leão depois?",
                    options: [
                        "Trouxe comida para o leão",
                        "Roceu as cordas da rede que prendia o leão",
                        "Chamou outros animais para ajudar",
                        "Avisou os outros leões"
                    ],
                    correct: 1,
                    explanation: "O texto diz que o rato 'roeu as cordas da rede, libertando o leão'."
                },
                {
                    question: "Qual é a moral desta fábula?",
                    options: [
                        "Os pequenos podem ajudar os grandes",
                        "Não devemos subestimar os outros",
                        "A gratidão é importante",
                        "Todas as alternativas anteriores"
                    ],
                    correct: 3,
                    explanation: "A fábula ensina várias lições, incluindo todas as opções apresentadas."
                }
            ],
            difficulty: "medium"
        }
    ];

    // Estado do jogo
    const gameState = {
        texts: [...FALLBACK_TEXTS],
        currentText: null,
        currentQuestionIndex: 0,
        score: 0,
        timeLeft: 60,
        timer: null,
        isActive: false,
        totalQuestions: 0,
        currentDifficulty: 'easy',
        difficultySettings: {
            easy: {
                name: "Fácil",
                time: 60,
                rules: "Textos curtos com perguntas diretas"
            },
            medium: {
                name: "Médio",
                time: 45,
                rules: "Textos médios com perguntas interpretativas"
            },
            hard: {
                name: "Difícil",
                time: 30,
                rules: "Textos longos com perguntas complexas"
            }
        }
    };

    // Elementos DOM
    const DOM = {
        startScreen: document.getElementById('start-screen'),
        gameScreen: document.getElementById('game-screen'),
        startButton: document.getElementById('start-button'),
        difficultySelector: document.getElementById('difficulty-selector'),
        difficultyButtons: document.querySelectorAll('.difficulty-btn'),
        textContent: document.getElementById('text-content'),
        question: document.getElementById('question'),
        options: document.getElementById('options'),
        timer: document.getElementById('timer'),
        timerText: document.querySelector('#timer span'),
        score: document.querySelector('#score span'),
        questionCounter: document.querySelector('#question-counter span'),
        feedback: document.getElementById('feedback'),
        animationContainer: document.getElementById('animation-container'),
        backButton: document.getElementById('back-to-menu'),
        backToMainButton: document.getElementById('back-to-main'),
        difficultyIndicator: document.getElementById('difficulty-indicator'),
        timePerQuestion: document.getElementById('time-per-question'),
        currentLevel: document.getElementById('current-level'),
        currentRules: document.getElementById('current-rules')
    };

    // Inicialização
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
        DOM.backButton.addEventListener('click', returnToMenu);
        DOM.backToMainButton.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    // Define a dificuldade do jogo
    function setDifficulty(level) {
        gameState.currentDifficulty = level;
        const settings = gameState.difficultySettings[level];

        DOM.difficultyButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });

        DOM.timePerQuestion.textContent = `${settings.time}s`;
        DOM.currentLevel.textContent = settings.name;
        DOM.currentRules.textContent = settings.rules;
        gameState.timeLeft = settings.time;
    }

    // Fluxo do jogo
    function startGame() {
        DOM.startScreen.style.display = 'none';
        DOM.gameScreen.style.display = 'block';
        DOM.backButton.classList.remove('hidden');
        DOM.backToMainButton.classList.add('hidden');
        resetGame();
        loadRandomText();
    }

    function resetGame() {
        gameState.score = 0;
        gameState.timeLeft = gameState.difficultySettings[gameState.currentDifficulty].time;
        gameState.isActive = true;
        gameState.currentQuestionIndex = 0;
        updateScore();
        updateTimerDisplay();
        clearFeedback();
    }

    // Carrega um texto aleatório
    function loadRandomText() {
        const filteredTexts = gameState.texts.filter(text => text.difficulty === gameState.currentDifficulty);
        const randomIndex = Math.floor(Math.random() * filteredTexts.length);
        gameState.currentText = filteredTexts[randomIndex] || gameState.texts[0];
        gameState.totalQuestions = gameState.currentText.questions.length;
        
        displayText();
        loadQuestion();
        startTimer();
    }

    function displayText() {
        DOM.textContent.textContent = gameState.currentText.content;
        updateQuestionCounter();
    }

    function loadQuestion() {
        if (!gameState.isActive || gameState.currentQuestionIndex >= gameState.totalQuestions) {
            endGame();
            return;
        }
        
        clearFeedback();
        const currentQuestion = gameState.currentText.questions[gameState.currentQuestionIndex];
        displayQuestion(currentQuestion);
        createOptions(currentQuestion);
    }

    function displayQuestion(question) {
        DOM.question.textContent = question.question;
    }

    function createOptions(question) {
        DOM.options.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.addEventListener('click', () => handleAnswer(index === question.correct, question.explanation));
            DOM.options.appendChild(button);
        });
    }

    // Manipulação de respostas
    function handleAnswer(isCorrect, explanation) {
        if (!gameState.isActive) return;
        
        clearInterval(gameState.timer);
        
        if (isCorrect) {
            handleCorrect(explanation);
        } else {
            handleIncorrect(explanation);
        }
        
        prepareNextQuestion();
    }

    function handleCorrect(explanation) {
        gameState.score++;
        updateScore();
        showFeedback(`✅ Correto! ${explanation}`, 'correct');
        createAnimation('🎉', '#4CAF50');
    }

    function handleIncorrect(explanation) {
        showFeedback(`❌ Incorreto! ${explanation}`, 'incorrect');
        createAnimation('💥', '#f44336');
    }

    function prepareNextQuestion() {
        setTimeout(() => {
            gameState.currentQuestionIndex++;
            gameState.timeLeft = gameState.difficultySettings[gameState.currentDifficulty].time;
            updateTimerDisplay();
            
            if (gameState.currentQuestionIndex < gameState.totalQuestions) {
                loadQuestion();
                startTimer();
            } else {
                endGame();
            }
        }, 2000);
    }

    // Temporizador
    function startTimer() {
        clearInterval(gameState.timer);
        updateTimerDisplay();
        
        gameState.timer = setInterval(() => {
            gameState.timeLeft--;
            updateTimerDisplay();
            
            if (gameState.timeLeft <= 0) {
                handleTimeOut();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        DOM.timerText.textContent = `${gameState.timeLeft}s`;
        
        DOM.timer.className = 'game-timer';
        if (gameState.timeLeft <= 15) {
            DOM.timer.classList.add('warning');
        }
        if (gameState.timeLeft <= 5) {
            DOM.timer.classList.remove('warning');
            DOM.timer.classList.add('critical');
        }
    }

    function handleTimeOut() {
        clearInterval(gameState.timer);
        showFeedback("⏰ Tempo esgotado! Vamos para a próxima pergunta.", 'incorrect');
        prepareNextQuestion();
    }

    // Animação e feedback
    function createAnimation(emoji, color) {
        const anim = document.createElement('div');
        anim.className = 'emoji-animation';
        anim.textContent = emoji;
        anim.style.color = color;
        anim.style.left = `${Math.random() * 70 + 15}%`;
        DOM.animationContainer.appendChild(anim);
        
        setTimeout(() => anim.remove(), 1000);
    }

    function showFeedback(message, type) {
        DOM.feedback.textContent = message;
        DOM.feedback.className = `feedback-card ${type}`;
    }

    function clearFeedback() {
        DOM.feedback.textContent = '';
        DOM.feedback.className = 'feedback-card';
    }

    // Finalização
    function endGame() {
        gameState.isActive = false;
        clearInterval(gameState.timer);
        showFinalResults();
    }

    function showFinalResults() {
        DOM.textContent.textContent = `Fim do texto: ${gameState.currentText.title}`;
        DOM.question.textContent = `Pontuação final: ${gameState.score}/${gameState.totalQuestions}`;
        DOM.options.innerHTML = '';
        
        const percentage = (gameState.score / gameState.totalQuestions) * 100;
        let message, className;
        
        if (percentage >= 90) {
            message = '🎉 Excelente! Compreensão textual perfeita!';
            className = 'correct';
        } else if (percentage >= 60) {
            message = '👍 Bom trabalho! Continue praticando!';
            className = 'correct';
        } else {
            message = '📚 Leia com mais atenção e tente novamente!';
            className = 'incorrect';
        }
        
        showFeedback(message, className);
        createRestartButton();
    }

    function createRestartButton() {
        const button = document.createElement('button');
        button.className = 'restart';
        button.innerHTML = '<i class="fas fa-redo"></i> Jogar Novamente';
        button.addEventListener('click', returnToMenu);
        DOM.options.appendChild(button);
    }

    // Volta ao menu
    function returnToMenu() {
        DOM.gameScreen.style.display = 'none';
        DOM.startScreen.style.display = 'flex';
        DOM.backButton.classList.add('hidden');
        DOM.backToMainButton.classList.remove('hidden');
        clearInterval(gameState.timer);
    }

    // Utilitários
    function updateScore() {
        DOM.score.textContent = gameState.score;
    }

    function updateQuestionCounter() {
        DOM.questionCounter.textContent = `${gameState.currentQuestionIndex + 1}/${gameState.totalQuestions}`;
    }

    // Iniciar o jogo
    init();
});