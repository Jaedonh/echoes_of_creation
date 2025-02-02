let echoes = 0;
let echoRate = 0;  // Passive generation per second
let ascendantEchoes = 0;

function generateEcho() {
    echoes += 1;
    updateUI();
}

function passiveEchoGeneration() {
    echoes += echoRate;
    updateUI();
}

// Start passive generation loop
setInterval(passiveEchoGeneration, 1000);

document.getElementById("echoButton").addEventListener("click", generateEcho);
document.getElementById("collapseButton").addEventListener("click", collapseReality);
