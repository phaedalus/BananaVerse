function displayCharacters(gameAbr) {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <button id="aliveButton" class="alive-dead-buttons">Alive</button>
            <button id="deadButton" class="alive-dead-buttons">Dead</button>
        </center>
        <br><br>
        <center>
            <input type="text" id="searchBar" class="search-bar" placeholder="Search character..." oninput="filterCharacters('${gameAbr}')">
            <ul id="${gameAbr}-Alive" style="display: none;"></ul>
            <ul id="${gameAbr}-Dead" style="display: none;"></ul>
        </center>
    `;
    renderGame(gameAbr);

    document.getElementById('aliveButton').addEventListener('click', function() {
        document.getElementById(`${gameAbr}-Alive`).style.display = 'block';
        document.getElementById(`${gameAbr}-Dead`).style.display = 'none';
        document.getElementById('aliveButton').classList.add('active-button');
        document.getElementById('deadButton').classList.remove('active-button');
        document.getElementById('deadButton').classList.add('inactive-button');
        document.getElementById('aliveButton').classList.remove('inactive-button');
    });

    document.getElementById('deadButton').addEventListener('click', function() {
        document.getElementById(`${gameAbr}-Alive`).style.display = 'none';
        document.getElementById(`${gameAbr}-Dead`).style.display = 'block';
        document.getElementById('deadButton').classList.add('active-button');
        document.getElementById('aliveButton').classList.remove('active-button');
        document.getElementById('aliveButton').classList.add('inactive-button');
        document.getElementById('deadButton').classList.remove('inactive-button');
    });

    document.getElementById('aliveButton').click();
}

function filterCharacters(gameAbr) {
    let query = document.getElementById("searchBar").value.toLowerCase();

    ['Alive', 'Dead'].forEach(status => {
        let list = document.getElementById(`${gameAbr}-${status}`);
        let items = list.getElementsByTagName("li");

        for (let item of items) {
            let text = (item.dataset.fullname || "").toLowerCase();
            let gender = (item.dataset.gender || "").toLowerCase();
            let playedby = (item.dataset.playedby || "").toLowerCase();
            let employment = (item.dataset.employment || "").toLowerCase();
            let alias = (item.dataset.alias || "").toLowerCase();

            let matches = text.includes(query) || 
                          gender.includes(query) || 
                          playedby.includes(query) ||
                          employment.includes(query) ||
                          alias.includes(query);

            if (matches) {
                let highlightedText = item.dataset.fullname.replace(new RegExp(query, "gi"), (match) => `<b>${match}</b>`);
                item.innerHTML = highlightedText;
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
}