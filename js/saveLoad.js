function saveGame() {
    let gameData = {
        echoes: echoes,
        echoRate: echoRate,
        ascendantEchoes: ascendantEchoes,
        currentPath: currentPath,
        unlockedConcepts: unlockedConcepts,
        unlockedUpgrades: unlockedUpgrades
    };
    localStorage.setItem("echoesSave", JSON.stringify(gameData));
}

function loadGame() {
    let savedData = JSON.parse(localStorage.getItem("echoesSave"));
    if (savedData) {
        echoes = savedData.echoes;
        echoRate = savedData.echoRate;
        ascendantEchoes = savedData.ascendantEchoes;
        currentPath = savedData.currentPath;
        unlockedConcepts = savedData.unlockedConcepts;
        unlockedUpgrades = savedData.unlockedUpgrades;
        updateUI();
    }
}

window.onload = loadGame;
window.onbeforeunload = saveGame;
