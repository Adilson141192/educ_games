const App = {
    init() {
        this.elements = {
            menu: document.getElementById('menu'),
            config: document.getElementById('config'),
            game: document.getElementById('game'),
            ranking: document.getElementById('ranking'),
            question: document.getElementById('question'),
            answerForm: document.getElementById('answerForm'),
            answerInput: document.getElementById('answerInput'),
            progress: document.getElementById('progress'),
            extraCount: document.getElementById('extraCount'),
            extraQuestions: document.getElementById('extraQuestions'),
            timer: document.getElementById('timer'),
            feedback: document.getElementById('feedback'),
            quitTrainingBtn: document.getElementById('quitTrainingBtn'),
            rankingBody: document.getElementById('rankingBody'),
            correctSound: document.getElementById('correctSound'),
            wrongSound: document.getElementById('wrongSound')
        };

        this.elements.answerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkAnswer();
        });

        this.resetGame();
    },

    showConfig() {
        this.elements.menu.classList.add('hidden');
        this.elements.config.classList.remove('hidden');
        this.isTraining = false;
    },

    showRanking() {
        this.elements.menu.classList.add('hidden');
        this.elements.ranking.classList.remove('hidden');
        this.renderRanking();
    },

    backToMenu() {
        this.elements.config.classList.add('hidden');
        this.elements.game.classList.add('hidden');
        this.elements.ranking.classList.add('hidden');
        this.elements.menu.classList.remove('hidden');
        this.resetGame();
    },

    startGame() {
        const nameInput = document.getElementById('playerName');
        this.playerName = nameInput.value.trim();
        if (!this.playerName) {
            alert('Por favor, digite seu nome.');
            nameInput.focus();
            return;
        }

        this.difficulty = document.getElementById('level').value;
        this.selectedOps = Array.from(
            document.querySelectorAll('#config input[type=checkbox]:checked')
        ).map(cb => cb.value);
        this.showHelp = document.getElementById('helpCheckbox').checked;
        this.isTraining = false;

        this.elements.config.classList.add('hidden');
        this.elements.game.classList.remove('hidden');
        this.elements.quitTrainingBtn.classList.add('hidden');

        this.resetGame();
        this.generateQuestion();
    },

    startTraining() {
        this.playerName = 'Treino';
        this.difficulty = 'easy';
        this.selectedOps = ['+', '-', '×', '÷'];
        this.showHelp = true;
        this.isTraining = true;

        this.elements.quitTrainingBtn.classList.remove('hidden');
        this.elements.menu.classList.add('hidden');
        this.elements.game.classList.remove('hidden');

        this.resetGame();
        this.generateQuestion();
    },

    resetGame() {
        this.questionIndex = 0;
        this.totalTime = 0;
        this.errorCount = 0;
        this.score = 0;
        this.extraQuestionCount = 0;
        this.currentAnswer = 0;
        clearInterval(this.timerInterval);
        clearTimeout(this.questionTimeout);
    },

    generateQuestion() {
        if (this.questionTimeout) clearTimeout(this.questionTimeout);

        // Configura a interface
        this.elements.progress.style.visibility = this.isTraining ? 'hidden' : 'visible';
        
        if (this.extraQuestionCount > 0) {
            this.elements.extraCount.textContent = this.extraQuestionCount;
            this.elements.extraQuestions.classList.remove('hidden');
            this.elements.progress.textContent = `Questão Extra (${this.extraQuestionCount})`;
        } else {
            this.elements.extraQuestions.classList.add('hidden');
            if (!this.isTraining) this.questionIndex++;
            if (!this.isTraining) {
                this.elements.progress.textContent = `Questão ${this.questionIndex} / 20`;
            }
        }

        // Verifica e corrige operações selecionadas
        if (this.selectedOps.length === 0) {
            this.selectedOps = ['+'];
        }

        // Garante que todas as operações são válidas
        const validOps = ['+', '-', '×', '÷'];
        this.selectedOps = this.selectedOps.filter(op => validOps.includes(op));
        if (this.selectedOps.length === 0) {
            this.selectedOps = ['+'];
        }

        // Gera a questão
        const op = this.selectedOps[this.randomInt(0, this.selectedOps.length - 1)];
        let a, b, max;
        
        // Define o valor máximo baseado na dificuldade
        switch (this.difficulty) {
            case 'veryeasy': max = 5; break;
            case 'easy': max = 10; break;
            case 'medium': max = 20; break;
            case 'hard': max = 50; break;
            case 'veryhard': max = 100; break;
            default: max = 10; // fallback
        }

        // Gera números baseados na operação
        let attempts = 0;
        const maxAttempts = 10;
        
        do {
            attempts++;
            switch (op) {
                case '+':
                    a = this.randomInt(1, max);
                    b = this.randomInt(1, max);
                    this.currentAnswer = a + b;
                    break;
                    
                case '-':
                    a = this.randomInt(2, max);
                    b = this.randomInt(1, a);
                    this.currentAnswer = a - b;
                    break;
                    
                case '×':
                    a = this.randomInt(1, Math.min(10, max));
                    b = this.randomInt(1, Math.min(10, Math.floor(max / a)));
                    this.currentAnswer = a * b;
                    break;
                    
                case '÷':
                    b = this.randomInt(1, Math.min(10, max));
                    this.currentAnswer = this.randomInt(1, Math.min(10, Math.floor(max / b)));
                    a = this.currentAnswer * b;
                    break;
            }
            
            // Garante que temos números válidos
            if (a !== undefined && b !== undefined && this.currentAnswer !== undefined) {
                break;
            }
            
        } while (attempts < maxAttempts);

        // Fallback caso algo dê errado
        if (a === undefined || b === undefined) {
            a = 2;
            b = 2;
            op = '+';
            this.currentAnswer = 4;
        }

        this.elements.question.textContent = `${a} ${op} ${b} = ?`;
        this.elements.answerInput.value = '';
        this.elements.answerInput.focus();
        this.startTimer();

        this.questionTimeout = setTimeout(() => this.handleTimeout(), 30000);
    },

    startTimer() {
        this.startTime = performance.now();
        this.timerInterval = setInterval(() => {
            const elapsed = (performance.now() - this.startTime) / 1000;
            this.elements.timer.textContent = `${elapsed.toFixed(1)} s`;
        }, 100);
    },

    stopTimer() {
        clearInterval(this.timerInterval);
        const delta = (performance.now() - this.startTime) / 1000;
        this.totalTime += delta;
        this.elements.timer.textContent = `${delta.toFixed(1)} s`;
    },

    checkAnswer() {
        const userValue = Number(this.elements.answerInput.value);
        const correct = userValue === this.currentAnswer;

        this.stopTimer();
        clearTimeout(this.questionTimeout);
        this.showFeedback(correct);

        if (correct) {
            if (!this.isTraining) {
                this.score += this.getScoreByDifficulty(this.difficulty);
            }

            if (this.extraQuestionCount > 0) {
                this.extraQuestionCount--;
                setTimeout(() => this.generateQuestion(), 800);
            } else if (!this.isTraining && this.questionIndex >= 20) {
                setTimeout(() => this.finishGame(), 500);
            } else {
                setTimeout(() => this.generateQuestion(), 800);
            }
        } else {
            this.errorCount++;
            if (this.extraQuestionCount === 0) {
                this.extraQuestionCount = 1;
            }
            this.elements.answerInput.value = '';
            setTimeout(() => this.elements.answerInput.focus(), 800);
        }
    },

    showFeedback(isCorrect) {
        const feedbackEl = this.elements.feedback;
        feedbackEl.innerHTML = isCorrect ? '<div>🎉</div>' : '<div>😢</div>';
        feedbackEl.className = isCorrect ? 'happy' : 'sad';
        (isCorrect ? this.elements.correctSound : this.elements.wrongSound).play();

        if (!isCorrect && this.showHelp) {
            const helpDiv = document.createElement('div');
            helpDiv.className = 'help';
            helpDiv.innerHTML = `Resposta correta: <strong>${this.currentAnswer}</strong>`;
            feedbackEl.appendChild(helpDiv);
        }

        setTimeout(() => {
            feedbackEl.className = '';
            feedbackEl.innerHTML = '';
        }, isCorrect ? 800 : 2000);
    },

    handleTimeout() {
        this.stopTimer();
        this.showFeedback(false);
        this.errorCount++;

        if (this.extraQuestionCount === 0) {
            this.extraQuestionCount++;
        }
        setTimeout(() => this.generateQuestion(), 2000);
    },

    finishGame() {
        if (!this.isTraining) {
            this.saveScore();
        }

        alert(`${this.isTraining ? 'Fim do treino!' : 'Parabéns, ' + this.playerName + '!'}
Tempo total: ${this.totalTime.toFixed(1)} s
Erros: ${this.errorCount}
${this.isTraining ? '' : 'Pontuação: ' + this.score}`);

        this.backToMenu();
    },

    saveScore() {
        const data = {
            name: this.playerName,
            difficulty: this.difficulty,
            time: parseFloat(this.totalTime.toFixed(1)),
            errors: this.errorCount,
            score: this.score
        };

        let rankings = JSON.parse(localStorage.getItem('rankings') || '[]');
        rankings.push(data);
        
        rankings.sort((a, b) => b.score - a.score || a.time - b.time || a.errors - b.errors);
        rankings = rankings.slice(0, 10);
        
        localStorage.setItem('rankings', JSON.stringify(rankings));
    },

    renderRanking() {
        const rankings = JSON.parse(localStorage.getItem('rankings') || '[]');
        
        this.elements.rankingBody.innerHTML = rankings.map(r => `
            <tr>
                <td>${r.name}</td>
                <td>${this.translateLevel(r.difficulty)}</td>
                <td>${r.time}</td>
                <td>${r.errors}</td>
                <td>${r.score}</td>
            </tr>
        `).join('') || '<tr><td colspan="5">Sem registros ainda.</td></tr>';
    },

    translateLevel(lvl) {
        switch (lvl) {
            case 'veryeasy': return 'Muito fácil';
            case 'easy': return 'Fácil';
            case 'medium': return 'Médio';
            case 'hard': return 'Difícil';
            case 'veryhard': return 'Muito difícil';
            default: return lvl;
        }
    },

    getScoreByDifficulty(lvl) {
        switch (lvl) {
            case 'veryeasy': return 1;
            case 'easy': return 2;
            case 'medium': return 3;
            case 'hard': return 4;
            case 'veryhard': return 5;
            default: return 0;
        }
    },

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

// Inicializa o jogo quando a página carrega
document.addEventListener('DOMContentLoaded', () => App.init());