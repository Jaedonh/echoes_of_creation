let echoes = 0;
let echoRate = 1;  // Base passive rate
let echoMultiplier = 1;  // Modified by Reality Paths
let automationBoost = 1;  // Automation speed multiplier
let ascendantEchoes = 0;

function generateEcho() {
    echoes += echoRate * echoMultiplier;
    updateUI();
}

function passiveEchoGeneration() {
    echoes += (echoRate * echoMultiplier);
    updateUI();
}

// Start passive generation loop
setInterval(passiveEchoGeneration, 1000);

// Button Event Listeners
document.getElementById("echoButton").addEventListener("click", generateEcho);
document.getElementById("collapseButton").addEventListener("click", collapseReality);