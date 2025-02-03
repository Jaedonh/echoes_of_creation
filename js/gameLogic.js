let currentPath = null;
let realityPaths = {};
let unlockedUpgrades = [];
let unlockedConcepts = {
    time: false,
    matter: false,
    energy: false
};

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

// Unlock Concepts Progressively
function checkConcepts() {
    console.log(`Checking concepts... Current Echoes: ${echoes}`);

    if (echoes >= 100 && !unlockedConcepts.time) {
        unlockedConcepts.time = true;
        echoRate = 1;
        document.getElementById("conceptsSection").style.display = "block";
        document.getElementById("conceptTime").style.display = "block";
        console.log("Unlocked: Time");
        alert("You unlocked Time! Echoes now generate passively.");
    }

    if (echoes >= 500 && !unlockedConcepts.matter) {
        unlockedConcepts.matter = true;
        document.getElementById("conceptMatter").style.display = "block";
        document.getElementById("pathSelection").style.display = "block";  
        document.getElementById("currentPathContainer").style.display = "block";
        console.log("Unlocked: Matter (Reality Paths available)");
        alert("You unlocked Matter! Reality Paths are now available.");
    }

    if (echoes >= 1000 && !unlockedConcepts.energy) {
        unlockedConcepts.energy = true;
        document.getElementById("conceptEnergy").style.display = "block";
        document.getElementById("upgradesSection").style.display = "block";  
        console.log("Unlocked: Energy (Upgrades available)");
        alert("You unlocked Energy! Advanced upgrades are now available.");
    }
}


// Reality Path Selection
function selectPath(path) {
    if (currentPath !== null) {
        alert("You have already chosen a Reality Path. You can only change it after a Reality Collapse.");
        return;
    }

    if (realityPaths[path]) {
        currentPath = path;
        let pathData = realityPaths[path];

        echoMultiplier = pathData.echoMultiplier;
        automationBoost = pathData.automationBoost;

        alert(`You have chosen the ${pathData.name} path: ${pathData.description}`);
        updatePathUI();

        // Disable path buttons
        document.getElementById("scientificPath").disabled = true;
        document.getElementById("mythicalPath").disabled = true;
        document.getElementById("chaoticPath").disabled = true;
        document.getElementById("balancedPath").disabled = true;

        // Reveal Reality Collapse ONLY after choosing a path
        document.getElementById("collapseSection").style.display = "block";
    }
}


// Reality Collapse (Resets & Prestige)
function collapseReality() {
    if (echoes >= 10_000 && currentPath !== null) {
        ascendantEchoes += Math.floor(echoes / 10_000);
        echoes = 0;
        echoRate = 1;
        currentPath = null;
        unlockedUpgrades = [];
        unlockedConcepts = { time: false, matter: false, energy: false };
        
        // Hide paths, upgrades, and concepts again
        document.getElementById("pathSelection").style.display = "none";
        document.getElementById("currentPathContainer").style.display = "none";
        document.getElementById("upgradesSection").style.display = "none";
        document.getElementById("conceptsSection").style.display = "none";
        document.getElementById("collapseSection").style.display = "none";  // Hide again after reset
        
        alert(`Reality Collapsed! You now have ${ascendantEchoes} Ascendant Echoes.`);
        updatePathUI();
    } else {
        alert("You must reach 10,000 Echoes and choose a Reality Path before collapsing reality.");
    }
}

function hardReset() {
    console.log("Hard Reset triggered.");  // Debugging check
    let confirmReset = confirm("Are you sure you want to reset ALL progress? This cannot be undone.");
    
    if (confirmReset) {
        console.log("Reset confirmed.");
        
        // Reset all variables
        echoes = 0;
        echoRate = 1;
        ascendantEchoes = 0;
        currentPath = null;
        unlockedUpgrades = [];
        unlockedConcepts = { time: false, matter: false, energy: false };

        // Hide all UI elements
        document.getElementById("pathSelection").style.display = "none";
        document.getElementById("currentPathContainer").style.display = "none";
        document.getElementById("upgradesSection").style.display = "none";
        document.getElementById("conceptsSection").style.display = "none";
        document.getElementById("collapseSection").style.display = "none";

        // Clear saved progress
        localStorage.clear();
        
        console.log("Game data cleared.");
        alert("Game has been fully reset.");
        updateUI();
    }
}


function updatePathUI() {
    if (currentPath) {
        document.getElementById("currentPath").innerText = realityPaths[currentPath].name;
    } else {
        document.getElementById("currentPath").innerText = "None";
    }
}
