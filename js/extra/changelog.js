function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <h2>2.5 - General Update</h2>
            <ul>
                <li>Now if a character is retired the system will properly display their job.</li>
                <li>If a game does not have alive/dead characters it won't display the useless button.</li>
                <li>Added 50 names to the unisex name list for the name generator.</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);