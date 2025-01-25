function readCharacterData(character) {
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
        dateofdeath: character.dateofdeath
    }
}

function sortCharactersByGame(characters) {
    const sortedData = {};

    characters.forEach(character => {
        const characterData = readCharacterData(character);
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

function readCompanyData(company) {
    return {
        company: company.name,
        type: company.type,
        founding: company.founding,
        founder: company.founder,
        value: company.value
    }
}

const sortedCharacters = sortCharactersByGame(characters);