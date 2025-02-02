let unlockedConcepts = {
    time: false,
    matter: false,
    energy: false
};

function checkConcepts() {
    if (echoes >= 100 && !unlockedConcepts.time) {
        unlockedConcepts.time = true;
        echoRate = 1;  // Time enables passive Echo gain
        alert("You unlocked Time! Echoes now generate passively.");
    }
}

function collapseReality() {
    if (echoes >= 10_000) {
        ascendantEchoes += Math.floor(echoes / 10_000);  // Prestige currency
        echoes = 0;
        echoRate = 0;  // Reset progress
        alert(`Reality Collapsed! You now have ${ascendantEchoes} Ascendant Echoes.`);
    }
}
