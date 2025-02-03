function updateUI() {
    document.getElementById("echoCount").innerText = echoes.toFixed(2);
    document.getElementById("ascendantCount").innerText = ascendantEchoes;
    document.getElementById("echoRate").innerText = echoRate.toFixed(2);
}
