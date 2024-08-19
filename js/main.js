// Version 1.0.3_betareleasefix_1.1 - Tru3
// Change ~ Movement Of UI Code

document.addEventListener("DOMContentLoaded", function() {
    const gtaListAlive = document.getElementById("characters-gta-alive");
    const grbListAlive = document.getElementById("characters-grb-alive");
    const rdrListAlive = document.getElementById("characters-rdr-dead");
    const acuListAlive = document.getElementById("characters-acu-dead");
    const gtaListDead = document.getElementById("characters-gta-dead");
    const grbListDead = document.getElementById("characters-grb-dead");
    const rdrListDead = document.getElementById("characters-rdr-dead");
    const acuListDead = document.getElementById("characters-acu-dead");

    const characterAges = [];
    const birthMonths = [];
    let oldestCharacter = null;
    let youngestCharacter = null;

    // Utility function to create list item
    function createListItem(character) {
        const li = document.createElement("li");
        const icon = character.gender === "Male" ? "fa-mars" : "fa-venus";
        const skull = character.dead ? ' <i class="fa-solid fa-skull"></i>' : '';
        if (character.alias) {
            li.innerHTML = `<i class="fa-solid ${icon}" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName} <b>(${character.alias})</b>${skull}`;
        } else {
            li.innerHTML = `<i class="fa-solid ${icon}" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName}${skull}`;
        }
        if (character.dead) {
            li.style.color = "#ff4733";
        }
        li.onclick = () => profileLoading(character);
        return li;
    }

    function processCharacters(characters, game, aliveList, deadList) {
        const filteredCharacters = characters.filter(character => character.game === game).map(loadCharacter);

        // Separate and sort alive and dead characters
        const aliveCharacters = filteredCharacters.filter(character => !character.dead).sort((a, b) => {
            const nameA = `${a.name.firstName} ${a.name.lastName}`;
            const nameB = `${b.name.firstName} ${b.name.lastName}`;
            return nameA.localeCompare(nameB);
        });

        const deadCharacters = filteredCharacters.filter(character => character.dead).sort((a, b) => {
            const nameA = `${a.name.firstName} ${a.name.lastName}`;
            const nameB = `${b.name.firstName} ${b.name.lastName}`;
            return nameA.localeCompare(nameB);
        });

        // Process alive characters
        aliveCharacters.forEach(character => {
            const age = calculateAge(new Date(character.birthday.raw));
            characterAges.push(age);
            birthMonths.push(new Date(character.birthday.raw).getMonth());

            if (!oldestCharacter || age > calculateAge(new Date(oldestCharacter.birthday.raw))) {
                oldestCharacter = character;
            }
            if (!youngestCharacter || age < calculateAge(new Date(youngestCharacter.birthday.raw))) {
                youngestCharacter = character;
            }

            const li = createListItem(character);
            aliveList.appendChild(li);
        });

        // Process dead characters
        deadCharacters.forEach(character => {
            const age = calculateAge(new Date(character.birthday.raw));
            characterAges.push(age);
            birthMonths.push(new Date(character.birthday.raw).getMonth());

            if (!oldestCharacter || age > calculateAge(new Date(oldestCharacter.birthday.raw))) {
                oldestCharacter = character;
            }
            if (!youngestCharacter || age < calculateAge(new Date(youngestCharacter.birthday.raw))) {
                youngestCharacter = character;
            }

            const li = createListItem(character);
            deadList.appendChild(li);
        });
    }

    // Process GTA characters
    processCharacters(characters, "GTA", gtaListAlive, gtaListDead);

    // Process GRB characters
    processCharacters(characters, "GRB", grbListAlive, grbListDead);

    // Process ACU characters
    processCharacters(characters, "ACU", acuListAlive, acuListDead);

    // Process RDR2 characters
    processCharacters(characters, "RDR", rdrListAlive, rdrListDead);

    // Calculate most common age
    const ageCounts = characterAges.reduce((counts, age) => {
        counts[age] = (counts[age] || 0) + 1;
        return counts;
    }, {});

    const mostCommonAge = Object.keys(ageCounts).reduce((a, b) => ageCounts[a] > ageCounts[b] ? a : b);
    
    // Calculate most and least common birth months
    const monthCounts = birthMonths.reduce((counts, month) => {
        counts[month] = (counts[month] || 0) + 1;
        return counts;
    }, {});

    const mostCommonMonthIndex = Object.keys(monthCounts).reduce((a, b) => monthCounts[a] > monthCounts[b] ? a : b);
    const leastCommonMonthIndex = Object.keys(monthCounts).reduce((a, b) => monthCounts[a] < monthCounts[b] ? a : b);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const mostCommonMonth = monthNames[mostCommonMonthIndex];
    const leastCommonMonth = monthNames[leastCommonMonthIndex];
});

function modifyEndingNumber(str, operation) {
    // Match the ending number in the string
    const regex = /(\d+)(?!.*\d)/;
    const match = str.match(regex);
    
    if (match) {
        // Extract the ending number
        const endingNumber = parseInt(match[0], 10);
        
        // Modify the number based on the operation
        const modifiedNumber = operation === '+' ? endingNumber + 1 : endingNumber - 1;
        
        // Replace the old number with the new number in the string
        return str.replace(regex, modifiedNumber);
    }
    
    // If no ending number is found, return the original string
    return str;
}

function profileLoading(profile) {
    const {
        name: { fullName, firstName },
        birthday: { paperNormal: dob, raw: dobRaw },
        gender,
        employment,
        networth,
        playedby,
        weight,
        height,
        game,
        dead,
        dateofdeath,
        rawdeath,
        id
    } = profile;

    const employmentName = typeof employment === "object" ? employment.name : employment;
    const age = calculateAge(dobRaw, game);
    const aged = calculateAgeAtDeath(game, dobRaw, rawdeath);
    const deathDate = game === "GTA" ? modifyEndingNumber(dateofdeath, "-") : modifyEndingNumber(dateofdeath, "+");
    
    const time_now_raw = new Date();
    const components = ['day', 'month', 'year'];
    const processedDate = processDate(time_now_raw, components, true);
    const time_now = game === "GTA" 
        ? `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "-")}`
        : `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "+")}`;

    const details = dead ? `
        <span style="color: #ff4733">
            <strong>${fullName}</strong><br>
            <strong>${gender}</strong><br>
            Lived until <strong>${aged}</strong> years of age<br>
            Left this plane on <strong>${deathDate}</strong><br>
            Born on <strong>${dob}</strong><br>
            <strong>${employmentName}</strong> is what they did for a living<br>
            Estimated worth <strong>${networth}</strong><br>
            Acted & Created by <strong>${playedby}</strong><br>
            <strong>${firstName}</strong> approximately weighed <strong>${weight} lbs</strong><br> standing at around <strong>${height}</strong><br>
        </span>` : `
        <strong>${fullName}</strong><br>
        <strong>${gender}</strong><br>
        <strong>${age}</strong> years old as of <strong>${time_now}</strong><br>
        Born on <strong>${dob}</strong><br>
        <strong>${employmentName}</strong> is what they do for a living<br>
        Estimated worth <strong>${networth}</strong><br>
        Acted & Created by <strong>${playedby}</strong><br>
        <strong>${firstName}</strong> approximately weighs <strong>${weight} lbs</strong><br> standing at around <strong>${height}</strong><br>`;

    const profileElement = document.getElementById("character-profile");
    profileElement.innerHTML = details;
    profileElement.style.display = "block";
}

document.getElementById("character-profile").addEventListener('click', () => {
    document.getElementById("character-profile").style.display = "none";
});

function calculateAge(dateString, game) {
    const birthDate = new Date(dateString);
    const today = new Date();
    const yearOffset = game === "GTA" ? -1 : 1;
    const age = today.getFullYear() + yearOffset - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        return age - 1;
    }

    return age;
}

function calculateAgeAtDeath(game, dobRaw, rawdeath) {
    const birthDate = new Date(dobRaw);
    const deathDate = new Date(rawdeath);
    const yearOffset = game === "GTA" ? -1 : 1;
    const ageAtDeath = deathDate.getFullYear() + yearOffset - birthDate.getFullYear();
    const monthDifference = deathDate.getMonth() - birthDate.getMonth();
    const dayDifference = deathDate.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        return ageAtDeath - 1;
    }

    return ageAtDeath;
}

function processDate(date, components, monthAsWord) {
    const processedDate = {};
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    components.forEach(component => {
        switch (component) {
            case 'day':
                processedDate.day = date.getDate();
                break;
            case 'month':
                processedDate.month = monthAsWord ? months[date.getMonth()] : date.getMonth() + 1;
                break;
            case 'year':
                processedDate.year = date.getFullYear();
                break;
        }
    });

    return processedDate;
}

function loadCharacter(character) {
    return {
        id: character.id,
        name: {
            firstName: character.name.first,
            lastName: character.name.last,
            fullName: `${character.name.first} ${character.name.last}`
        },
        gender: character.gender,
        birthday: {
            raw: character.birthday,
            paperNormal: processDate(new Date(character.birthday), ['month', 'day', 'year'], true)
        },
        employment: character.employment,
        networth: character.netWorth,
        playedby: character.playedBy,
        weight: character.weight,
        height: character.height,
        game: character.game,
        dead: character.dead,
        dateofdeath: processDate(new Date(character.dateOfDeath), ['month', 'day', 'year'], true),
        rawdeath: character.dateOfDeath,
        alias: character.alias || null
    };
}