function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center style="user-select: none;">
            <h2>2.8 - Venus</h2>
            <ul>
                <li>Optimized project structure for the profile update.</li>
                <li>Version number now displayed in the bottom left corner.</li>
                <li>Thanks for reading—stay tuned for more updates! :)</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);