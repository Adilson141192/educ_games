document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const startBtn = document.getElementById('start-btn');
    const playerNameInput = document.getElementById('player-name');
    const difficultySelect = document.getElementById('difficulty');
    const rankingList = document.getElementById('ranking-list');
    const currentPlayerEl = document.getElementById('current-player');
    const currentLevelEl = document.getElementById('current-level');
    
    // Variáveis do jogo
    let score = 0;
    let currentQuestion = 1;
    const totalQuestions = 10;
    let correctAnswer;
    let playerName = '';
    let difficulty = 3;
    const difficultyLevels = {
        1: { name: "Muito Fácil", maxNumber: 10, operations: ['+', '-'] },
        2: { name: "Fácil", maxNumber: 15, operations: ['+', '-', '*'] },
        3: { name: "Médio", maxNumber: 20, operations: ['+', '-', '*', '/'] },
        4: { name: "Difícil", maxNumber: 30, operations: ['*', '/'] },
        5: { name: "Muito Difícil", maxNumber: 50, operations: ['*', '/'], allowDecimals: true }
    };
    
    // Inicializar ranking
    loadRanking();
    
    // Evento para iniciar o jogo
    startBtn.addEventListener('click', function() {
        if (!playerNameInput.value.trim()) {
            alert('Por favor, digite seu nome!');
            return;
        }
        
        playerName = playerNameInput.value.trim();
        difficulty = parseInt(difficultySelect.value);
        
        currentPlayerEl.textContent = playerName;
        currentLevelEl.textContent = difficultyLevels[difficulty].name;
        
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        
        // Reiniciar jogo
        score = 0;
        currentQuestion = 1;
        document.getElementById('score').textContent = score;
        document.getElementById('question-count').textContent = currentQuestion;
        
        generateQuestion();
    });
    
    // Gerar uma nova pergunta
    function generateQuestion() {
        if (currentQuestion > totalQuestions) {
            endGame();
            return;
        }
        
        // Atualizar contador
        document.getElementById('question-count').textContent = currentQuestion;
        
        // Limpar feedback
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
        document.getElementById('next').style.display = 'none';
        
        // Configurações baseadas na dificuldade
        const levelConfig = difficultyLevels[difficulty];
        const maxNumber = levelConfig.maxNumber;
        const operations = levelConfig.operations;
        const allowDecimals = levelConfig.allowDecimals || false;
        
        // Gerar números aleatórios
        let num1 = Math.floor(Math.random() * maxNumber) + 1;
        let num2 = Math.floor(Math.random() * maxNumber) + 1;
        
        // Escolher operação aleatória
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        // Ajustar para divisão
        if (operation === '/') {
            if (!allowDecimals) {
                // Garantir divisão inteira
                const factors = [];
                for (let i = 1; i <= num1; i++) {
                    if (num1 % i === 0) factors.push(i);
                }
                num2 = factors[Math.floor(Math.random() * factors.length)] || 1;
            } else {
                // Permitir decimais
                num1 = Math.floor(Math.random() * maxNumber * 2) + 1;
                num2 = Math.floor(Math.random() * maxNumber) + 1;
            }
        }
        
        // Calcular resposta correta
        let correctResult;
        switch (operation) {
            case '+':
                correctResult = num1 + num2;
                break;
            case '-':
                correctResult = num1 - num2;
                break;
            case '*':
                correctResult = num1 * num2;
                break;
            case '/':
                correctResult = num1 / num2;
                // Arredondar para 2 casas decimais se permitido
                if (allowDecimals) {
                    correctResult = Math.round(correctResult * 100) / 100;
                }
                break;
        }
        
        // Mostrar a pergunta
        document.getElementById('question').textContent = `Quanto é ${num1} ${operation} ${num2}?`;
        correctAnswer = correctResult;
        
        // Gerar opções de resposta
        const options = [correctResult];
        
        // Gerar respostas incorretas
        while (options.length < 4) {
            let wrongAnswer;
            const variation = Math.floor(Math.random() * (difficulty * 2)) + 1;
            
            // Gerar respostas próximas, mas erradas
            if (Math.random() > 0.5) {
                wrongAnswer = correctResult + variation;
            } else {
                wrongAnswer = correctResult - variation;
            }
            
            // Para níveis com decimais
            if (allowDecimals) {
                wrongAnswer = Math.round(wrongAnswer * 100) / 100;
            }
            
            // Evitar respostas duplicadas e negativas
            if (!options.includes(wrongAnswer)) {
                if (!allowDecimals && wrongAnswer > 0 && Number.isInteger(wrongAnswer)) {
                    options.push(wrongAnswer);
                } else if (allowDecimals) {
                    options.push(wrongAnswer);
                }
            }
        }
        
        // Embaralhar opções
        options.sort(() => Math.random() - 0.5);
        
        // Mostrar opções
        const optionsEl = document.getElementById('options');
        optionsEl.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsEl.appendChild(button);
        });
    }
    
    // Verificar resposta
    function checkAnswer(selectedAnswer) {
        const buttons = document.getElementById('options').querySelectorAll('button');
        const feedbackEl = document.getElementById('feedback');
        
        buttons.forEach(button => {
            button.disabled = true;
            const buttonValue = parseFloat(button.textContent);
            
            if (buttonValue === correctAnswer) {
                button.classList.add('correct');
            } else if (parseFloat(selectedAnswer) === buttonValue && buttonValue !== correctAnswer) {
                button.classList.add('incorrect');
            }
        });
        
        if (parseFloat(selectedAnswer) === correctAnswer) {
            feedbackEl.textContent = 'Resposta Correta! 👍';
            feedbackEl.className = 'feedback correct';
            score += difficulty; // Pontuação baseada na dificuldade
            document.getElementById('score').textContent = score;
        } else {
            feedbackEl.textContent = `Resposta Incorreta! A resposta correta é ${correctAnswer}.`;
            feedbackEl.className = 'feedback incorrect';
        }
        
        document.getElementById('next').style.display = 'block';
        currentQuestion++;
    }
    
    // Finalizar jogo
    function endGame() {
        const questionEl = document.getElementById('question');
        const optionsEl = document.getElementById('options');
        const feedbackEl = document.getElementById('feedback');
        const nextBtn = document.getElementById('next');
        
        questionEl.textContent = `Fim do Jogo, ${playerName}! Sua pontuação final: ${score}`;
        optionsEl.innerHTML = '';
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        
        // Salvar pontuação no ranking
        saveScore(playerName, score, difficultyLevels[difficulty].name);
        
        // Adicionar botão para jogar novamente
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Jogar Novamente';
        restartBtn.className = 'btn-jogar';
        restartBtn.addEventListener('click', () => {
            gameScreen.style.display = 'none';
            startScreen.style.display = 'block';
            loadRanking();
        });
        
        optionsEl.appendChild(restartBtn);
    }
    
    // Salvar pontuação no localStorage
    function saveScore(name, score, level) {
        let ranking = JSON.parse(localStorage.getItem('mathQuizRanking')) || [];
        
        // Adicionar nova pontuação
        ranking.push({
            name: name,
            score: score,
            level: level,
            date: new Date().toLocaleDateString()
        });
        
        // Ordenar por pontuação (maior primeiro)
        ranking.sort((a, b) => b.score - a.score);
        
        // Manter apenas as top 10 pontuações
        if (ranking.length > 10) {
            ranking = ranking.slice(0, 10);
        }
        
        localStorage.setItem('mathQuizRanking', JSON.stringify(ranking));
    }
    
    // Carregar ranking do localStorage
    function loadRanking() {
        const ranking = JSON.parse(localStorage.getItem('mathQuizRanking')) || [];
        rankingList.innerHTML = '';
        
        if (ranking.length === 0) {
            rankingList.innerHTML = '<p>Nenhuma pontuação registrada ainda.</p>';
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
            
            rankingList.appendChild(rankingItem);
        });
    }
    
    // Evento para próxima pergunta
    document.getElementById('next').addEventListener('click', generateQuestion);
});