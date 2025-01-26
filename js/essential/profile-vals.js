function determineGender(characterGen) {
    if (characterGen == "Male") {
        return `<i class="fa-solid fa-mars male gender"></i>`;
    } else if (characterGen == "Female") {
        return `<i class="fa-solid fa-venus female gender"></i>`;
    }
}

function calculateCharacterAge(character, game) {
    const today = new Date();
    let referenceDate = today;

    const birthday = new Date(character.birthday);
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDay = birthday.getDate();

    if (character.died) {
        referenceDate = new Date(character.dateOfDeath);
    }

    let referenceYear = referenceDate.getFullYear();
    let referenceMonth = referenceDate.getMonth();
    let referenceDay = referenceDate.getDate();

    if (game === 'GTA') {
        referenceYear -= 1;
    }

    if (game === 'GTA5P5') {
        referenceYear -= 8;
    }

    let ageAtDeathOrReference = referenceYear - birthYear - 
        ((referenceMonth < birthMonth || (referenceMonth === birthMonth && referenceDay < birthDay)) ? 1 : 0);

    return ageAtDeathOrReference;
}

function ageOutput(character) {
    if (character.gender == "Male") {
        if (character.dead) {
            return `Lived until <strong class="dead">${calculateCharacterAge(character, character.game)}</strong> years of age<br>Left this plane on <strong class="dead">${formatDate(character.dateofdeath)}</strong><br>Born on <strong class="female">${formatDate(character.birthday)}</strong>`;
        } else {
            return `<strong class="male">${calculateCharacterAge(character, character.game)}</strong> years old as of <strong class="male">${formatDate(calcCurrentAge(character))}</strong><br>Born on <strong class="male">${formatDate(character.birthday)}</strong>`;
        }
    } else if (character.gender == "Female") {
        if (character.dead) {
            return `Lived until <strong class="dead">${calculateCharacterAge(character, character.game)}</strong> years of age<br>Left this plane on <strong class="dead">${formatDate(character.dateofdeath)}</strong><br>Born on <strong class="male">${formatDate(character.birthday)}</strong>`;
        } else {
            return `<strong class="female">${calculateCharacterAge(character, character.game)}</strong> years old as of <strong class="female">${formatDate(calcCurrentAge(character))}</strong><br>Born on <strong class="female">${formatDate(character.birthday)}</strong>`;
        }
    }
}

function formatDate(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const suffix = day === 1 || day === 21 || day === 31 ? "st" :
                   day === 2 || day === 22 ? "nd" :
                   day === 3 || day === 23 ? "rd" : "th";
  
    return `${month} ${day}${suffix}, ${year}`;
}

function calcCurrentAge(character) {
    const now = new Date();
    if (character.game == "GTA") {
        const lastYear = now.getFullYear() - 1;
        return currentDateLastYear = new Date(lastYear, now.getMonth(), now.getDate());
    } else {
        return now;
    }
}

function jobProcess(character) {
    if (typeof character.employment === "object" && character.employment !== null) {
        if (character.dead) {
            return `They worked for <strong class="job">${character.employment.name}</strong>`;
        } else {
            return `They work for <strong class="job">${character.employment.name}</strong>`;
        }
    } else if (typeof character.employment === "string" && character.employment.length === 0) {
        if (character.dead) {
            return `<strong class="job">Pizza Delivery</strong> is what they did for a living.`;
        } else {
            return `<strong class="job">Pizza Delivery</strong> is what they do for a living.`;
        }
    } else {
        if (character.dead) {
            return `<strong class="job">${character.employment}</strong> is what they did for a living.`
        } else {
            return `<strong class="job">${character.employment}</strong> is what they do for a living.`
        }
    }
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

function getFirstName(fullName) {
    if (!fullName || typeof fullName !== 'string') {
        throw new Error('Please provide a valid full name as a string.');
    }
    const nameParts = fullName.trim().split(' ');
    return nameParts[0];
}

function convertWeight(pounds) {
    const region = navigator.language || "en-US";
    
    const metricRegions = [
      "en-GB", // UK
      "fr",    // France
      "de",    // Germany
      "es",    // Spain
      "zh-CN", // China
      "jp",    // Japan
    ];
  
    const usesMetric = metricRegions.some(metricRegion => region.startsWith(metricRegion));
  
    if (usesMetric) {
      const kg = (pounds * 0.453592).toFixed(2);
      return `${kg} kg`;
    } else {
      return `${pounds} lbs`;
    }
}

function convertHeightFromString(heightStr) {
    if (typeof heightStr !== 'string' || !heightStr.trim()) {
      return "Invalid height format";
    }
  
    const region = navigator.language || "en-US";
  
    const metricRegions = [
      "en-GB", // UK
      "fr",    // France
      "de",    // Germany
      "es",    // Spain
      "zh-CN", // China
      "jp",    // Japan
    ];
  
    const usesMetric = metricRegions.some(metricRegion => region.startsWith(metricRegion));
  
    const feetInchesMatch = heightStr.match(/^(\d+)'(\d+)$/);
    
    if (!feetInchesMatch) {
      return "Invalid height format";
    }
  
    const feet = parseInt(feetInchesMatch[1], 10);
    const inches = parseInt(feetInchesMatch[2], 10);
  
    if (usesMetric) {
      const totalInches = feet * 12 + inches;
      
      const cm = (totalInches * 2.54).toFixed(1);
      return `${cm} cm`;
    } else {
      return `${feet}'${inches}`;
    }
}  