document.addEventListener('DOMContentLoaded', function() {
    // Cache de elementos DOM
    const dom = {
        startScreen: document.getElementById('start-screen'),
        gameScreen: document.getElementById('game-screen'),
        startBtn: document.getElementById('start-btn'),
        playerName: document.getElementById('player-name'),
        difficulty: document.getElementById('difficulty'),
        rankingList: document.getElementById('ranking-list'),
        currentPlayer: document.getElementById('current-player'),
        currentLevel: document.getElementById('current-level'),
        questionEl: document.getElementById('question'),
        optionsEl: document.getElementById('options'),
        feedbackEl: document.getElementById('feedback'),
        scoreEl: document.getElementById('score'),
        questionCount: document.getElementById('question-count'),
        nextBtn: document.getElementById('next')
    };

    // Configurações do jogo
    const config = {
        totalQuestions: 10,
        difficultyLevels: {
            1: { name: "Muito Fácil", maxNumber: 10, operations: ['+', '-'] },
            2: { name: "Fácil", maxNumber: 15, operations: ['+', '-', '*'] },
            3: { name: "Médio", maxNumber: 20, operations: ['+', '-', '*', '/'] },
            4: { name: "Difícil", maxNumber: 30, operations: ['*', '/'] },
            5: { name: "Muito Difícil", maxNumber: 50, operations: ['*', '/'], allowDecimals: true }
        }
    };

    // Estado do jogo
    const state = {
        score: 0,
        currentQuestion: 0, // Alterado para começar em 0
        correctAnswer: null,
        playerName: '',
        difficulty: 3
    };

    // Inicialização
    init();

    function init() {
        loadRanking();
        setupEventListeners();
    }

    function setupEventListeners() {
        dom.startBtn.addEventListener('click', startGame);
        dom.nextBtn.addEventListener('click', generateQuestion);
    }

    function startGame() {
        if (!dom.playerName.value.trim()) {
            alert('Por favor, digite seu nome!');
            return;
        }

        // Configurar estado inicial
        state.playerName = dom.playerName.value.trim();
        state.difficulty = parseInt(dom.difficulty.value);
        state.score = 0;
        state.currentQuestion = 0; // Começa em 0 agora

        // Atualizar UI
        dom.currentPlayer.textContent = state.playerName;
        dom.currentLevel.textContent = config.difficultyLevels[state.difficulty].name;
        dom.scoreEl.textContent = state.score;
        dom.questionCount.textContent = state.currentQuestion + 1; // Mostra como 1-based

        // Mostrar tela do jogo
        dom.startScreen.style.display = 'none';
        dom.gameScreen.style.display = 'block';

        // Gerar primeira pergunta
        generateQuestion();
    }

    function generateQuestion() {
        // Incrementa o contador primeiro
        state.currentQuestion++;
        
        if (state.currentQuestion > config.totalQuestions) {
            endGame();
            return;
        }

        // Atualizar contador (mostrado como 1-based)
        dom.questionCount.textContent = state.currentQuestion;

        // Limpar estado anterior
        clearPreviousQuestion();

        // Gerar nova pergunta
        const question = createQuestion();
        if (question) {
            displayQuestion(question);
        } else {
// Se não conseguiu gerar uma pergunta válida, tenta novamente
            state.currentQuestion--;
            generateQuestion();
        }
    }

    function clearPreviousQuestion() {
        dom.feedbackEl.textContent = '';
        dom.feedbackEl.className = 'feedback';
        dom.nextBtn.style.display = 'none';
        dom.optionsEl.innerHTML = '';
    }

    function createQuestion() {
        const level = config.difficultyLevels[state.difficulty];
        const operation = level.operations[Math.floor(Math.random() * level.operations.length)];
        
        let num1, num2, correctAnswer;
        let attempts = 0;
        const maxAttempts = 10;
        
        // Tentar gerar uma pergunta válida
        while (attempts < maxAttempts) {
            attempts++;
            
            // Gerar números baseados na dificuldade
            if (operation === '/' && !level.allowDecimals) {
                num1 = Math.floor(Math.random() * level.maxNumber) + 1;
                const factors = getFactors(num1);
                num2 = factors[Math.floor(Math.random() * factors.length)] || 1;
                if (num2 === 0) continue; // Evita divisão por zero
                correctAnswer = num1 / num2;
            } else if (operation === '/' && level.allowDecimals) {
                num1 = Math.floor(Math.random() * level.maxNumber * 2) + 1;
                num2 = Math.floor(Math.random() * level.maxNumber) + 1;
                if (num2 === 0) continue; // Evita divisão por zero
                correctAnswer = parseFloat((num1 / num2).toFixed(2));
            } else {
                num1 = Math.floor(Math.random() * level.maxNumber) + 1;
                num2 = Math.floor(Math.random() * level.maxNumber) + 1;
                
                switch(operation) {
                    case '+': correctAnswer = num1 + num2; break;
                    case '-': correctAnswer = num1 - num2; break;
                    case '*': correctAnswer = num1 * num2; break;
                }
            }

        // Gerar opções de resposta
            const options = generateOptions(correctAnswer, level.allowDecimals);
            
            if (options.length === 4) {
                return {
                    text: `Quanto é ${num1} ${operation} ${num2}?`,
                    correctAnswer,
                    options
                };
            }
        }
        
        return null; // Não conseguiu gerar uma pergunta válida
    }

     function getFactors(number) {
        const factors = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) factors.push(i);
        }
        return factors;
    }

    function generateOptions(correctAnswer, allowDecimals) {
        const options = [correctAnswer];
        const usedValues = new Set([correctAnswer]);
        let attempts = 0;
        const maxAttempts = 20;

        while (options.length < 4 && attempts < maxAttempts) {
            attempts++;
            
            let variation;
            if (allowDecimals) {
                variation = (Math.random() * 5) + 1;
            } else {
                variation = Math.floor(Math.random() * 5) + 1;
            }
            
            let wrongAnswer = Math.random() > 0.5 
                ? correctAnswer + variation 
                : correctAnswer - variation;

            if (allowDecimals) {
                wrongAnswer = parseFloat(wrongAnswer.toFixed(2));
            } else {
                wrongAnswer = Math.round(wrongAnswer);
            }

            // Garante que a resposta errada é positiva e não repetida
            if (!usedValues.has(wrongAnswer) && (allowDecimals || wrongAnswer > 0)) {
                options.push(wrongAnswer);
                usedValues.add(wrongAnswer);
            }
        }

        // Se não conseguiu gerar opções suficientes, completa com valores padrão
        while (options.length < 4) {
            let value = options[0] + options.length;
            if (allowDecimals) {
                value = parseFloat(value.toFixed(2));
            }
            if (!usedValues.has(value)) {
                options.push(value);
                usedValues.add(value);
            }
        }

        return options.sort(() => Math.random() - 0.5);
    }

    function displayQuestion(question) {
        dom.questionEl.textContent = question.text;
        state.correctAnswer = question.correctAnswer;

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            dom.optionsEl.appendChild(button);
        });
    }

    function checkAnswer(selectedAnswer) {
        const buttons = dom.optionsEl.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.disabled = true;
            const buttonValue = parseFloat(button.textContent);
            
            // Comparação segura para números decimais
            if (Math.abs(buttonValue - state.correctAnswer) < 0.001) {
                button.classList.add('correct');
            } else if (Math.abs(parseFloat(selectedAnswer) - buttonValue) < 0.001) {
                button.classList.add('incorrect');
            }
        });

        if (Math.abs(parseFloat(selectedAnswer) - state.correctAnswer) < 0.001) {
            dom.feedbackEl.textContent = 'Resposta Correta! 👍';
            dom.feedbackEl.className = 'feedback correct';
            state.score += state.difficulty;
            dom.scoreEl.textContent = state.score;
        } else {
            dom.feedbackEl.textContent = `Resposta Incorreta! A resposta correta é ${state.correctAnswer}.`;
            dom.feedbackEl.className = 'feedback incorrect';
        }

        dom.nextBtn.style.display = 'block';
    }

    function endGame() {
        dom.questionEl.textContent = `Fim do Jogo, ${state.playerName}! Sua pontuação final: ${state.score}`;
        dom.optionsEl.innerHTML = '';
        dom.feedbackEl.textContent = '';
        dom.nextBtn.style.display = 'none';

        saveScore();
        showRestartButton();
    }

    function saveScore() {
        let ranking = JSON.parse(localStorage.getItem('mathQuizRanking')) || [];
        
        ranking.push({
            name: state.playerName,
            score: state.score,
            level: config.difficultyLevels[state.difficulty].name,
            date: new Date().toLocaleDateString()
        });

        ranking.sort((a, b) => b.score - a.score);
        ranking = ranking.slice(0, 10);
        
        localStorage.setItem('mathQuizRanking', JSON.stringify(ranking));
    }

    function showRestartButton() {
        const button = document.createElement('button');
        button.textContent = 'Jogar Novamente';
        button.className = 'btn-jogar';
        button.addEventListener('click', () => {
            dom.gameScreen.style.display = 'none';
            dom.startScreen.style.display = 'block';
            loadRanking();
        });
        dom.optionsEl.appendChild(button);
    }

    function loadRanking() {
        const ranking = JSON.parse(localStorage.getItem('mathQuizRanking')) || [];
        dom.rankingList.innerHTML = '';

        if (ranking.length === 0) {
            dom.rankingList.innerHTML = '<p>Nenhuma pontuação registrada ainda.</p>';
            return;
        }

        ranking.forEach((item, index) => {
            const rankingItem = document.createElement('div');
            rankingItem.className = 'ranking-item';
            rankingItem.innerHTML = `
                <span class="ranking-position">${index + 1}º</span>
                <span class="ranking-name">${item.name}</span>
                <span class="ranking-score">${item.score} pts</span>
                <span class="ranking-level">${item.level}</span>
            `;
            dom.rankingList.appendChild(rankingItem);
        });
    }
});