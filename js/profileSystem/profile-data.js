function genderPFP(character) {
    if (character.gender === "Male") {
        return 'https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg';
    } else if (character.gender === "Female") {
        return 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg';
    }
}

function splitNameFL(fullName) {
    const parts = fullName.trim().split(/\s+/);
    const firstName = parts[0] || "";
    const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
    return `${firstName} ${lastName}`;
}

function splitNameS(fullName) {
    const nameParts = fullName.trim().split(/\s+/);
    
    if (nameParts.length === 1) {
        return { first: nameParts[0], middle: "", last: "" };
    } else if (nameParts.length === 2) {
        return { first: nameParts[0], middle: "", last: nameParts[1] };
    } else {
        const first = nameParts[0];
        const last = nameParts[nameParts.length - 1];
        const middle = nameParts.slice(1, nameParts.length - 1).join(" ");
        return { first, middle, last };
    }
}

function formatDateFromString(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${parseInt(month)}/${parseInt(day)}/${year}`;
}

function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function genderLetter(character) {
    if (character.gender === "Male") {
        return 'M';
    } else if (character.gender === "Female") {
        return 'F';
    }
}

function formatHeightFromString(heightStr) {
    let match = heightStr.match(/^(\d+)'(\d{1,2})"?$/);
    if (!match) return "Invalid format";

    let feet = parseInt(match[1], 10);
    let inches = parseInt(match[2], 10);

    return `${feet}'-${inches.toString().padStart(2, '0')}"`;
}

function handleNick(character) {
    if (character.alias) {
        return `<span style="color: #1A5480; position: absolute; left: 36%; font-weight: bold; font-size: 13px;">LN <span style="font-size: 13px; color: black">${splitNameS(character.fullname).first}</span><span style="color: #AD2B29;"> (${character.alias})</span></span>`;
    } else {
        return `<span style="color: #1A5480; position: absolute; left: 36%; font-weight: bold; font-size: 13px;">LN <span style="font-size: 13px; color: black">${splitNameS(character.fullname).first}</span></span>`;
    }
}

function shortenColor(color) {
    const colorMap = {
        "Black": "BK",
        "Brown": "BR",
        "Blonde": "BL",
        "Red": "RD",
        "Auburn": "AB",
        "Gray": "GY",
        "White": "WT",
        "Blue": "BLU",
        "Green": "GRN",
        "Pink": "PNK",
        "Purple": "PPL",
        "Orange": "ORG"
    };

    return colorMap[color] || color.substring(0, 3).toUpperCase();
}

function employment(character) {
    if (character.employment != "U.S. Military") {
        if (character.retired) {
            return `<span style="color: #1A5480; position: absolute; left: 70%; top: 49.5%; font-size: 13px;"><b>RETIRED</b></span>
            <span style="color: #1A5480; position: absolute; left: 70%; top: 56.2%; font-size: 12px;"><b>NW <b> <span style="color: black; font-size: 13px;">${character.networth}</span></span>`;
        } else {
            if (character.employment.length > 15) {
                return `<span style="color: #1A5480; position: absolute; left: 70%; top: 49.5%; font-size: 12px;"><b>EMP <b> <span style="color: black; font-size: 13px;">${character.employment}</span></span>
            <span style="color: #1A5480; position: absolute; left: 70%; top: 63.5%; font-size: 12px;"><b>NW <b> <span style="color: black; font-size: 13px;">${character.networth}</span></span>`;
            } else {
                return `<span style="color: #1A5480; position: absolute; left: 70%; top: 49.5%; font-size: 12px;"><b>EMP <b> <span style="color: black; font-size: 13px;">${character.employment}</span></span>
            <span style="color: #1A5480; position: absolute; left: 70%; top: 56.2%; font-size: 12px;"><b>NW <b> <span style="color: black; font-size: 13px;">${character.networth}</span></span>`;
            }
        }
    }
}

function redGen(character) {
    if (character.gender == "Male") {
        return `<span style="color: black; font-family: RDR; font-size: 20px;">He's a man standing around ${character.height} and the fella weighs about ${character.weight} pounds.</span>`;
    } else if (character.gender == "Female") {
        return `<span style="color: black; font-family: RDR; font-size: 20px;">She's a woman standing around ${character.height} and she weighs about ${character.weight} pounds.</span>`;
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function alias(character) {
    if (character.alias) {
        return `<span style="color: black"><b>${character.fullname} (${character.alias})</b> - ${character.gender}</span><br>`;
    } else {
        return `<span style="color: black"><b>${character.fullname}</b> - ${character.gender}</span><br>`
    }
}

function calculateAgeAtDeath(birthDate, deathDate) {
    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    
    let ageAtDeath = death.getFullYear() - birth.getFullYear();
    const monthDifference = death.getMonth() - birth.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && death.getDate() < birth.getDate())) {
        ageAtDeath--;
    }
    
    return ageAtDeath;
}

function alis2(character) {
    if (character.alias) {
        return `<span>${character.fullname} (${character.alias})</span><br>`;
    } else {
        return `<span>${character.fullname}</span><br>`;
    }
}

function employmentDeath(character) {
    if (character.retired) {
        return `They Were Retired.`;
    } else {
        return `${character.employment}`;
    }
}

function relationship(character) {
    if (character.relationshipstatus == "Single") {
        return `Single`;
    } else if (character.relationshipstatus == "In a relationship") {
        if (character.playerrelation) {
            if (character.playerrelated) {
                return `In a relationship with ${playerrelated}`;
            } else {
                return 'Null';
            }
        } else {
            return 'In a relationship';
        }
    } else if (character.relationshipstatus == "Engaged") {
        if (character.playerrelation) {
            if (character.playerrelated) {
                return `Engaged to ${playerrelated}`;
            } else {
                return 'Null';
            }
        } else {
            return 'Engaged';
        }
    } else if (character.relationshipstatus == "Married") {
        if (character.playerrelation) {
            if (character.playerrelated) {
                return `Married to ${playerrelated}`;
            } else {
                return 'Null';
            }
        } else {
            return 'Married';
        }
    } else if (character.relationshipstatus == "Divorced") {
        return 'Divorced';
    } else if (character.relationship == "Widowed") {
        return 'Widowed';
    } else if (character.relationshipstatus == "It's complicated") {
        return "It's complicated";
    } else {
        return "Prefer not to say";
    }
}

function rel(relationship, character) {
    if (character.employment.length > 15 && (character.game === "GTA" || character.game === "GTA5P5")) {
        return `<span style="color: #1A5480; position: absolute; left: 70%; top: 69.4%; font-size: 12px;"><b>RELATION </b> <span style="color: black; font-size: 13px;">${relationship}</span></span>`;
    } else if (character.game === "GTA" || character.game === "GTA5P5") {
        return `<span style="color: #1A5480; position: absolute; left: 70%; top: 62.9%; font-size: 12px;"><b>RELATION </b> <span style="color: black; font-size: 13px;">${relationship}</span></span>`;
    }
}