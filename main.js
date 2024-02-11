// Version 1.0.0 - Tru3

// Break Apart Name Data
function nameDecrypt(rawName) {
    const nameParts = rawName.split(" ");
    
    const firstName = nameParts[0];
    
    const lastName = nameParts[nameParts.length - 1];
    
    const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : null;
    
    const nameObject = {
        first: firstName,
        middle: middleName,
        last: lastName
    };
    
    return nameObject;
};

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
    const rawDate = character.birthday;
    const components = ['day', 'month', 'year'];
    const processedDate = processDate(rawDate, components, true);
    const formattedDate = `${processedDate.month} ${processedDate.day}, ${processedDate.year}`;
    const componentsun = ['month', 'day', 'year', 'hour', 'minute', 'second'];
    const processedDateUn = processDate(rawDate, componentsun);
    const unformattedDate = `${processedDateUn.month}/${processedDateUn.day}/${processedDateUn.year}:${processedDateUn.hour}:${processedDateUn.minute}:${processedDateUn.second}`;

    var job;
    if (typeof character.employment === "object") {
        const rawDate = character.employment.founding;
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
            lastName: nameDecrypt(character.fullname).last
        },
        birthday: {
            paperNormal: formattedDate,
            paperSpecific: unformattedDate
        },
        gender: character.gender,
        employment: job,
        networth: netWorthHandle(character.networth),
        playedby: character.playedby
    };

    return structure;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.addEventListener("DOMContentLoaded", function() {
    const gtaList = document.getElementById("characters-gta");
    const sortedCharacters = characters.map(loadCharacter).sort((a, b) => {
        const nameA = `${a.name.firstName} ${a.name.lastName}`;
        const nameB = `${b.name.firstName} ${b.name.lastName}`;
        return nameA.localeCompare(nameB);
    });
    
    sortedCharacters.forEach(function(character) {
        const li = document.createElement("li");
        li.innerText = `${character.name.firstName} ${character.name.lastName}`;
        gtaList.appendChild(li);
    });
});