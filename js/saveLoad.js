function saveGame() {
    let gameData = {
        echoes: echoes,
        echoRate: echoRate,
        ascendantEchoes: ascendantEchoes,
        unlockedConcepts: unlockedConcepts
    };
    localStorage.setItem("echoesSave", JSON.stringify(gameData));
}

function loadGame() {
    let savedData = JSON.parse(localStorage.getItem("echoesSave"));
    if (savedData) {
        echoes = savedData.echoes;
        echoRate = savedData.echoRate;
        ascendantEchoes = savedData.ascendantEchoes;
        unlockedConcepts = savedData.unlockedConcepts;
        updateUI();
    }
}

window.onload = loadGame;
window.onbeforeunload = saveGame;
