function openProfile(character) {
    let div = document.createElement('div');
    div.classList = 'profile centered-element';
    div.innerHTML = `
        <center>
            <b>${character.fullname}</b> ${determineGender(character.gender)}<br>
            ${ageOutput(character)}<br>
            ${jobProcess(character)}<br>
            Estimated worth <strong class="networth">${netWorthHandle(character.networth)}</strong><br>
            Acted & Created by <strong class="player">${character.playedby}</strong><br>
            ${getFirstName(character.fullname)} approximately weighs <strong class="weight-height">${convertWeight(character.weight)}</strong><br>
            standing at around <strong class="weight-height">${convertHeightFromString(character.height)}</strong>
        </center>
    `;
    div.onclick = function () {
        div.remove();
    };
    document.body.appendChild(div);
}