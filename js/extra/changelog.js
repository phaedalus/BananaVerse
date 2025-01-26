function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <h2>2.2 - New Frontiers</h2>
            <ul>
                <li>Alias' make the return!</li>
                <li>Support for GTA5 PS5 Version!</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);