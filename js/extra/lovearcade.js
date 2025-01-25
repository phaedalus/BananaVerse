function generateRandomCharacter(sortedCharacters) {
    const aliveCharacters = Object.values(sortedCharacters).flatMap(gameData => gameData.alive);

    if (aliveCharacters.length < 2) {
        return [
            { name: "Not enough characters", game: "" },
            { name: "Not enough characters", game: "" }
        ];
    }

    let character1Index = Math.floor(Math.random() * aliveCharacters.length);
    let character2Index = Math.floor(Math.random() * aliveCharacters.length);

    // Ensure both selected characters are different
    while (character1Index === character2Index) {
        character2Index = Math.floor(Math.random() * aliveCharacters.length);
    }

    const character1 = aliveCharacters[character1Index];
    const character2 = aliveCharacters[character2Index];

    return [
        { name: character1.fullname.split(' ')[0], game: character1.game },
        { name: character2.fullname.split(' ')[0], game: character2.game }
    ];
}

function generateCompatibility(sortedCharacters) {
    const characters = generateRandomCharacter(sortedCharacters);
    const character1 = characters[0];
    const character2 = characters[1];

    document.getElementById("love-ch1").innerText = `${character1.name} - ${character1.game}`;
    document.getElementById("love-ch2").innerText = `${character2.name} - ${character2.game}`;

    const compatibility = Math.random() * 100;

    let word = '';
    if (compatibility < 20) {
        word = 'Incompatible';
    } else if (compatibility < 40) {
        word = 'Lukewarm';
    } else if (compatibility < 60) {
        word = 'Fair';
    } else if (compatibility < 80) {
        word = 'Strong';
    } else {
        word = 'Fiery';
    }

    document.getElementById("compatibility").style.display = "block";
    document.getElementById("percent").style.display = "block";
    document.getElementById("compatibility").innerText = word;
    document.getElementById("percent").innerText = compatibility.toFixed(1) + "%";
}

function lovearcade() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <br><br><br>
            <div class="love-arcade">
                <h1>Love Arcade</h1>
                <button id="runButton">Run It Back!</button>
                <p id="percent"></p>
                <p id="compatibility"></p>
                <span id="love-ch1"></span><br>
                <span id="love-ch2"></span>
            </div>
        </center>
    `;
    var runButton = document.getElementById("runButton");

    if (runButton) {
        runButton.addEventListener("click", function() {
            generateCompatibility(sortedCharacters);
        });
    }

    generateCompatibility(sortedCharacters);
}

const lovearcadeButton = document.getElementById("love-arcade");
lovearcadeButton.addEventListener("click", lovearcade);