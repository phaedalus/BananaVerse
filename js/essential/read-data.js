let sortedCharacters = {};

async function loadCharacterData() {
    try {
        const response = await fetch('https://ccse.onrender.com/data');
        const data = await response.json();

        if (data && Array.isArray(data.characters)) {
            sortedCharacters = sortCharactersByGame(data.characters);
        } else {
            console.error('Invalid characters data or not an array:', data.characters);
        }
    } catch (error) {
        console.error('Error loading character data:', error);
    }
}

function readCharacterData(characters) {
    if (!Array.isArray(characters)) {
        console.error('Expected an array of characters:', characters);
        return [];
    }

    return characters.map(character => {
        return {
            fullname: character.fullname,
            birthday: character.birthday,
            employment: character.employment,
            gender: character.gender,
            networth: character.networth,
            game: character.game,
            playedby: character.playedby,
            weight: character.weight,
            height: character.height,
            eye: character.eye,
            hair: character.hair,
            dead: character.dead,
            dateofdeath: character.dateofdeath,
            alias: character.alias,
            retired: character.retired
        };
    });
}

function sortCharactersByGame(characters) {
    const sortedData = {};

    characters.forEach(character => {
        // Ensure the character is valid
        if (!character || !character.game) {
            console.warn('Skipping invalid character data:', character);
            return;
        }

        const characterData = readCharacterData([character])[0];  // Handle each character as an array for readCharacterData
        const game = characterData.game;

        if (!sortedData[game]) {
            sortedData[game] = { alive: [], dead: [] };
        }

        if (characterData.dead) {
            sortedData[game].dead.push(characterData);
        } else {
            sortedData[game].alive.push(characterData);
        }
    });

    const sortByLastNameFirst = (a, b) => {
        const [aLast, aFirst] = a.fullname.split(' ').slice(-1).concat(a.fullname.split(' ').slice(0, -1).join(' '));
        const [bLast, bFirst] = b.fullname.split(' ').slice(-1).concat(b.fullname.split(' ').slice(0, -1).join(' '));

        return aLast.localeCompare(bLast) || aFirst.localeCompare(bFirst);
    };

    for (const game in sortedData) {
        sortedData[game].alive.sort(sortByLastNameFirst);
        sortedData[game].dead.sort(sortByLastNameFirst);
    }

    return sortedData;
}