// Version 1.0.3_betareleasefix_1.0 - Tru3

// UI Code
document.addEventListener('click', function(event) {
    const navItems = document.querySelectorAll('.nav-item');
    let clickedInsideNavItem = false;

    navItems.forEach(item => {
        if (item.contains(event.target)) {
            clickedInsideNavItem = true;
            if (!item.classList.contains('active')) {
                closeAllSubMenus();
                item.classList.add('active');
            }
        }
    });

    if (!clickedInsideNavItem) {
        closeAllSubMenus();
    }
});

function toggleMenu(element) {
    element.classList.toggle('active');
}

function closeAllSubMenus() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
}

function selectSubItem(event) {
    event.stopPropagation();
    closeAllSubMenus();
}

function gta_characters() {
    selectSubItem(event);
    var gta_char = document.createElement("ul");
    clone(gta_char, "characters-gta");
    var feed = document.getElementById("feed");
    feed.innerHTML = '';
    feed.appendChild(gta_char);
}

function grb_characters() {
    selectSubItem(event);
    var grb_char = document.createElement("ul");
    clone(grb_char, "characters-grb");
    var feed = document.getElementById("feed");
    feed.innerHTML = '';
    feed.appendChild(grb_char);
}

function lovearcade() {
    selectSubItem(event);
    document.getElementById("feed").innerHTML = ``;
    document.getElementById("feed").innerHTML = `
    <center>
        <div class="love-arcade">
            <h1 id="love-title">Love Arcade</h1>
            <select id="gameSelect" onchange="handleSelectChange()">
                <option value="GTA">Grand Theft Auto V</option>
                <option value="GRB">Ghost Recon Breakpoint</option>
            </select><br><br>
            <button id="runButton">Run It Back!</button><br><br>
            <span id="love-ch1" class="character"></span>
            <span id="love-ch2" class="character"></span>
            <p id="compatibility" class="compatibility"></p>
            <p id="percent" class="compatibility"></p>
        </div>
    </center>
    `;

    var gameSelect = document.getElementById("gameSelect");
    var runButton = document.getElementById("runButton");

    if (gameSelect && runButton) {
        gameSelect.addEventListener("change", function() {
            generateCompatibility();
        });

        runButton.addEventListener("click", function() {
            generateCompatibility();
        });
    }

    generateCompatibility();
}

function namegeneration() {
    selectSubItem(event);
    document.getElementById("feed").innerHTML = ``;
    document.getElementById("feed").innerHTML = `
    <center>
        <div class="name-generator">
            <h2>Name Generator</h2>
            <select id="genderSelect">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select><br>
            <button id="generateBtn">Generate New Name</button>
            <strong><h1 id="fullName"></h1></strong>
        </div>
    </center>
    `;
    document.getElementById('generateBtn').addEventListener('click', generateAndDisplayName);
    document.getElementById('genderSelect').addEventListener('change', generateAndDisplayName);
    generateAndDisplayName();
}

// Break Apart Name Data
function nameDecrypt(rawName) {
    const nameParts = rawName.split(" ");
    
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    let middleName = null;
    if (nameParts.length > 2) {
        middleName = nameParts.slice(1, -1).join(" ");
    }
    
    const nameObject = {
        first: firstName,
        middle: middleName,
        last: lastName
    };
    
    return nameObject;
}

// Proccess Date Request
function processDate(rawDate, components, useWords = false) {
    const dateObj = dateDecrypt(rawDate);
    const processedDate = {};

    if (components.includes('hour')) {
        processedDate.hour = useWords ? getHourInWords(dateObj.getHours()) : dateObj.getHours();
    }
    if (components.includes('minute')) {
        processedDate.minute = useWords ? getMinuteInWords(dateObj.getMinutes()) : dateObj.getMinutes();
    }
    if (components.includes('second')) {
        processedDate.second = useWords ? getSecondInWords(dateObj.getSeconds()) : dateObj.getSeconds();
    }
    if (components.includes('millisecond')) {
        processedDate.millisecond = useWords ? getMillisecondInWords(dateObj.getMilliseconds()) : dateObj.getMilliseconds();
    }
    if (components.includes('day')) {
        processedDate.day = useWords ? getDayInWords(dateObj.getDate()) : dateObj.getDate();
    }
    if (components.includes('month')) {
        processedDate.month = useWords ? getMonthInWords(dateObj.getMonth()) : dateObj.getMonth() + 1;
    }
    if (components.includes('year')) {
        processedDate.year = useWords ? getYearInWords(dateObj.getFullYear()) : dateObj.getFullYear();
    }

    return processedDate;
}

// Break Apart Date Data
function dateDecrypt(rawDate) {
    const year = rawDate.getFullYear();
    const month = rawDate.getMonth();
    const day = rawDate.getDate();
    const hour = rawDate.getHours();
    const minute = rawDate.getMinutes();
    const second = rawDate.getSeconds();
    const millisecond = rawDate.getMilliseconds();
    
    return new Date(year, month, day, hour, minute, second, millisecond);
}

// Date Output Proccessing
function getMonthInWords(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

function getDayInWords(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = day % 10;
    const suffix = (day % 100 >= 11 && day % 100 <= 13) ? "th" : suffixes[remainder] || suffixes[0];
    return day + suffix;
}

function getYearInWords(year) {
    const numToString = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    let yearInWords = "";
    
    if (year < 1000) {
        const yearString = year.toString();
        for (let digit of yearString) {
            yearInWords += numToString[parseInt(digit)] + " ";
        }
    } else {
        yearInWords = year.toString();
    }
    
    return yearInWords.trim();
}

function getHourInWords(hour) {
    const suffix = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour} ${suffix}`;
}

function getMinuteInWords(minute) {
    return `${minute}`;
}

function getSecondInWords(second) {
    return `${second}`;
}

function getMillisecondInWords(millisecond) {
    return `${millisecond}`;
}

function netWorthHandle(networth) {
    const numericPart = parseFloat(networth);
    
    if (!isNaN(numericPart)) {
        if (networth.toLowerCase().includes("k")) {
            return numericPart + "k";
        } else if (networth.toLowerCase().includes("m")) {
            return numericPart + " million";
        } else if (networth.toLowerCase().includes("b")) {
            return numericPart + " billion";
        } else if (networth.toLowerCase().includes("t")) {
            return numericPart + " trillion";
        } else {
            return "$" + numericPart.toFixed(2);
        }
    } else {
        return "Invalid net worth";
    }
}

function loadCharacter(character) {
    const rawDate = new Date(character.birthday);
    const components = ['day', 'month', 'year'];
    const processedDate = processDate(rawDate, components, true);
    const processedDeathDate = processDate(new Date(character.dateofdeath), components, true);
    const formattedDate = `${processedDate.month} ${processedDate.day}, ${processedDate.year}`;
    const formattedDeathDate = `${processedDeathDate.month} ${processedDeathDate.day}, ${processedDeathDate.year}`;
    const componentsun = ['month', 'day', 'year', 'hour', 'minute', 'second'];
    const processedDateUn = processDate(rawDate, componentsun);
    const unformattedDate = `${processedDateUn.month}/${processedDateUn.day}/${processedDateUn.year}:${processedDateUn.hour}:${processedDateUn.minute}:${processedDateUn.second}`;

    var job;
    if (typeof character.employment === "object") {
        const rawDate = new Date(character.employment.founding);
        const components = ['day', 'month', 'year'];
        const processedDate = processDate(rawDate, components, true);
        const formattedDate = `${processedDate.month} ${processedDate.day}, ${processedDate.year}`;
        const componentsun = ['month', 'day', 'year', 'hour', 'minute', 'second'];
        const processedDateUn = processDate(rawDate, componentsun);
        const unformattedDate = `${processedDateUn.month}/${processedDateUn.day}/${processedDateUn.year}:${processedDateUn.hour}:${processedDateUn.minute}:${processedDateUn.second}`;

        job = {
            name: character.employment.name,
            type: character.employment.type,
            foundingDate: {
                compNormal: formattedDate,
                compSpecific: unformattedDate
            },
            founder: character.employment.founder,
            value: character.employment.value
        };
    } else {
        job = character.employment;
    }

    var structure = {
        name: {
            firstName: nameDecrypt(character.fullname).first,
            middleName: nameDecrypt(character.fullname).middle,
            lastName: nameDecrypt(character.fullname).last,
            fullName: character.fullname
        },
        birthday: {
            paperNormal: formattedDate,
            paperSpecific: unformattedDate,
            raw: character.birthday
        },
        gender: character.gender,
        employment: job,
        networth: netWorthHandle(character.networth),
        playedby: character.playedby,
        weight: character.weight,
        height: character.height,
        game: character.game,
        dead: character.dead,
        dateofdeath: formattedDeathDate,
        rawdeath: character.dateofdeath,
        id: character.id
    };

    return structure;
}

document.addEventListener("DOMContentLoaded", function() {
    const gtaList = document.getElementById("characters-gta");
    const grbList = document.getElementById("characters-grb");

    const characterAges = [];
    let oldestCharacter = null;
    let youngestCharacter = null;

    // Load GTA characters on page load
    const sortedCharactersGTA = characters.filter(character => character.game === "GTA").map(loadCharacter).sort((a, b) => {
        const nameA = `${a.name.firstName} ${a.name.lastName}`;
        const nameB = `${b.name.firstName} ${b.name.lastName}`;
        return nameA.localeCompare(nameB);
    });

    sortedCharactersGTA.forEach(function(character) {
        const age = calculateAge(new Date(character.birthday.raw));
        characterAges.push(age);

        if (!oldestCharacter || age > calculateAge(new Date(oldestCharacter.birthday.raw))) {
            oldestCharacter = character;
        }
        if (!youngestCharacter || age < calculateAge(new Date(youngestCharacter.birthday.raw))) {
            youngestCharacter = character;
        }

        const li = document.createElement("li");
        if (character.dead == true) {
            li.style.color = "#ff4733";
            if (character.gender == "Male") {
                li.innerHTML = `<i class="fa-solid fa-mars" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName} <i class="fa-solid fa-skull"></i>`;
            } else if (character.gender == "Female") {
                li.innerHTML = `<i class="fa-solid fa-venus" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName} <i class="fa-solid fa-skull"></i>`;
            }
        } else {
            if (character.gender == "Male") {
                li.innerHTML = `<i class="fa-solid fa-mars" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName}`;
            } else if (character.gender == "Female") {
                li.innerHTML = `<i class="fa-solid fa-venus" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName}`;
            }
        }

        li.onclick = function() {
            profileLoading(character);
        };

        gtaList.appendChild(li);
    });

    // Load GRB characters on page load
    const sortedCharactersGRB = characters.filter(character => character.game === "GRB").map(loadCharacter).sort((a, b) => {
        const nameA = `${a.name.firstName} ${a.name.lastName}`;
        const nameB = `${b.name.firstName} ${b.name.lastName}`;
        return nameA.localeCompare(nameB);
    });

    sortedCharactersGRB.forEach(function(character) {
        const age = calculateAge(new Date(character.birthday.raw));
        characterAges.push(age);

        if (!oldestCharacter || age > calculateAge(new Date(oldestCharacter.birthday.raw))) {
            oldestCharacter = character;
        }
        if (!youngestCharacter || age < calculateAge(new Date(youngestCharacter.birthday.raw))) {
            youngestCharacter = character;
        }

        const li = document.createElement("li");
        if (character.dead == true) {
            li.style.color = "#ff4733";
            if (character.gender == "Male") {
                li.innerHTML = `<i class="fa-solid fa-mars" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName} <i class="fa-solid fa-skull"></i>`;
            } else if (character.gender == "Female") {
                li.innerHTML = `<i class="fa-solid fa-venus" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName} <i class="fa-solid fa-skull"></i>`;
            }
        } else {
            if (character.gender == "Male") {
                li.innerHTML = `<i class="fa-solid fa-mars" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName}`;
            } else if (character.gender == "Female") {
                li.innerHTML = `<i class="fa-solid fa-venus" style="font-size: 12px"></i> ${character.name.firstName} ${character.name.lastName}`;
            }
        }

        li.onclick = function() {
            profileLoading(character);
        };

        grbList.appendChild(li);
    });

    const ageCounts = {};
    characterAges.forEach(age => {
        if (ageCounts[age]) {
            ageCounts[age]++;
        } else {
            ageCounts[age] = 1;
        }
    });

    const mostCommonAge = Object.keys(ageCounts).reduce((a, b) => ageCounts[a] > ageCounts[b] ? a : b);
});

function calculateAge(birthday, game) {
    const today = new Date();
    let currentYear = today.getFullYear();
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDay = birthday.getDate();

    let age;

    if (game === 'GRB') {
        currentYear = currentYear + 1;
        age = currentYear - birthYear - ((today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) ? 1 : 0);
    } else if (game === 'GTA') {
        currentYear = currentYear - 1;
        age = currentYear - birthYear - ((today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) ? 1 : 0);
    }

    return age;
}

function calculateAgeAtDeath(game, birthDate, deathDate) {
    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    let gameYear = death.getFullYear();
    if (game == "GTA") {
        gameYear = death.getFullYear() - 1;
    } else if (game == "GRB") {
        gameYear = death.getFullYear() + 1;
    }

    const age = gameYear - birth.getFullYear();

    if (death < new Date(death.getFullYear(), birth.getMonth(), birth.getDate())) {
        return age - 1;
    } else {
        return age;
    }
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
    var name = profile.name.fullName;
    var firstName = profile.name.firstName;
    var middleName = profile.name.middleName;
    var lastName = profile.name.lastName;
    var dob = profile.birthday.paperNormal;
    var dobSpecific = profile.birthday.paperSpecific;
    var dobRaw = profile.birthday.raw;
    var gender = profile.gender;
    var employment;
    if (typeof profile.employment === "object") {
        employment = profile.employment.name;
    } else {
        employment = profile.employment;
    }
    var networth = profile.networth;
    var playedby = profile.playedby;
    var weight = profile.weight;
    var height = profile.height;
    var game = profile.game;
    var age = calculateAge(dobRaw, game);
    var dead = profile.dead;
    if (game == "GTA") {
        deathDate = modifyEndingNumber(profile.dateofdeath, "-");
    } else if (game == "GRB") {
        deathDate = modifyEndingNumber(profile.dateofdeath, "+");
    }
    var rawdeath = profile.rawdeath;
    var aged = calculateAgeAtDeath(profile.game ,dobRaw, rawdeath);
    var id = profile.id;
    const time_now_raw = new Date();
    let components = ['day', 'month', 'year'];
    let processedDate = processDate(time_now_raw, components, true);
    if (game == "GTA") {
        time_now = `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "-")}`;
    } else if (game == "GRB") {
        time_now = `${processedDate.month} ${processedDate.day}, ${modifyEndingNumber(processedDate.year, "+")}`;
    }

    if (profile.dead == true) {
        var details = `
            <span style="color: #ff4733">
                <strong>${name}</strong><br>
                <strong>${gender}</strong><br>
                Lived until <strong>${aged}</strong> years of age<br>
                Left this plane on <strong>${deathDate}</strong><br>
                Born on <strong>${dob}</strong><br>
                <strong>${employment}</strong> is what they did for a living<br>
                Estimated worth <strong>${networth}</strong><br>
                Acted & Created by <strong>${playedby}</strong><br>
                <strong>${firstName}</strong> approximately weighed <strong>${weight} lbs</strong><br> standing at around <strong>${height}</strong><br>
            </span>
        `;
    } else {
        var details = `
            <strong>${name}</strong><br>
            <strong>${gender}</strong><br>
            <strong>${age}</strong> years old as of <strong>${time_now}</strong><br>
            Born on <strong>${dob}</strong><br>
            <strong>${employment}</strong> is what they do for a living<br>
            Estimated worth <strong>${networth}</strong><br>
            Acted & Created by <strong>${playedby}</strong><br>
            <strong>${firstName}</strong> approximately weighs <strong>${weight} lbs</strong><br> standing at around <strong>${height}</strong><br>
        `;
    }

    document.getElementById("character-profile").innerHTML = details;
    document.getElementById("character-profile").style.display = "block";
}

document.getElementById("character-profile").addEventListener('click', () => {
    document.getElementById("character-profile").style.display = "none";
});

function cloneUL(sourceUL, targetUL) {
    const clonedItems = sourceUL.cloneNode(true).children;
    for (let i = 0; i < clonedItems.length; i++) {
        const clonedItem = clonedItems[i].cloneNode(true);
        const onClickFunction = sourceUL.children[i].onclick;
        if (onClickFunction) {
            clonedItem.onclick = onClickFunction;
        }
        targetUL.appendChild(clonedItem);
    }
}

function clone(newElement, existingULId) {
    // Find the existing UL element using its ID
    var existingUL = document.getElementById(existingULId);
    if (existingUL && newElement) {
        // Clone the existing UL contents to the new element
        cloneUL(existingUL, newElement);
    } else {
        console.error("Existing UL or new element not found.");
    }
}