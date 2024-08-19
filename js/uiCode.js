// UI Code Version 1.0.0final - Tru3

// Add event listener to the entire document to handle clicks
document.addEventListener('click', function(event) {
    const navItems = document.querySelectorAll('.nav-item');
    let clickedInsideNavItem = false;

    // Check if the click occurred inside a 'nav-item'
    navItems.forEach(item => {
        if (item.contains(event.target)) {
            clickedInsideNavItem = true;
            if (!item.classList.contains('active')) {
                closeAllSubMenus();
                item.classList.add('active');
            }
        }
    });

    // If the click occurred outside of 'nav-item', close all sub-menus
    if (!clickedInsideNavItem) {
        closeAllSubMenus();
    }
});

// Toggle the 'active' class on the given element
function toggleMenu(element) {
    element.classList.toggle('active');
}

// Close all sub-menus by removing the 'active' class from all 'nav-items'
function closeAllSubMenus() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
}

// Handle selecting a sub-item, stopping propagation and closing all sub-menus
function selectSubItem(event) {
    event.stopPropagation();
    closeAllSubMenus();
}

var feed = document.getElementById("feed");

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

// Render game content by cloning and displaying the relevant UL element
function game_render(game) {
    console.log(game);
    selectSubItem(event);

    var char_ul_alive = document.createElement("ul");
    var char_ul_dead = document.createElement("ul");

    clone(char_ul_alive, `characters-${game}-alive`);
    clone(char_ul_dead, `characters-${game}-dead`);

    var feed = document.getElementById("feed");
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

    var characterList = document.getElementById("characterList");
    if (!characterList) {
        console.error('characterList element not found');
        return;
    }

    if (game == "gta" || game == "grb") {
        characterList.appendChild(char_ul_alive);
    } else if (game == "rdr" || game == "acu") {
        characterList.appendChild(char_ul_dead);
    }

    var aliveButton = document.getElementById("alive");
    var deadButton = document.getElementById("dead");

    if (game == "gta") {
        aliveButton.style.fontFamily = "pricedown";
        deadButton.style.fontFamily = "pricedown";
        deadButton.classList.remove("adba");
    } else if (game == "grb") {
        aliveButton.style.fontFamily = "euro";
        deadButton.classList.add("hide");
        deadButton.classList.remove("adba");
    } else if (game == "acu") {
        deadButton.style.fontFamily = "assassin";
        aliveButton.classList.add("hide");
        deadButton.classList.add("adba");
    } else if (game == "rdr") {
        deadButton.style.fontFamily = "rdr";
        deadButton.classList.add("adba");
        aliveButton.classList.add("hide");
    }

    if (!aliveButton || !deadButton) {
        console.error('Button elements not found');
        return;
    }

    aliveButton.addEventListener('click', function() {
        characterList.innerHTML = '';
        characterList.appendChild(char_ul_alive);
        aliveButton.classList.add("adba");
        deadButton.classList.remove("adba");
    });

    deadButton.addEventListener('click', function() {
        characterList.innerHTML = '';
        characterList.appendChild(char_ul_dead);
        deadButton.classList.add("adba");
        aliveButton.classList.remove("adba");
    });
}

// Render extra HTML content in the feed
function extra_render(extra_html_content) {
    selectSubItem(event);
    feed.innerHTML = ``;
    feed.innerHTML = extra_html_content;
}

// Render the Love Arcade interface
function lovearcade() {
    extra_render(`
    <center>
        <br><br><br>
        <div class="love-arcade">
            <h1 id="love-title">Love Arcade</h1>
            <select id="gameSelect" onchange="handleSelectChange()">
                <option value="GTA">Grand Theft Auto V</option>
                <option value="GRB">Ghost Recon Breakpoint</option>
                <option value="ACU">Asssassin's Creed Unity</option>
                <option value="RDR">Red Dead Redemption 2</option>
            </select><br><br>
            <button id="runButton">Run It Back!</button>
            <p id="percent" class="compatibility"></p>
            <p id="compatibility" class="compatibility"></p>
            <span id="love-ch1" class="character"></span>
            <span id="love-ch2" class="character"></span>
        </div>
    </center>`);
    
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

// Render the Name Generator interface
function namegeneration() {
    selectSubItem(event);
    extra_render(`
    <br><br><br>
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
    `);

    document.getElementById('generateBtn').addEventListener('click', generateAndDisplayName);
    document.getElementById('genderSelect').addEventListener('change', generateAndDisplayName);
    generateAndDisplayName();
}

// Render changelog
function changelog() {
    selectSubItem(event);
    extra_render(`
        <center>
            <br><br><br><br>
            <ul class="changelog">
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