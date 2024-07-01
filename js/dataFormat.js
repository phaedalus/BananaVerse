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
    // Helper function to format dates
    const formatDate = (date, components) => {
        const processedDate = processDate(date, components, true);
        return `${processedDate.month} ${processedDate.day}, ${processedDate.year}`;
    };

    // Helper function to format unformatted dates
    const formatUnformattedDate = (date, components) => {
        const processedDate = processDate(date, components);
        return `${processedDate.month}/${processedDate.day}/${processedDate.year}:${processedDate.hour}:${processedDate.minute}:${processedDate.second}`;
    };

    // Process and format birthday and date of death
    const rawBirthday = new Date(character.birthday);
    const formattedBirthday = formatDate(rawBirthday, ['day', 'month', 'year']);
    const unformattedBirthday = formatUnformattedDate(rawBirthday, ['month', 'day', 'year', 'hour', 'minute', 'second']);
    const rawDeathDate = new Date(character.dateofdeath);
    const formattedDeathDate = formatDate(rawDeathDate, ['day', 'month', 'year']);

    // Process employment details if it's an object
    let job;
    if (typeof character.employment === "object") {
        const rawEmploymentDate = new Date(character.employment.founding);
        const formattedEmploymentDate = formatDate(rawEmploymentDate, ['day', 'month', 'year']);
        const unformattedEmploymentDate = formatUnformattedDate(rawEmploymentDate, ['month', 'day', 'year', 'hour', 'minute', 'second']);

        job = {
            name: character.employment.name,
            type: character.employment.type,
            foundingDate: {
                compNormal: formattedEmploymentDate,
                compSpecific: unformattedEmploymentDate
            },
            founder: character.employment.founder,
            value: character.employment.value
        };
    } else {
        job = character.employment;
    }

    // Process name details
    const decryptedName = nameDecrypt(character.fullname);
    const name = {
        firstName: decryptedName.first,
        middleName: decryptedName.middle,
        lastName: decryptedName.last,
        fullName: character.fullname
    };

    // Construct the character structure
    const structure = {
        name: name,
        birthday: {
            paperNormal: formattedBirthday,
            paperSpecific: unformattedBirthday,
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
        id: character.id,
        alias: character.alias
    };

    return structure;
}

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