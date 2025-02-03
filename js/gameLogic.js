let currentPath = null;
let realityPaths = {};
let unlockedUpgrades = [];
let upgrades = {};

// Load Reality Paths from JSON
fetch("data/realityPaths.json")
    .then(response => response.json())
    .then(data => {
        realityPaths = data;
        updatePathUI();
    });

// Load Upgrades from JSON
fetch("data/upgrades.json")
    .then(response => response.json())
    .then(data => {
        upgrades = data;
    });

function selectPath(path) {
    if (currentPath !== null) {
        alert("You have already chosen a Reality Path. You can only change it after a Reality Collapse.");
        return;
    }

    if (realityPaths[path]) {
        currentPath = path;
        let pathData = realityPaths[path];

        // Apply Path Bonuses
        echoMultiplier = pathData.echoMultiplier;
        automationBoost = pathData.automationBoost;

        alert(`You have chosen the ${pathData.name} path: ${pathData.description}`);
        updatePathUI();
    }
}

function purchaseUpgrade(upgradeId) {
    if (unlockedUpgrades.includes(upgradeId)) {
        alert("Upgrade already purchased!");
        return;
    }

    let upgrade = upgrades.find(u => u.id === upgradeId);
    if (upgrade && echoes >= upgrade.cost) {
        echoes -= upgrade.cost;
        unlockedUpgrades.push(upgradeId);
        applyUpgradeEffects(upgrade);
        alert(`Purchased: ${upgrade.name}`);
    } else {
        alert("Not enough Echoes to buy this upgrade.");
    }
}

function applyUpgradeEffects(upgrade) {
    if (upgrade.effect === "doubleEchoRate") {
        echoRate *= 2;
    } else if (upgrade.effect === "increasePassive") {
        echoRate += 5;
    }
    updateUI();
}

function collapseReality() {
    if (echoes >= 10_000) {
        ascendantEchoes += Math.floor(echoes / 10_000);  // Prestige currency
        echoes = 0;
        echoRate = 1;
        currentPath = null; // Allow new path selection
        unlockedUpgrades = []; // Reset upgrades
        alert(`Reality Collapsed! You now have ${ascendantEchoes} Ascendant Echoes.`);
        updatePathUI();
    }
}

function updatePathUI() {
    document.getElementById("currentPath").innerText = currentPath ? realityPaths[currentPath].name : "None";
}