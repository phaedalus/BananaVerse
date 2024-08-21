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
        li.onclick = () => profileLoading(character);
        return li;
    }

    function processCharacters(characters, game, aliveList, deadList, sortBy = "lastName") {
        const filteredCharacters = characters.filter(character => character.game === game).map(loadCharacter);

        // Sorting logic based on the sortBy variable
        const compareFunction = (a, b) => {
            if (sortBy === 'alphabetical') {
                const nameA = `${a.name.firstName} ${a.name.lastName}`.toLowerCase();
                const nameB = `${b.name.firstName} ${b.name.lastName}`.toLowerCase();
                return nameA.localeCompare(nameB);
            } else { // Default to 'lastName'
                const lastNameA = a.name.lastName.toLowerCase();
                const lastNameB = b.name.lastName.toLowerCase();
                return lastNameA.localeCompare(lastNameB);
            }
        };

        // Separate and sort alive and dead characters
        const aliveCharacters = filteredCharacters.filter(character => !character.dead).sort(compareFunction);
        const deadCharacters = filteredCharacters.filter(character => character.dead).sort(compareFunction);

        // Clear existing lists
        aliveList.innerHTML = '';
        deadList.innerHTML = '';

        // Initialize variables to track oldest and youngest characters
        let oldestCharacter = null;
        let youngestCharacter = null;
        const characterAges = [];
        const birthMonths = [];

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

    function updateSorting(sort) {
        processCharacters(characters, "GTA", gtaListAlive, gtaListDead, sort);
        processCharacters(characters, "GRB", grbListAlive, grbListDead, sort);
        processCharacters(characters, "ACU", acuListAlive, acuListDead, sort);
        processCharacters(characters, "RDR", rdrListAlive, rdrListDead, sort);
    }

    // Add event listener for checkbox
    const sortCheckbox = document.getElementById("sort-checkbox");
    sortCheckbox.addEventListener('change', function() {
        if (this.checked == true) {
            updateSorting("alphabetical");
            game_render("gta");
        } else if (this.checked == false) {
            updateSorting("lastName");
            game_render("gta");
        }
    })

    // Initial rendering
    processCharacters(characters, "GTA", gtaListAlive, gtaListDead);
    processCharacters(characters, "GRB", grbListAlive, grbListDead);
    processCharacters(characters, "ACU", acuListAlive, acuListDead);
    processCharacters(characters, "RDR", rdrListAlive, rdrListDead);

    if (isUsingComputer()) {
      var itm1 = document.getElementById("gta-itm");
      var itm2 = document.getElementById("grb-itm");
      var itm3 = document.getElementById("acu-itm");
      var itm4 = document.getElementById("rdr-itm");
      var itm5 = document.getElementById("la-itm");
      var itm6 = document.getElementById("ng-itm");
      var itm7 = document.getElementById("c-itm");
      itm1.innerText = "Grand Theft Auto V (1)";
      itm2.innerText = "Tom Clancy's Ghost Recon Breakpoint (2)";
      itm3.innerText = "Assassin's Creed Unity (3)";
      itm4.innerText = "Red Dead Redemption 2 (4)";
      itm5.innerText = "Love Arcade (5)";
      itm6.innerText = "Name Generator (6)";
      itm7.innerText = "Changelog (7)";
      var nav1text = document.getElementById("nav-games-text");
      var nav2text = document.getElementById("nav-extras-text");
      nav1text.innerText = "Games (Ctrl)";
      nav2text.innerText = "Extras (Shift)";
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Control') {
            toggleMenu(document.getElementById("games"));
        }
        if (event.key === 'Shift') {
            toggleMenu(document.getElementById("extras"));
        }
        if (event.key === '1') {
            game_render('gta');
        }
        if (event.key === '2') {
            game_render('grb');
        }
        if (event.key === '3') {
            game_render('acu');
        }
        if (event.key === '4') {
            game_render('rdr');
        }
        if (event.key === '5') {
            lovearcade();
        }
        if (event.key === '6') {
            namegeneration();
        }
        if (event.key === '7') {
            changelog();
        }
      });
    }
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
        dead = false,
        dateofdeath,
        rawdeath,
        id
    } = profile;

    genderSymbol = "♂";
    genderColor = "#14a5e3";
    job = jobProcess(employment, dead);

    const age = calculateAge(new Date(dobRaw));
    const deathDate = dateofdeath ? new Date(dateofdeath).toLocaleDateString() : "N/A";
    const profileHTML = `
        <div class="profile-card" style="border: 2px solid ${genderColor}">
            <h3 style="text-align:center">${firstName}</h3>
            <p><b>Full Name:</b> ${fullName}</p>
            <p><b>Game:</b> ${game}</p>
            <p><b>Gender:</b> ${gender} ${genderSymbol}</p>
            <p><b>Birthday:</b> ${dob}</p>
            <p><b>Age:</b> ${age}</p>
            <p><b>Height:</b> ${height || "N/A"}</p>
            <p><b>Weight:</b> ${weight || "N/A"}</p>
            <p><b>Net Worth:</b> ${networth || "N/A"}</p>
            <p><b>Played By:</b> ${playedby || "N/A"}</p>
            <p><b>Status:</b> ${dead ? `Dead (Died on ${deathDate})` : "Alive"}</p>
            <p><b>Job:</b> ${job || "N/A"}</p>
            <p><b>Unique ID:</b> ${id}</p>
        </div>
    `;

    const profileElement = document.getElementById("profile");
    profileElement.innerHTML = profileHTML;
}

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
        dead = false,
        dateofdeath,
        rawdeath,
        id
    } = profile;

    genderSymbol = "♂";
    genderColor = "#14a5e3";
    job = jobProcess(employment, dead);

    const age = calculateAge(dobRaw, game);
    const aged = calculateAgeAtDeath(game, dobRaw, rawdeath);
    const deathDate = game === "GTA" ? modifyEndingNumber(dateofdeath, "-") : modifyEndingNumber(dateofdeath, "+");
    
    const time_now_raw = new Date();
    const components = ['day', 'month', 'year'];
    const processedDate = processDate(time_now_raw, components, true);
    const time_now = game === "GTA" 
        ? `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "-")}`
        : `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "+")}`;

    if (gender == "Male") {
        genderSymbol = `<i class="fa-solid fa-mars" style="color: #14a5e3"></i>`;
        genderColor = "#14a5e3";
    } else if (gender == "Female") {
        genderSymbol = `<i class="fa-solid fa-venus" style="color: #e016e0"></i>`;
        genderColor = "#e016e0";
    }

    const details = dead ? `
        <span>
            <strong>${fullName} ${genderSymbol}</strong><br>
            Lived until <strong style="color: #f52f3c">${aged}</strong> years of age<br>
            Left this plane on <strong style="color: #f52f3c">${deathDate}</strong><br>
            Born on <strong style="color: ${genderColor}">${dob}</strong><br>
            ${job}<br>
            Estimated worth <strong style="color: #a813e8">${networth}</strong><br>
            Acted & Created by <strong style="color: #14e35c">${playedby}</strong><br>
            <strong>${firstName}</strong> approximately weighed <strong style="color: #42f5bf">${weight} lbs</strong><br> standing at around <strong style="color: #42f5bf">${height}</strong><br>
        </span>` : `
        <strong>${fullName} ${genderSymbol}</strong><br>
        <strong style="color: ${genderColor}">${age}</strong> years old as of <strong style="color: ${genderColor}">${time_now}</strong><br>
        Born on <strong style="color: ${genderColor}">${dob}</strong><br>
        ${job}<br>
        Estimated worth <strong style="color: #a813e8">${networth}</strong><br>
        Acted & Created by <strong style="color: #14e35c">${playedby}</strong><br>
        <strong>${firstName}</strong> approximately weighs <strong style="color: #42f5bf">${weight} lbs</strong><br> standing at around <strong style="color: #42f5bf">${height}</strong><br>`;

    const profileElement = document.getElementById("character-profile");
    profileElement.innerHTML = details;
    profileElement.style.display = "block";
}

document.getElementById("character-profile").addEventListener('click', () => {
    document.getElementById("character-profile").style.display = "none";
});

function jobProcess(job, dead) {
    let final = "";
    if (typeof job === "object" && job !== null) {
        final = dead 
            ? `They worked for <strong style="color: #b6e813">${job.name}</strong>` 
            : `They work for <strong style="color: #b6e813">${job.name}</strong>`;
    } else if (typeof job === "string" && job.length === 0) {
        final = dead 
            ? `<strong style="color: #b6e813">Pizza Delivery</strong> is what they did for a living` 
            : `<strong style="color: #b6e813">Pizza Delivery</strong> is what they do for a living`;
    } else {
        final = dead 
            ? `<strong style="color: #b6e813">${job}</strong> is what they did for a living` 
            : `<strong style="color: #b6e813">${job}</strong> is what they do for a living`;
    }
    return final;
}

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

function isUsingComputer() {
  const userAgent = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
  const isFreeBSD = /FreeBSD/i.test(userAgent);
  
  // FreeBSD should be treated as mobile for this purpose
  if (isFreeBSD) {
    return false; // Return false to indicate it's not using a computer
  }
  
  return !isMobile; // Return true for non-mobile (i.e., desktop) devices
}