function renderGame(gameAbr) {
    let gameA = sortedCharacters[gameAbr].alive;
    let gameD = sortedCharacters[gameAbr].dead;
    let gameAliveList = document.getElementById(`${gameAbr}-Alive`);
    let gameDeadList = document.getElementById(`${gameAbr}-Dead`);
    
    gameA.forEach((character, index) => {
        let li = document.createElement("li");
        li.innerText = character.alias 
            ? `${character.fullname} (${character.alias})` 
            : character.fullname;
        li.onclick = () => openProfile(character);
        gameAliveList.appendChild(li);
    });

    gameD.forEach((character, index) => {
        let li = document.createElement("li");
        li.innerText = character.alias 
            ? `${character.fullname} (${character.alias})` 
            : character.fullname;
        li.onclick = () => openProfile(character);
        gameDeadList.appendChild(li);
    });
}