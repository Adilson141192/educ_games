// Salvar pontuação no ranking
function saveToRanking(score, mode) {
    const playerName = localStorage.getItem('playerName') || 'Anonymous';
    const difficulty = getDifficultyLevel();
    
    const rankingEntry = {
        name: playerName,
        score: score,
        mode: mode,
        difficulty: difficulty,
        date: new Date().toISOString(),
        correctAnswers: correctAnswers,
        totalQuestions: gameData.length
    };
    
    let rankings = JSON.parse(localStorage.getItem('vocabularyRankings') || '[]');
    rankings.push(rankingEntry);
    
    // Manter apenas os top 10 scores por modo e dificuldade
    rankings = rankings
        .sort((a, b) => b.score - a.score)
        .filter((entry, index, self) =>
            index === self.findIndex(e => (
                e.name === entry.name && 
                e.mode === entry.mode && 
                e.difficulty === entry.difficulty
            ))
        )
        .slice(0, 10);
    
    localStorage.setItem('vocabularyRankings', JSON.stringify(rankings));
}

// Função para carregar o ranking (pode ser usada em uma tela de ranking separada)
function loadRanking() {
    return JSON.parse(localStorage.getItem('vocabularyRankings') || '[]');
}