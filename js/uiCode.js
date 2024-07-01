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
    selectSubItem(event);
    var char_ul_alive = document.createElement("ul");
    var char_ul_dead = document.createElement("ul");
    clone(char_ul_alive, `characters-${game}-alive`);
    clone(char_ul_dead, `characters-${game}-dead`);
    feed.innerHTML = '';
    feed.appendChild(char_ul_alive);
    feed.appendChild(char_ul_dead);
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