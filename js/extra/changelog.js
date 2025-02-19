function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <h2>2.6 - Talios</h2>
            <ul>
                <li>Name Generator has a much larger data set allowing more names!</li>
                <li>HEX renamed to CCSE</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);