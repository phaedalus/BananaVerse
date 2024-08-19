function generateRandomCharacter() {
    var filteredCharacters = characters.filter(function(character) {
        return !character.dead;
    });

    if (filteredCharacters.length < 2) {
        return [
            { name: "Not enough characters", game: "" },
            { name: "Not enough characters", game: "" }
        ];
    }

    var character1Index = Math.floor(Math.random() * filteredCharacters.length);
    var character2Index = Math.floor(Math.random() * filteredCharacters.length);

    while (character1Index === character2Index) {
        character2Index = Math.floor(Math.random() * filteredCharacters.length);
    }

    var character1 = filteredCharacters[character1Index];
    var character2 = filteredCharacters[character2Index];

    return [
        { name: character1.fullname.split(' ')[0], game: character1.game },
        { name: character2.fullname.split(' ')[0], game: character2.game }
    ];
}

function generateCompatibility() {
    var characters = generateRandomCharacter();
    var character1 = characters[0];
    console.log(character1);
    var character2 = characters[1];

    document.getElementById("love-ch1").innerText = `${character1.name} - ${character1.game}`;
    document.getElementById("love-ch2").innerText = `${character2.name} - ${character2.game}`;

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

    document.getElementById("compatibility").style.display = "block";
    document.getElementById("percent").style.display = "block";
    document.getElementById("compatibility").innerText = word;
    document.getElementById("percent").innerText = compatibility.toFixed(1) + "%";
}