function displayCharacters(gameAbr) {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <button id="aliveButton" class="alive-dead-buttons">Alive</button>
            <button id="deadButton" class="alive-dead-buttons">Dead</button>
        </center>
        <br><br>
        <center>
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