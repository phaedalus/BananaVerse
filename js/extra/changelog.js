function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <h2>2.0 - Overhaul Bacchus</h2>
            <ul>
                <li>The codebase has been reworked for ease of development.</li>
                <li>Added Dark Mode.</li>
                <li>Slight UI tweaks.</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);