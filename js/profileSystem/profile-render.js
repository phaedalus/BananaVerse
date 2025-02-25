let games = {
    GTA: 'rgba(255, 255, 255, 0.9)',
    RDR: 'rgba(246, 212, 174, 0.9)',
    ACU: 'rgba(116, 122, 118, 0.9)',
    GRB: 'rgba(255, 255, 255, 0.9)'
}

function gameColor(character) {
    if (character.game === "GTA" || character.game == "GTA5P5") {
        return games.GTA;
    } else if (character.game == "RDR") {
        return games.RDR;
    } else if (character.game == "ACU") {
        return games.ACU;
    } else if (character.game == "GRB") {
        return games.GRB;
    }
}

function openProfile(character) {
    let div = document.createElement('div');
    div.classList = 'profile centered-element';
    div.style.backgroundColor = gameColor(character); 
    div.innerHTML = Id(character);
    div.id = 'profile';
    div.onclick = function () {
        div.remove();
    };
    document.body.appendChild(div);
}