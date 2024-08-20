// Handle document-wide click events
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

// Toggle 'active' class on an element
function toggleMenu(element) {
    element.classList.toggle('active');
}

// Remove 'active' class from all 'nav-items'
function closeAllSubMenus() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

// Handle sub-item selection, stop event propagation and close all sub-menus
function selectSubItem(event) {
    event.stopPropagation();
    closeAllSubMenus();
}

const feed = document.getElementById("feed");

function cloneUL(sourceUL, targetUL) {
    Array.from(sourceUL.children).forEach((child, index) => {
        const clonedItem = child.cloneNode(true);
        const onClickFunction = child.onclick;
        if (onClickFunction) {
            clonedItem.onclick = onClickFunction;
        }
        targetUL.appendChild(clonedItem);
    });
}

function clone(newElement, existingULId) {
    const existingUL = document.getElementById(existingULId);
    if (existingUL && newElement) {
        cloneUL(existingUL, newElement);
    } else {
        console.error("Existing UL or new element not found.");
    }
}

function game_render(game) {
    selectSubItem(event);

    const char_ul_alive = document.createElement("ul");
    const char_ul_dead = document.createElement("ul");

    clone(char_ul_alive, `characters-${game}-alive`);
    clone(char_ul_dead, `characters-${game}-dead`);

    const feed = document.getElementById("feed");
    if (!feed) {
        console.error('Feed element not found');
        return;
    }

    feed.innerHTML = `
    <br><br>
    <center>
        <button id="alive" class="adb adba">Alive</button>
        <button id="dead" class="adb">Dead</button>
    </center>
    <br>
    <center>
        <div id="characterList"></div>
    </center>`;

    const characterList = document.getElementById("characterList");
    if (!characterList) {
        console.error('characterList element not found');
        return;
    }

    if (["gta", "grb"].includes(game)) {
        characterList.appendChild(char_ul_alive);
    } else if (["rdr", "acu"].includes(game)) {
        characterList.appendChild(char_ul_dead);
    }

    const aliveButton = document.getElementById("alive");
    const deadButton = document.getElementById("dead");

    if (aliveButton && deadButton) {
        const gameSettings = {
            gta: { aliveFont: "pricedown", deadFont: "pricedown", hideDead: false },
            grb: { aliveFont: "euro", hideDead: true },
            acu: { deadFont: "assassin", hideAlive: true },
            rdr: { deadFont: "rdr", hideAlive: true }
        };

        const settings = gameSettings[game];

        if (settings) {
            if (settings.aliveFont) aliveButton.style.fontFamily = settings.aliveFont;
            if (settings.deadFont) deadButton.style.fontFamily = settings.deadFont;
            if (settings.hideDead) deadButton.classList.add("hide");
            if (settings.hideAlive) aliveButton.classList.add("hide");
        }

        aliveButton.addEventListener('click', () => {
            characterList.innerHTML = '';
            characterList.appendChild(char_ul_alive);
            aliveButton.classList.add("adba");
            deadButton.classList.remove("adba");
        });

        deadButton.addEventListener('click', () => {
            characterList.innerHTML = '';
            characterList.appendChild(char_ul_dead);
            deadButton.classList.add("adba");
            aliveButton.classList.remove("adba");
        });
    } else {
        console.error('Button elements not found');
    }
}

function extra_render(extra_html_content) {
    selectSubItem(event);
    feed.innerHTML = extra_html_content;
}

function lovearcade() {
    extra_render(`
    <center>
        <br><br><br>
        <div class="love-arcade">
            <h1 id="love-title">Love Arcade</h1>
            <select id="gameSelect" onchange="generateCompatibility()">
                <option value="GTA">Grand Theft Auto V</option>
                <option value="GRB">Ghost Recon Breakpoint</option>
                <option value="ACU">Assassin's Creed Unity</option>
                <option value="RDR">Red Dead Redemption 2</option>
            </select><br><br>
            <button id="runButton" onclick="generateCompatibility()">Run It Back!</button>
            <p id="percent" class="compatibility"></p>
            <p id="compatibility" class="compatibility"></p>
            <span id="love-ch1" class="character"></span><br><br><br>
            <span id="love-ch2" class="character"></span>
        </div>
    </center>`);

    generateCompatibility();
}

function namegeneration() {
    selectSubItem(event);
    extra_render(`
    <br><br><br>
    <center>
        <div class="name-generator">
            <h2>Name Generator</h2>
            <select id="genderSelect" onchange="generateAndDisplayName()">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select><br>
            <button id="generateBtn" onclick="generateAndDisplayName()">Generate New Name</button>
            <strong><h1 id="fullName"></h1></strong>
        </div>
    </center>
    `);

    generateAndDisplayName();
}

function changelog() {
    selectSubItem(event);
    extra_render(`
        <center>
            <br><br><br><br>
            <ul class="changelog">
                <li><b>1.5.5 - Minor Update 2</b></li>
                <ul>
                    <li>Added a switch to sort character names alphabetically.</li>
                    <li>Changed the default name display to sort by last name.</li>
                </ul><br>
                <li><b>1.5.4 - Small Profile Update 2</b></li>
                <ul>
                    <li>Changed the job output display to better accommodate all variables.</li>
                    <li>Changed the colors of dead character profiles.</li>
                </ul><br>
                <li><b>1.5.3 - Small Profile Update/Bug Fix</b></li>
                <ul>
                    <li>Added more colors to character stats in profiles for better visibility and overall aesthetic appeal.</li>
                    <li>Implemented a more efficient method for displaying characters' genders in their profiles.</li>
                    <li>Corrected Alice Green's character data to accurately reflect her as alive and female.</li>
                </ul><br>
                <li><b>1.5h1m1 - Minor Update</b></li>
                <ul>
                    <li>Added keyboard shortcuts for desktop users.</li>
                </ul><br>
                <li><b>1.5h1 - Hotfix</b></li>
                <ul>
                    <li>Fixed text and button clipping in the Love Arcade.</li>
                </ul><br>
                <li><b>1.5 - Quality of Life Update</b></li>
                <ul>
                    <li>Added 'Alive/Dead' buttons to allow for easier navigation through character lists.</li>
                    <li>Added unique fonts to the 'Alive/Dead' buttons, depending on the game.</li>
                    <li>Improved detection of 'Alive/Dead' buttons to optimize rendering power.</li>
                    <li>Added characters' games to the Love Arcade.</li>
                    <li>Updated the Love Arcade's UI.</li>
                </ul>
            </ul>
        </center>
    `);
}