function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <h2>2.4 - Character Search</h2>
            <ul>
                <li>A long requested feature.</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);