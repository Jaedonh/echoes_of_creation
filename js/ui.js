function updateUI() {
    document.getElementById("echoCount").innerText = echoes.toFixed(2);
    document.getElementById("ascendantCount").innerText = ascendantEchoes;
    document.getElementById("echoRate").innerText = echoRate.toFixed(2);

    // Hide Reality Collapse if reset
    if (echoes === 0) {
        document.getElementById("collapseSection").style.display = "none";
    }
}
