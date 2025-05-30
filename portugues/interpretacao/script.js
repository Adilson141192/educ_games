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
        },
        {
            id: 3,
            title: "O Passeio no Parque",
            content: "Ana e Lucas foram ao parque no domingo. Ana levou sua bicicleta azul e Lucas levou sua pipa. O dia estava ensolarado, e eles brincaram por horas. Ana ensinou Lucas a andar de bicicleta, e Lucas mostrou como empinar pipa. No final do dia, ambos estavam cansados mas felizes.",
            questions: [
                {
                    question: "O que Ana levou para o parque?",
                    options: [
                        "Uma pipa",
                        "Uma bicicleta azul",
                        "Um livro",
                        "Uma bola"
                    ],
                    correct: 1,
                    explanation: "O texto diz explicitamente que 'Ana levou sua bicicleta azul'."
                },
                {
                    question: "Como estava o dia no parque?",
                    options: [
                        "Chuvoso",
                        "Nublado",
                        "Ensolarado",
                        "Ventando muito"
                    ],
                    correct: 2,
                    explanation: "O texto menciona que 'O dia estava ensolarado'."
                }
            ],
            difficulty: "easy"
        },
        {
            id: 4,
            title: "A Descoberta Científica",
            content: "Os cientistas observaram que as borboletas da espécie Morpho possuem asas que refletem a luz de maneira especial. Essa característica não vem de pigmentos, mas da estrutura microscópica das asas, que interfere com a luz. Essa descoberta pode ajudar no desenvolvimento de novas tecnologias ópticas.",
            questions: [
                {
                    question: "Por que as asas da borboleta Morpho refletem luz de maneira especial?",
                    options: [
                        "Por causa de pigmentos especiais",
                        "Devido à estrutura microscópica das asas",
                        "Porque são molhadas pelo orvalho",
                        "Porque absorvem muita luz solar"
                    ],
                    correct: 1,
                    explanation: "O texto explica que 'Essa característica não vem de pigmentos, mas da estrutura microscópica das asas'."
                },
                {
                    question: "Qual pode ser a aplicação prática dessa descoberta?",
                    options: [
                        "Criação de novos insetos",
                        "Desenvolvimento de tecnologias ópticas",
                        "Produção de novos alimentos",
                        "Cura de doenças"
                    ],
                    correct: 1,
                    explanation: "O texto menciona que 'Essa descoberta pode ajudar no desenvolvimento de novas tecnologias ópticas'."
                }
            ],
            difficulty: "medium"
        },
        {
            id: 5,
            title: "A Crise Hídrica",
            content: "A escassez de água tem se agravado em diversas regiões do país. Especialistas apontam que o problema decorre de fatores como desmatamento, crescimento urbano desordenado e mudanças climáticas. A solução exigirá um conjunto de medidas: conscientização da população, investimento em infraestrutura e políticas públicas eficientes. Cada cidadão pode contribuir com ações simples, como reduzir o tempo no banho e reaproveitar água da chuva.",
            questions: [
                {
                    question: "Segundo o texto, qual NÃO é uma causa da crise hídrica?",
                    options: [
                        "Desmatamento",
                        "Crescimento urbano desordenado",
                        "Mudanças climáticas",
                        "Excesso de chuvas"
                    ],
                    correct: 3,
                    explanation: "O texto menciona desmatamento, crescimento urbano e mudanças climáticas como causas, mas não cita excesso de chuvas."
                },
                {
                    question: "Qual das alternativas apresenta uma medida que pode ser tomada pelo cidadão comum?",
                    options: [
                        "Criar novas políticas públicas",
                        "Investir em infraestrutura",
                        "Reduzir o tempo no banho",
                        "Controlar o desmatamento"
                    ],
                    correct: 2,
                    explanation: "O texto sugere que 'Cada cidadão pode contribuir com ações simples, como reduzir o tempo no banho'."
                },
                {
                    question: "O texto defende que a solução para a crise hídrica depende:",
                    options: [
                        "Apenas das autoridades",
                        "Apenas da população",
                        "De ações isoladas",
                        "De um conjunto de medidas"
                    ],
                    correct: 3,
                    explanation: "O texto afirma que 'A solução exigirá um conjunto de medidas', envolvendo vários atores."
                }
            ],
            difficulty: "hard"
        },
        {
            id: 6,
            title: "A Revolução Digital",
            content: "A transformação digital tem alterado profundamente as relações sociais e de trabalho. Enquanto facilita o acesso à informação e permite conexões globais, também traz desafios como a exclusão digital e a substituição de postos de trabalho por máquinas. O paradoxo está em como aproveitar os benefícios dessa revolução enquanto mitigamos seus efeitos negativos. A educação continuada surge como ferramenta fundamental para preparar os cidadãos nesse novo cenário.",
            questions: [
                {
                    question: "Qual é o paradoxo mencionado no texto sobre a revolução digital?",
                    options: [
                        "Ela cria empregos e destrói outros ao mesmo tempo",
                        "Facilita o acesso à informação mas causa exclusão digital",
                        "Conecta pessoas globalmente mas isola os indivíduos",
                        "Todas as alternativas anteriores"
                    ],
                    correct: 3,
                    explanation: "O texto menciona vários paradoxos, incluindo todos os listados nas opções."
                },
                {
                    question: "Qual é apontada como ferramenta fundamental para preparar os cidadãos?",
                    options: [
                        "A regulamentação governamental",
                        "A educação continuada",
                        "O afastamento da tecnologia",
                        "A redução do uso da internet"
                    ],
                    correct: 1,
                    explanation: "O texto afirma claramente que 'A educação continuada surge como ferramenta fundamental'."
                }
            ],
            difficulty: "hard"
        }
    ];

    // Sistema de pontuação por dificuldade
    const SCORE_VALUES = {
        easy: 10,
        medium: 20,
        hard: 30
    };

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
        playerName: '',
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
        rankingScreen: document.getElementById('ranking-screen'),
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
        currentRules: document.getElementById('current-rules'),
        playerNameContainer: document.getElementById('player-name-container'),
        playerNameInput: document.getElementById('player-name'),
        confirmNameButton: document.getElementById('confirm-name'),
        showRankingButton: document.getElementById('show-ranking'),
        rankingList: document.getElementById('ranking-list'),
        backFromRankingButton: document.getElementById('back-from-ranking')
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
            window.location.href = '../index.html'; // Alterado para voltar para o menu da disciplina
        });
        DOM.confirmNameButton.addEventListener('click', confirmPlayerName);
        DOM.showRankingButton.addEventListener('click', showRanking);
        DOM.backFromRankingButton.addEventListener('click', hideRanking);
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
        DOM.playerNameContainer.style.display = 'flex';
        DOM.startButton.style.display = 'none';
    }

    function confirmPlayerName() {
        const name = DOM.playerNameInput.value.trim();
        if (name.length < 2 || name.length > 15) {
            alert("Por favor, digite um nome entre 2 e 15 caracteres!");
            return;
        }
        
        gameState.playerName = name;
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
        
        // Calcula a pontuação final com multiplicador de dificuldade
        const finalScore = gameState.score * SCORE_VALUES[gameState.currentDifficulty];
        DOM.question.textContent = `Pontuação final: ${finalScore} pontos`;
        
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
        
        // Salva a pontuação no ranking
        saveScoreToRanking(finalScore);
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
        DOM.playerNameContainer.style.display = 'none';
        DOM.startButton.style.display = 'block';
        DOM.playerNameInput.value = '';
        clearInterval(gameState.timer);
    }

    // Sistema de Ranking
    function saveScoreToRanking(score) {
        const ranking = getRanking();
        
        ranking.push({
            name: gameState.playerName,
            score: score,
            difficulty: gameState.currentDifficulty,
            date: new Date().toISOString()
        });
        
        // Ordena por pontuação (maior primeiro)
        ranking.sort((a, b) => b.score - a.score);
        
        // Mantém apenas os top 10
        if (ranking.length > 10) {
            ranking.length = 10;
        }
        
        localStorage.setItem('textGameRanking', JSON.stringify(ranking));
    }

    function getRanking() {
        const ranking = localStorage.getItem('textGameRanking');
        return ranking ? JSON.parse(ranking) : [];
    }

    function showRanking() {
        DOM.startScreen.style.display = 'none';
        DOM.rankingScreen.style.display = 'block';
        renderRanking();
    }

    function hideRanking() {
        DOM.rankingScreen.style.display = 'none';
        DOM.startScreen.style.display = 'flex';
    }

    function renderRanking() {
        const ranking = getRanking();
        DOM.rankingList.innerHTML = '';
        
        if (ranking.length === 0) {
            DOM.rankingList.innerHTML = '<p>Nenhuma pontuação registrada ainda!</p>';
            return;
        }
        
        ranking.forEach((entry, index) => {
            const item = document.createElement('div');
            item.className = 'ranking-item';
            
            const difficultyClass = entry.difficulty === 'easy' ? 'easy' : 
                                  entry.difficulty === 'medium' ? 'medium' : 'hard';
            
            item.innerHTML = `
                <div class="ranking-position">${index + 1}º</div>
                <div class="ranking-name">${entry.name}</div>
                <div class="ranking-score">${entry.score} pts</div>
                <div class="ranking-difficulty ${difficultyClass}">${gameState.difficultySettings[entry.difficulty].name}</div>
            `;
            
            DOM.rankingList.appendChild(item);
        });
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