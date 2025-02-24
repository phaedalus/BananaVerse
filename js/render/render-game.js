function renderGame(gameAbr) {
    let gameA = sortedCharacters[gameAbr].alive;
    let gameD = sortedCharacters[gameAbr].dead;
    let gameAliveList = document.getElementById(`${gameAbr}-Alive`);
    let gameDeadList = document.getElementById(`${gameAbr}-Dead`);
    
    gameAliveList.innerHTML = '';
    gameDeadList.innerHTML = '';

    gameA.forEach((character) => {
        let li = document.createElement("li");
        let nameText = character.alias 
            ? `${character.fullname} (${character.alias})` 
            : character.fullname;

        if (character.retired) {
            nameText += ' <i class="fa-solid fa-umbrella-beach"></i>';
        }

        li.dataset.fullname = character.fullname || "";
        li.dataset.gender = character.gender || "";
        li.dataset.playedby = character.playedby || "";
        li.dataset.employment = character.employment || "";
        li.dataset.alias = character.alias || "";

        li.innerHTML = nameText;
        li.onclick = () => openProfile(character);
        gameAliveList.appendChild(li);
    });

    gameD.forEach((character) => {
        let li = document.createElement("li");
        let nameText = character.alias 
            ? `${character.fullname} (${character.alias})` 
            : character.fullname;
        
        if (character.retired) {
            nameText += ' <i class="fa-solid fa-umbrella-beach"></i>';
        }

        li.dataset.fullname = character.fullname || "";
        li.dataset.gender = character.gender || "";
        li.dataset.playedby = character.playedby || "";
        li.dataset.employment = character.employment || "";
        li.dataset.alias = character.alias || "";

        li.innerText = nameText;
        li.onclick = () => openProfile(character);
        gameDeadList.appendChild(li);
    });
}