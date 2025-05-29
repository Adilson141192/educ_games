/**
 * DESAFIO ORTOGRÁFICO - Jogo de Escolha de Grafia Correta
 * Versão melhorada com:
 * - Correção do carregamento de perguntas
 * - Melhor gerenciamento de estado
 * - Tratamento robusto de erros
 * - Código mais limpo e organizado
 */

// =============================================
// CONFIGURAÇÕES E CONSTANTES
// =============================================
const GAME_CONFIG = {
  totalQuestions: 10,
  localWordProbability: 0.8, // 80% de chance de usar palavras locais
  timeBonusDivisor: 5, // Divisor para cálculo do bônus por tempo restante
  answerDelay: 2000, // Tempo em ms para mostrar feedback antes de próxima pergunta
  transitionDuration: 500 // Tempo em ms para transições de tela
};

const DIFFICULTY_SETTINGS = {
  easy: {
    name: "Fácil",
    time: 60,
    rules: "Regras básicas (b/v, s/z, c/ç)",
    color: "var(--easy)"
  },
  medium: {
    name: "Médio",
    time: 45,
    rules: "Regras intermediárias (x/ch, ss/s, g/j)",
    color: "var(--medium)"
  },
  hard: {
    name: "Difícil",
    time: 30,
    rules: "Regras avançadas (pn, ps, mn, etc)",
    color: "var(--hard)"
  }
};

const FALLBACK_WORDS = {
  easy: [
    {
      word: "abrupto",
      phonetic: "/aˈbɾup.tu/",
      options: ["abrupto", "avrupto", "abruptu", "abrupta"],
      correct: 0,
      explanation: "A grafia correta é 'abrupto' (com 'b').",
      hint: "Palavras com 'b' antes de 'r' geralmente mantêm o 'b' (ex: abrir, abraço)."
    },
    {
      word: "advogado",
      phonetic: "/ad.voˈɡa.du/",
      options: ["advogado", "avogado", "adivogado", "advogadu"],
      correct: 0,
      explanation: "A grafia correta é 'advogado' (com 'd').",
      hint: "Palavras com prefixo 'ad-' mantêm o 'd' antes de consoantes (ex: adjetivo, advérbio)."
    },
    {
      word: "exceção",
      phonetic: "/e.seˈsɐ̃w̃/",
      options: ["exceção", "esseção", "eceção", "excessão"],
      correct: 0,
      explanation: "A grafia correta é 'exceção' (com 'x' e 'ç').",
      hint: "Palavras com prefixo 'ex-' seguido de 'c' mantêm o 'x' (ex: excesso, exceto)."
    }
  ],
  medium: [
    {
      word: "obscuro",
      phonetic: "/obsˈku.ɾu/",
      options: ["obscuro", "oscuro", "obscuru", "obscuro"],
      correct: 0,
      explanation: "A grafia correta é 'obscuro' (com 'b').",
      hint: "Palavras com 'b' antes de 'sc' mantêm o 'b' (ex: obsceno, obscuridade)."
    },
    {
      word: "excesso",
      phonetic: "/eˈsɛ.su/",
      options: ["excesso", "ecesso", "exsesso", "exceço"],
      correct: 0,
      explanation: "A grafia correta é 'excesso' (com 'x' e 'ss').",
      hint: "Palavras com 'x' seguido de 'c' mantêm essa grafia (ex: exceto, excelente)."
    }
  ],
  hard: [
    {
      word: "pneumonia",
      phonetic: "/pnew.mo.ˈni.a/",
      options: ["pneumonia", "neumonia", "pneumônia", "pneumonia"],
      correct: 0,
      explanation: "A grafia correta é 'pneumonia' (com 'pn' mudo no início).",
      hint: "Palavras de origem grega com 'pn' no início mantêm essa grafia (ex: pneumático, pneu)."
    },
    {
      word: "psicólogo",
      phonetic: "/psi.ˈkɔ.lo.gu/",
      options: ["psicólogo", "sicólogo", "psicológo", "psicologo"],
      correct: 0,
      explanation: "A grafia correta é 'psicólogo' (com 'ps' mudo no início).",
      hint: "Palavras de origem grega com 'ps' no início mantêm essa grafia (ex: psiquiatra, pseudônimo)."
    }
  ]
};

// =============================================
// ESTADO DO JOGO
// =============================================
const gameState = {
  words: { ...FALLBACK_WORDS },
  currentWord: null,
  currentQuestionIndex: 0,
  score: 0,
  timeLeft: DIFFICULTY_SETTINGS.easy.time,
  timer: null,
  isActive: false,
  currentDifficulty: 'easy',
  stats: {
    totalGames: 0,
    totalScore: 0,
    bestScore: 0,
    byDifficulty: {
      easy: { games: 0, best: 0, total: 0 },
      medium: { games: 0, best: 0, total: 0 },
      hard: { games: 0, best: 0, total: 0 }
    }
  },
  isTransitioning: false
};

// =============================================
// ELEMENTOS DO DOM
// =============================================
const DOM = {
  // Telas
  startScreen: document.getElementById('start-screen'),
  gameScreen: document.getElementById('game-screen'),
  
  // Elementos da tela inicial
  startButton: document.getElementById('start-button'),
  difficultyButtons: document.querySelectorAll('.difficulty-btn'),
  timePerQuestion: document.getElementById('time-per-question'),
  currentLevel: document.getElementById('current-level'),
  currentRules: document.getElementById('current-rules'),
  
  // Elementos do jogo
  word: document.getElementById('word'),
  phonetic: document.getElementById('phonetic'),
  options: document.getElementById('options'),
  timerText: document.querySelector('#timer span'),
  score: document.querySelector('#score span'),
  questionCounter: document.querySelector('#question-counter span'),
  feedback: document.getElementById('feedback'),
  hintButton: document.getElementById('hint-button'),
  hintContent: document.getElementById('hint-content'),
  difficultyIndicator: document.getElementById('difficulty-indicator'),
  
  // Botões de navegação
  backButton: document.getElementById('back-to-menu'),
  backToMainButton: document.getElementById('back-to-main')
};

// =============================================
// FUNÇÕES PRINCIPAIS
// =============================================

/**
 * Inicializa o jogo quando o DOM estiver carregado
 */
function initGame() {
  loadGameStats();
  setupEventListeners();
  setDifficulty('easy');
}

/**
 * Configura todos os event listeners do jogo
 */
function setupEventListeners() {
  // Botão de iniciar jogo
  DOM.startButton.addEventListener('click', startGame);
  
  // Botões de dificuldade
  DOM.difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => setDifficulty(btn.dataset.level));
  });
  
  // Botão de dica
  DOM.hintButton.addEventListener('click', toggleHint);
  
  // Botões de navegação
  DOM.backButton.addEventListener('click', returnToMenu);
  DOM.backToMainButton.addEventListener('click', () => {
    window.location.href = '../../../index.html';
  });
}

/**
 * Inicia um novo jogo
 */
function startGame() {
  if (gameState.isTransitioning) return;
  
  gameState.isTransitioning = true;
  
  // Animação de transição
  DOM.startScreen.style.animation = 'fadeOut 0.5s forwards';
  
  setTimeout(() => {
    DOM.startScreen.style.display = 'none';
    DOM.gameScreen.style.display = 'block';
    DOM.gameScreen.style.animation = 'fadeIn 0.5s forwards';
    
    // Mostrar botão de voltar ao menu
    DOM.backButton.classList.remove('hidden');
    DOM.backToMainButton.classList.add('hidden');
    
    // Reiniciar estado do jogo
    resetGame();
    loadRandomWord();
    
    gameState.isTransitioning = false;
  }, GAME_CONFIG.transitionDuration);
}

/**
 * Reinicia o estado do jogo para uma nova partida
 */
function resetGame() {
  clearTimer();
  
  gameState.score = 0;
  gameState.currentQuestionIndex = 0;
  gameState.timeLeft = DIFFICULTY_SETTINGS[gameState.currentDifficulty].time;
  gameState.isActive = true;
  
  updateScoreDisplay();
  updateTimerDisplay();
  clearFeedback();
  DOM.hintContent.classList.add('hidden');
  
  // Atualizar indicador de dificuldade
  const settings = DIFFICULTY_SETTINGS[gameState.currentDifficulty];
  DOM.difficultyIndicator.textContent = settings.name;
  DOM.difficultyIndicator.className = `game-difficulty ${gameState.currentDifficulty}`;
  DOM.difficultyIndicator.style.color = settings.color;
}

/**
 * Carrega uma palavra aleatória para a pergunta atual
 */
async function loadRandomWord() {
  if (gameState.isTransitioning || !gameState.isActive) return;
  
  gameState.isActive = true;
  clearTimer();
  
  try {
    // Usar palavra local ou da API
    const useLocal = Math.random() < GAME_CONFIG.localWordProbability;
    const wordData = useLocal ? getLocalWord() : await fetchRandomWord();
    
    setupQuestion(wordData.word, wordData.phonetic || "");
  } catch (error) {
    console.error("Erro ao carregar palavra:", error);
    setupQuestion(getLocalWord());
  }
}

/**
 * Obtém uma palavra local aleatória
 */
function getLocalWord() {
  const words = gameState.words[gameState.currentDifficulty];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

/**
 * Busca uma palavra aleatória da API
 */
async function fetchRandomWord() {
  try {
    const response = await fetch('https://api.dicionario-aberto.net/random');
    if (!response.ok) throw new Error("Falha na requisição");
    
    const data = await response.json();
    const wordData = Array.isArray(data) ? data[0] : data;
    
    if (!wordData || !wordData.word) {
      throw new Error("Dados da palavra inválidos");
    }
    
    return {
      word: wordData.word.toLowerCase(),
      phonetic: wordData.ipa || ""
    };
  } catch (error) {
    console.error("Erro ao buscar palavra:", error);
    return getLocalWord(); // Fallback para palavra local
  }
}

/**
 * Configura uma nova pergunta com a palavra fornecida
 */
function setupQuestion(word, phonetic = "") {
  // Garantir que a palavra seja tratada em minúsculas para comparação
  const normalizedWord = word.toLowerCase();
  const options = generateOptions(normalizedWord, gameState.currentDifficulty);
  
  // Encontrar o índice correto (pode não ser 0 devido ao shuffle)
  const correctIndex = options.indexOf(normalizedWord);
  
  // Se por algum motivo a palavra correta não estiver nas opções
  if (correctIndex === -1) {
    options[0] = normalizedWord; // Força a primeira opção a ser a correta
  }

  const hint = generateHint(normalizedWord, gameState.currentDifficulty);

  gameState.currentWord = {
    word: normalizedWord,
    phonetic,
    options,
    correct: correctIndex !== -1 ? correctIndex : 0,
    explanation: `A grafia correta é '${normalizedWord}'.`,
    hint
  };

  displayQuestion();
  startTimer();
}

/**
 * Exibe a pergunta atual na tela
 */
function displayQuestion() {
  DOM.word.textContent = gameState.currentWord.word;
  DOM.phonetic.textContent = gameState.currentWord.phonetic;
  DOM.questionCounter.textContent = `${gameState.currentQuestionIndex + 1}/${GAME_CONFIG.totalQuestions}`;
  
  // Limpar opções anteriores
  DOM.options.innerHTML = '';
  
  // Adicionar novas opções
  gameState.currentWord.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.dataset.index = index;
    button.addEventListener('click', () => handleAnswer(index));
    DOM.options.appendChild(button);
  });
}

/**
 * Manipula a resposta do jogador
 */
function handleAnswer(selectedIndex) {
  if (!gameState.isActive || gameState.isTransitioning) return;
  
  gameState.isActive = false;
  gameState.isTransitioning = true;
  clearTimer();
  
  const isCorrect = selectedIndex === gameState.currentWord.correct;
  
  // Atualizar pontuação se correto
  if (isCorrect) {
    const timeBonus = Math.max(1, Math.floor(gameState.timeLeft / GAME_CONFIG.timeBonusDivisor));
    gameState.score += timeBonus;
    updateScoreDisplay();
  }
  
  // Mostrar feedback
  showFeedback(isCorrect);
  
  // Destacar respostas
  highlightAnswers(selectedIndex, isCorrect);
  
  // Ir para próxima pergunta após delay
  setTimeout(() => {
    nextQuestion();
    gameState.isTransitioning = false;
  }, GAME_CONFIG.answerDelay);
}

/**
 * Mostra feedback visual para a resposta
 */
function showFeedback(isCorrect) {
  const feedback = isCorrect 
    ? "Correto! " + gameState.currentWord.explanation
    : `Incorreto! ${gameState.currentWord.explanation}`;
  
  DOM.feedback.textContent = feedback;
  DOM.feedback.className = `feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;
}

/**
 * Destaca as respostas corretas/incorretas
 */
function highlightAnswers(selectedIndex, isCorrect) {
  const options = DOM.options.querySelectorAll('.option');
  
  // Destacar resposta correta
  options[gameState.currentWord.correct].style.backgroundColor = "var(--correct)";
  
  // Destacar resposta errada (se aplicável)
  if (!isCorrect) {
    options[selectedIndex].style.backgroundColor = "var(--incorrect)";
  }
}

/**
 * Avança para a próxima pergunta ou finaliza o jogo
 */
function nextQuestion() {
  gameState.currentQuestionIndex++;
  
  if (gameState.currentQuestionIndex < GAME_CONFIG.totalQuestions) {
    loadRandomWord();
  } else {
    endGame();
  }
}

/**
 * Finaliza o jogo e mostra os resultados
 */
function endGame() {
  updateGameStats();
  gameState.isActive = false;
  
  DOM.word.textContent = "Fim do Jogo!";
  DOM.phonetic.textContent = "";
  DOM.options.innerHTML = `
    <div class="feedback-card">
      <p>Sua pontuação final: <strong>${gameState.score}</strong></p>
      ${renderStats()}
    </div>
    <button class="restart" onclick="startGame()">
      <i class="fas fa-redo"></i> Jogar Novamente
    </button>
  `;
}

/**
 * Retorna ao menu principal
 */
function returnToMenu() {
  if (gameState.isTransitioning) return;
  
  gameState.isTransitioning = true;
  clearTimer();
  gameState.isActive = false;

  DOM.gameScreen.style.animation = 'fadeOut 0.5s forwards';

  setTimeout(() => {
    DOM.gameScreen.style.display = 'none';
    DOM.startScreen.style.display = 'flex';
    DOM.startScreen.style.animation = 'fadeIn 0.5s forwards';
    
    // Mostrar botão de voltar ao menu principal
    DOM.backToMainButton.classList.remove('hidden');
    DOM.backButton.classList.add('hidden');
    
    resetGame();
    gameState.isTransitioning = false;
  }, GAME_CONFIG.transitionDuration);
}

// =============================================
// FUNÇÕES DO TEMPORIZADOR
// =============================================

/**
 * Inicia o temporizador para a pergunta atual
 */
function startTimer() {
  clearTimer();
  updateTimerDisplay();
  
  gameState.timer = setInterval(() => {
    if (!gameState.isActive || gameState.isTransitioning) {
      clearTimer();
      return;
    }
    
    gameState.timeLeft--;
    updateTimerDisplay();
    
    if (gameState.timeLeft <= 0) {
      timeOut();
    }
  }, 1000);
}

/**
 * Limpa o temporizador atual
 */
function clearTimer() {
  if (gameState.timer) {
    clearInterval(gameState.timer);
    gameState.timer = null;
  }
}

/**
 * Atualiza a exibição do temporizador
 */
function updateTimerDisplay() {
  DOM.timerText.textContent = `${gameState.timeLeft}s`;
  
  // Atualizar estilo com base no tempo restante
  const timerElement = document.getElementById('timer');
  timerElement.className = 'game-timer';
  
  if (gameState.timeLeft <= 15) {
    timerElement.classList.add('warning');
  }
  if (gameState.timeLeft <= 5) {
    timerElement.classList.remove('warning');
    timerElement.classList.add('critical');
  }
}

/**
 * Manipula o esgotamento do tempo
 */
function timeOut() {
  if (gameState.isTransitioning) return;
  
  gameState.isActive = false;
  gameState.isTransitioning = true;
  clearTimer();
  
  DOM.feedback.textContent = "Tempo esgotado!";
  DOM.feedback.className = "feedback-card incorrect";
  
  setTimeout(() => {
    nextQuestion();
    gameState.isTransitioning = false;
  }, GAME_CONFIG.answerDelay);
}

// =============================================
// FUNÇÕES DE DIFICULDADE
// =============================================

/**
 * Define a dificuldade do jogo
 */
function setDifficulty(level) {
  gameState.currentDifficulty = level;
  const settings = DIFFICULTY_SETTINGS[level];

  // Atualizar interface
  DOM.difficultyButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });

  DOM.timePerQuestion.textContent = `${settings.time}s`;
  DOM.currentLevel.textContent = settings.name;
  DOM.currentRules.textContent = settings.rules;

  // Atualizar tempo restante
  gameState.timeLeft = settings.time;
}

// =============================================
// FUNÇÕES DE DICAS
// =============================================

/**
 * Alterna a exibição da dica
 */
function toggleHint() {
  if (!gameState.currentWord?.hint || gameState.isTransitioning) return;
  
  DOM.hintContent.textContent = gameState.currentWord.hint;
  DOM.hintContent.classList.toggle('hidden');
}

// =============================================
// FUNÇÕES DE ESTATÍSTICAS
// =============================================

/**
 * Carrega as estatísticas do localStorage
 */
function loadGameStats() {
  const savedStats = localStorage.getItem('orthographyGameStats');
  if (savedStats) {
    gameState.stats = JSON.parse(savedStats);
  }
}

/**
 * Atualiza as estatísticas do jogo
 */
function updateGameStats() {
  const { stats } = gameState;
  const difficulty = gameState.currentDifficulty;
  const difficultyStats = stats.byDifficulty[difficulty];
  
  // Atualizar estatísticas gerais
  stats.totalGames++;
  stats.totalScore += gameState.score;
  
  if (gameState.score > stats.bestScore) {
    stats.bestScore = gameState.score;
  }
  
  // Atualizar estatísticas por dificuldade
  difficultyStats.games++;
  difficultyStats.total += gameState.score;
  
  if (gameState.score > difficultyStats.best) {
    difficultyStats.best = gameState.score;
  }
  
  // Salvar no localStorage
  localStorage.setItem('orthographyGameStats', JSON.stringify(stats));
}

/**
 * Renderiza as estatísticas na tela de resultados
 */
function renderStats() {
  const { stats } = gameState;
  const difficulty = gameState.currentDifficulty;
  const difficultyStats = stats.byDifficulty[difficulty];
  const difficultyName = DIFFICULTY_SETTINGS[difficulty].name;
  
  const averageScore = stats.totalGames > 0 
    ? Math.round(stats.totalScore / stats.totalGames) 
    : 0;
    
  const difficultyAverage = difficultyStats.games > 0 
    ? Math.round(difficultyStats.total / difficultyStats.games) 
    : 0;
  
  return `
    <div class="stats-container">
      <h3>Estatísticas</h3>
      <div class="stats-grid">
        <div class="stat-card">
          <i class="fas fa-trophy"></i>
          <p>Melhor Pontuação: <strong>${stats.bestScore}</strong></p>
        </div>
        <div class="stat-card">
          <i class="fas fa-gamepad"></i>
          <p>Jogos Totais: <strong>${stats.totalGames}</strong></p>
        </div>
        <div class="stat-card">
          <i class="fas fa-star"></i>
          <p>Média Geral: <strong>${averageScore}</strong></p>
        </div>
        <div class="stat-card">
          <i class="fas fa-chart-line"></i>
          <p>Melhor (${difficultyName}): <strong>${difficultyStats.best}</strong></p>
        </div>
        <div class="stat-card">
          <i class="fas fa-flag"></i>
          <p>Jogos (${difficultyName}): <strong>${difficultyStats.games}</strong></p>
        </div>
        <div class="stat-card">
          <i class="fas fa-calculator"></i>
          <p>Média (${difficultyName}): <strong>${difficultyAverage}</strong></p>
        </div>
      </div>
    </div>
  `;
}

// =============================================
// FUNÇÕES AUXILIARES
// =============================================

/**
 * Gera opções de resposta para uma palavra
 */
function generateOptions(correctWord, difficulty) {
  const options = [correctWord];
  const commonErrors = getCommonErrors(correctWord, difficulty);
  
  // Adicionar erros comuns
  commonErrors.forEach(error => {
    if (!options.includes(error) && options.length < 4) {
      options.push(error);
    }
  });
  
  // Completar com variações aleatórias se necessário
  while (options.length < 4) {
    const variation = generateVariation(correctWord, difficulty);
    if (!options.includes(variation)) {
      options.push(variation);
    }
  }
  
  return shuffleArray(options);
}

/**
 * Obtém erros comuns para uma palavra
 */
function getCommonErrors(word, difficulty) {
  const commonErrors = {
    easy: {
      "abrupto": ["avrupto", "abruptu", "abrupta"],
      "advogado": ["avogado", "adivogado", "advogadu"],
      "exceção": ["esseção", "eceção", "excessão"]
    },
    medium: {
      "obscuro": ["oscuro", "obscuru", "obscuro"],
      "excesso": ["ecesso", "exsesso", "exceço"]
    },
    hard: {
      "pneumonia": ["neumonia", "pneumônia", "pneumonia"],
      "psicólogo": ["sicólogo", "psicológo", "psicologo"]
    }
  };
  
  return commonErrors[difficulty]?.[word] || [];
}

/**
 * Gera uma variação incorreta para uma palavra
 */
function generateVariation(word, difficulty) {
  const variations = {
    easy: [
      word.replace(/b/g, 'v'),
      word.replace(/v/g, 'b'),
      word.replace(/s/g, 'z'),
      word.replace(/z/g, 's'),
      word.replace(/ç/g, 'c'),
      word.replace(/c/g, 'ç')
    ],
    medium: [
      word.replace(/x/g, 'ch'),
      word.replace(/ch/g, 'x'),
      word.replace(/ss/g, 's'),
      word.replace(/s/g, 'ss'),
      word.replace(/g/g, 'j'),
      word.replace(/j/g, 'g')
    ],
    hard: [
      word.replace(/pn/g, 'n'),
      word.replace(/ps/g, 's'),
      word.replace(/mn/g, 'n'),
      word.replace(/bt/g, 't'),
      word.replace(/gm/g, 'm')
    ]
  };
  
  const possibleVariations = variations[difficulty]
    .filter(v => v !== word && v.length === word.length);
  
  return possibleVariations.length > 0 
    ? possibleVariations[Math.floor(Math.random() * possibleVariations.length)]
    : word + "x"; // Fallback
}

/**
 * Embaralha um array
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Gera uma dica com base na palavra e dificuldade
 */
function generateHint(word, difficulty) {
  const hints = {
    easy: [
      "Palavras com 'b' antes de 'r' geralmente mantêm o 'b' (ex: abrir, abraço).",
      "Palavras com prefixo 'ad-' mantêm o 'd' antes de consoantes (ex: adjetivo, advérbio).",
      "Palavras com prefixo 'ex-' seguido de 'c' mantêm o 'x' (ex: excesso, exceto)."
    ],
    medium: [
      "Palavras com 'b' antes de 'sc' mantêm o 'b' (ex: obsceno, obscuridade).",
      "Palavras com 'x' seguido de 'c' mantêm essa grafia (ex: exceto, excelente)."
    ],
    hard: [
      "Palavras de origem grega com 'pn' no início mantêm essa grafia (ex: pneumático, pneu).",
      "Palavras de origem grega com 'ps' no início mantêm essa grafia (ex: psiquiatra, pseudônimo)."
    ]
  };
  
  return hints[difficulty][Math.floor(Math.random() * hints[difficulty].length)];
}

/**
 * Atualiza a exibição da pontuação
 */
function updateScoreDisplay() {
  DOM.score.textContent = gameState.score;
}

/**
 * Limpa o feedback na tela
 */
function clearFeedback() {
  DOM.feedback.textContent = "";
  DOM.feedback.className = "feedback-card";
}

// =============================================
// INICIALIZAÇÃO DO JOGO
// =============================================
document.addEventListener('DOMContentLoaded', initGame);