let lockedParts = {
    firstName: { isLocked: false },
    middleName: { isLocked: false },
    lastName: { isLocked: false }
};

async function fetchGeneratedName(gender) {
    try {
        const response = await fetch(`https://ccse.onrender.com/generate-name?gender=${gender}`);
        const data = await response.json();
        return data.fullname.split(" ");
    } catch (error) {
        console.error("Error fetching name:", error);
        return ["Unknown", "Unknown", "Unknown"];
    }
}

async function generateName(gender) {
    const nameParts = await fetchGeneratedName(gender);
    
    return {
        firstName: lockedParts.firstName.isLocked ? document.getElementById('firstName').textContent : nameParts[0],
        middleName: lockedParts.middleName.isLocked ? document.getElementById('middleName').textContent : nameParts[1] || "",
        lastName: lockedParts.lastName.isLocked ? document.getElementById('lastName').textContent : nameParts[2] || ""
    };
}

async function generateAndDisplayName() {
    const genderSelect = document.getElementById('genderSelect');
    const gender = genderSelect.options[genderSelect.selectedIndex].value;

    const nameParts = await generateName(gender);

    document.getElementById('firstName').textContent = nameParts.firstName;
    document.getElementById('middleName').textContent = nameParts.middleName;
    document.getElementById('lastName').textContent = nameParts.lastName;

    updateLockIcons();
}

function toggleLock(part) {
    lockedParts[part].isLocked = !lockedParts[part].isLocked;
    updateLockIcons();
}

function updateLockIcons() {
    Object.keys(lockedParts).forEach(part => {
        const lockIcon = document.getElementById(`${part}Lock`);
        lockIcon.classList.toggle('fa-lock', lockedParts[part].isLocked);
        lockIcon.classList.toggle('fa-lock-open', !lockedParts[part].isLocked);
    });
}

function namegenerator() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <div class="name-generator">
                <br><br><br>
                <h2>Name Generator</h2>
                <select id="genderSelect">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br>
                <button id="generateBtn">Generate New Name</button>
                <div>
                    <h1 id="fullName">
                        <span id="firstName" class="name-part" contenteditable="true"></span>
                        <i id="firstNameLock" class="fas fa-lock-open lock-icon"></i><br>
                        <span id="middleName" class="name-part" contenteditable="true"></span>
                        <i id="middleNameLock" class="fas fa-lock-open lock-icon"></i><br>
                        <span id="lastName" class="name-part lastName" contenteditable="true"></span>
                        <i id="lastNameLock" class="fas fa-lock-open lock-icon"></i>
                    </h1>
                </div>
            </div>
        </center>
    `;

    document.getElementById('generateBtn').addEventListener('click', generateAndDisplayName);
    document.getElementById('genderSelect').addEventListener('change', generateAndDisplayName);
    document.getElementById('firstNameLock').addEventListener('click', () => toggleLock('firstName'));
    document.getElementById('middleNameLock').addEventListener('click', () => toggleLock('middleName'));
    document.getElementById('lastNameLock').addEventListener('click', () => toggleLock('lastName'));

    document.querySelectorAll('.name-part').forEach(namePart => {
        namePart.addEventListener('keydown', function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                namePart.blur();
            }
        });

        namePart.addEventListener('blur', function () {
            if (namePart.textContent.trim() === '') {
                namePart.textContent = 'Blank';
            }
        });
    });

    generateAndDisplayName();
}

const generateNameButton = document.getElementById("name-generator");
generateNameButton.addEventListener("click", namegenerator);