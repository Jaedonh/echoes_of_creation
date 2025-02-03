let echoes = 0;
let echoRate = 1;  // Base passive rate
let echoMultiplier = 1;  // Modified by Reality Paths
let automationBoost = 1;  // Automation speed multiplier
let ascendantEchoes = 0;

// Generate Echoes by Clicking
function generateEcho() {
    echoes += echoRate * echoMultiplier;
    updateUI();
    checkConcepts();  // Check unlock conditions
}

// Passive Echo Generation Loop
function passiveEchoGeneration() {
    if (unlockedConcepts.time) {  
        echoes += (echoRate * echoMultiplier);
        updateUI();
        checkConcepts();  // Ensure unlocks happen over time
    }
}


// Start passive generation loop
setInterval(passiveEchoGeneration, 1000);
setInterval(checkConcepts, 1000);

// Button Event Listeners
document.getElementById("echoButton").addEventListener("click", generateEcho);
document.getElementById("collapseButton").addEventListener("click", collapseReality);
document.getElementById("resetButton").addEventListener("click", hardReset);

