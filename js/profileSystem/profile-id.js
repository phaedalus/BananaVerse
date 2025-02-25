function Id(character) {
    if (character.game === "GTA" || character.game == "GTA5P5") {
        if (character.dead) {
            return `
                <center><span style="color: darkred; font-family: GTA; text-shadow: 1px 1px solid black; font-size: 48px;">Wasted</span></center>
                <span style="color: black;"><b><center>
                    ${alis2(character)}
                    <span>Left This World On ${formatDate(character.dateofdeath)}</span><br>
                    <span>Lived Until ${calculateAgeAtDeath(character.birthday, character.dateofdeath)}</span><br>
                    <span>Entered This World On ${formatDate(character.birthday)}</span><br>
                    <span>${employmentDeath(character)}</span><br>
                    <span>Worth ${character.networth}</span>
                </b></center></span>
            `
        } else {
            return `
                <span style="color: #243970; font-size: 24px; font-weight: bold;">San Andreas</span>
                <sup style="color: #243970; font-size: 12px; font-weight: bold;">USA</sup>
                <sup style="color: #1A5480; font-weight: bold; margin-left: 45px;">DRIVER LICENSE</sup>
                <img src="https://www.dmv.ca.gov/portal/uploads/2023/02/Golden_bear.png" style="width: 45px; height: 27px;">
                <hr style="border: 1.4px solid #D4B337; width: 95%; margin-left: 15px; margin-bottom: 1.9px;">
                <hr style="border: 1.4px solid #D4B337; width: 63%; margin-left: 134px; margin-right: 0px;">
                ${handleNick(character)}
                <span style="color: #1A5480; position: absolute; left: 36%; top: 43.5%; font-weight: bold; font-size: 13px;">MN <span style="font-size: 13px; color: black">${splitNameS(character.fullname).middle}</span></span>
                <span style="color: #1A5480; position: absolute; left: 36%; top: 49.5%; font-weight: bold; font-size: 13px;">FN <span style="font-size: 13px; color: black">${splitNameS(character.fullname).last}</span></span>
                <span style="color: black; position: absolute; left: 36%; top: 56.2%; font-size: 13px;"><b>${character.hometown}<b></span>
                <span style="color: #1A5480; position: absolute; left: 36%; top: 62.9%; font-weight: bold; font-size: 13px;">DOB <span style="font-size: 13px; color: #AD2B29">${formatDateFromString(character.birthday)} (${calculateAge(character.birthday)})</span></span>
                <span style="color: #1A5480; position: absolute; left: 36%; top: 69.9%; font-size: 12px;"><b>SEX <b> <span style="color: black; font-size: 13px;">${genderLetter(character)}</span></span>
                <span style="color: #1A5480; position: absolute; left: 36%; top: 76.1%; font-size: 12px;"><b>HGT <b> <span style="color: black; font-size: 13px;">${formatHeightFromString(character.height)}</span></span>
                <span style="color: #1A5480; position: absolute; left: 36%; top: 82.3%; font-size: 12px;"><b>WGT <b> <span style="color: black; font-size: 13px;">${character.weight} lb</span></span>
                <span style="color: #1A5480; position: absolute; left: 70%; font-size: 12px;"><b>HAIR <b> <span style="color: black; font-size: 13px;">${shortenColor(character.hair)}</span></span>
                <span style="color: #1A5480; position: absolute; left: 70%; top: 43.5%; font-size: 12px;"><b>EYES <b> <span style="color: black; font-size: 13px;">${shortenColor(character.eye)}</span></span>
                ${employment(character)}
                <span style="color: #1A5480; position: absolute; right: 2%; bottom: 2%; font-size: 18px;"><b>${character.playedby}<b></span>
                <img src="${genderPFP(character)}" style="width: 124px; position: absolute; top: 30%;">
                <br><br><br><br><br><br>
                <span style="color: black; font-family: MSD; font-size: 23px; position: absolute; bottom: 2%;">${splitNameFL(character.fullname)}</span>
            `
        }
    } else if (character.game === "RDR") {
        return `
            <center>
                <span style="color: black; font-family: RDR; font-size: 48px;">★WANTED★</span><br>
                <span style="color: black; font-family: RDR; font-size: 32px;">We be wanting, ${character.fullname}<br> for being a ${character.employment}</span><br>
                ${redGen(character)}<br>
                <span style="color: black; font-family: RDR; font-size: 20px;">They have ${character.hair}ish colored hair and ${character.eye}ish eyes.</span><br>
                <span style="color: black; font-family: RDR; font-size: 20px;">They were born about ${formatDate(character.birthday)}, in the town of ${character.hometown}.</span><br>
                <span style="color: black; font-family: RDR; font-size: 26px;">Bounty Worth is ${character.networth}</span><br>
                <span style="color: black; font-family: RDR; font-size: 20px;">Farewell, Sherif ${character.playedby}</span>
            </center>
        `
    } else if (character.game === "ACU") {
        return `
            <span style="font-family: ACU; font-size: 20px;">Animus Data: Subject (${character.fullname})</span><br>
            <center>
                <ul>
                    <li>Birthdate - ${character.birthday}</li>
                    <li>Affiliation - ${character.employment}</li>
                    <li>Gender - ${character.gender}</li>
                    <li>Relative - ${character.playedby}</li>
                    <li>Weight - ${character.weight}</li>
                    <li>Height - ${character.height}</li>
                    <li>Eye Color - ${character.eye}</li>
                    <li>Hair Color - ${character.hair}</li>
                </ul>
            </center>
        `
    } else if (character.game === "GRB") {
        if (character.dead) {
            return `<center><span style="color: darkred; font-family: EURO; text-shadow: 1px 1px solid black; font-size: 48px;">K.I.A</span></center>
                <span style="color: black;"><b><center>
                    ${alis2(character)}
                    <span>Left This World On ${formatDate(character.dateofdeath)}</span><br>
                    <span>Lived Until ${calculateAgeAtDeath(character.birthday, character.dateofdeath)}</span><br>
                    <span>Entered This World On ${formatDate(character.birthday)}</span><br>
                    <span>${employmentDeath(character)}</span><br>
                    <span>Worth ${character.networth}</span>
                </b></center></span>`;
        } else {
            if (character.employment === "U.S. Military") {
                return `
                    <center><img src="https://static1.squarespace.com/static/5114787ee4b0807f570d7372/t/5e45d1e02953433a2a1e0ee2/1581634018172/CIA+Logo.png?format=1500w" style="width: 60px; height: 60px;"></center>
                    <center><span style="font-family: CIA; color: black; margin-bottom: 4px;">Central Intellegence Agency</span></center><br>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr);">
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>First Name</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${splitNameS(character.fullname).first}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Middle Name</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${splitNameS(character.fullname).middle}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Last Name</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${splitNameS(character.fullname).last}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Alias</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.alias}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Gender</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.gender}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Handler</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.playedby}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Height</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${formatHeightFromString(character.height)}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Weight</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.weight} lbs</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Eye Color</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${shortenColor(character.eye)}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Hair Color</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${shortenColor(character.hair)}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Birthdate</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.birthday} (${calculateAge(character.birthday)})</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Divison</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.branch.toUpperCase()}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Unit</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.unit.toUpperCase()}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Unit Number</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.unitnumber.toUpperCase()}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Home Location</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.hometown}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Value</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.networth}</span>
                        </div>
                        <div style="font-family: CIA; color: black; border: 1px solid black; padding: 5px;">
                            <span>Years Served</span><br>
                            <span style="color: darkred; border: 2px solid darkred;">${character.yearsserved}</span>
                        </div>
                    </div>
                `
            } else {
                return `
                    <img src="https://www.ghostrecon.net/forums/uploads/monthly_2019_05/skell-technology.png.e584961bdb49d8c88721f409afc5454b.png" style="width: 250px; height: 55px;">
                    <hr style="border: 1.4px solidrgb(27, 27, 27);">
                    ${alias(character)}
                    <span style="color: black"><b>${character.employment}</b> - Est Worth ${character.networth}</span><br>
                    <span style="color: black"><b>Born On ${formatDate(character.birthday)}</b> - ${calculateAge(character.birthday)}</span><br>
                    <span style="color: black"><b>Build</b> - ${formatHeightFromString(character.height)}/${character.weight} lbs</span><br>
                    <span style="color: black"><b>Hair Color</b> - ${character.hair.toUpperCase()}</span><br>
                    <span style="color: black"><b>Eye Color</b> - ${character.eye.toUpperCase()}</span><br>
                    <span style="color: black"><b>Assigned To</b> - ${character.playedby}</span><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                `;
            }
        }
    }
}