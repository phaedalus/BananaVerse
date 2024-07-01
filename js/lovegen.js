function generateRandomCharacter(game) {
    var filteredCharacters = characters.filter(function(character) {
        return character.game === game;
    });

    var character1Index = Math.floor(Math.random() * filteredCharacters.length);
    var character2Index = Math.floor(Math.random() * filteredCharacters.length);

    while (character1Index === character2Index) {
        character2Index = Math.floor(Math.random() * filteredCharacters.length);
    }

    var character1 = filteredCharacters[character1Index].fullname.split(' ')[0];
    var character2 = filteredCharacters[character2Index].fullname.split(' ')[0];

    return [character1, character2];
}

function generateCompatibility() {
    var gameSelect = document.getElementById("gameSelect");
    var game = gameSelect.value;
    var characters = generateRandomCharacter(game);
    var character1 = characters[0];
    var character2 = characters[1];

    document.getElementById("love-ch1").innerText = character1;
    document.getElementById("love-ch2").innerText = character2;

    var compatibility = Math.random() * 100;

    var word = '';
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

    document.getElementById("compatibility").innerText = "Compatibility: " + word;
    document.getElementById("percent").innerText = compatibility.toFixed(1) + "%";
}

function handleSelectChange() {
    var selectElement = document.getElementById("gameSelect");
    var selectedValue = selectElement.value;
    console.log(selectedValue);
    var one = document.getElementById("love-title");
    var c1 = document.getElementById("love-ch1");
    var c2 = document.getElementById("love-ch2");
    if (selectedValue == "GRB") {
        one.style.fontFamily = "euro";
        c1.style.fontFamily = "euro";
        c2.style.fontFamily = "euro";
    } else if (selectedValue == "GTA") {
        one.style.fontFamily = "pricedown";
        c1.style.fontFamily = "pricedown";
        c2.style.fontFamily = "pricedown";
    }
}