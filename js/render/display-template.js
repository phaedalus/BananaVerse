function displayCharacters(gameAbr) {
    hidePopup();

    let hasAlive = sortedCharacters[gameAbr].alive.length > 0;
    let hasDead = sortedCharacters[gameAbr].dead.length > 0;

    document.getElementById("display").innerHTML = `
        <center>
            ${hasAlive ? '<button id="aliveButton" class="alive-dead-buttons">Alive</button>' : ''}
            ${hasDead ? '<button id="deadButton" class="alive-dead-buttons">Dead</button>' : ''}
        </center>
        <br><br>
        <center>
            <input type="text" id="searchBar" class="search-bar" placeholder="Search character..." oninput="filterCharacters('${gameAbr}')">
            <ul id="${gameAbr}-Alive" style="display: none;"></ul>
            <ul id="${gameAbr}-Dead" style="display: none;"></ul>
        </center>
    `;
    renderGame(gameAbr);

    if (hasAlive && document.getElementById('aliveButton')) {
        document.getElementById('aliveButton').addEventListener('click', function() {
            document.getElementById(`${gameAbr}-Alive`).style.display = 'block';
            document.getElementById(`${gameAbr}-Dead`).style.display = 'none';
            document.getElementById('aliveButton').classList.add('active-button');
            document.getElementById('deadButton')?.classList.remove('active-button');
            document.getElementById('deadButton')?.classList.add('inactive-button');
            document.getElementById('aliveButton').classList.remove('inactive-button');
        });
    }

    if (hasDead && document.getElementById('deadButton')) {
        document.getElementById('deadButton').addEventListener('click', function() {
            document.getElementById(`${gameAbr}-Alive`).style.display = 'none';
            document.getElementById(`${gameAbr}-Dead`).style.display = 'block';
            document.getElementById('deadButton').classList.add('active-button');
            document.getElementById('aliveButton')?.classList.remove('active-button');
            document.getElementById('aliveButton')?.classList.add('inactive-button');
            document.getElementById('deadButton').classList.remove('inactive-button');
        });
    }

    if (hasAlive) {
        document.getElementById('aliveButton')?.click();
    } else if (hasDead) {
        document.getElementById('deadButton')?.click();
    }
}

function filterCharacters(gameAbr) {
    let query = document.getElementById("searchBar").value.toLowerCase();

    ['Alive', 'Dead'].forEach(status => {
        let list = document.getElementById(`${gameAbr}-${status}`);
        let items = list.getElementsByTagName("li");

        for (let item of items) {
            let fullname = (item.dataset.fullname || "").toLowerCase();
            let gender = (item.dataset.gender || "").toLowerCase();
            let playedby = (item.dataset.playedby || "").toLowerCase();
            let employment = (item.dataset.employment || "").toLowerCase();
            let alias = (item.dataset.alias || "").toLowerCase();
            let retired = item.innerHTML.includes('fa-umbrella-beach');

            let matches = fullname.includes(query) || 
                          gender.includes(query) || 
                          playedby.includes(query) ||
                          employment.includes(query) ||
                          alias.includes(query) ||
                          (retired && query.includes("retired"));

            if (matches) {
                let highlightedName = item.dataset.fullname.replace(new RegExp(query, "gi"), (match) => `<b>${match}</b>`);
                let highlightedAlias = item.dataset.alias.replace(new RegExp(query, "gi"), (match) => `<b>${match}</b>`);
                
                let nameText = item.dataset.alias 
                    ? `${highlightedName} (${highlightedAlias})` 
                    : highlightedName;

                if (retired) {
                    nameText += ' <i class="fa-solid fa-umbrella-beach"></i>';
                }

                item.innerHTML = nameText;
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
}