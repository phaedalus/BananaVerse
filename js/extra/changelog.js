function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center style="user-select: none;">
            <h2>2.9 - Wendigo</h2>
            <ul>
                <li>BananaVerse is now a Progressive Web App (PWA)!</li>
                <li>Thanks for reading—stay tuned for more updates! :)</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);