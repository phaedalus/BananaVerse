function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center style="user-select: none;">
            <h2>3.1 - Ypatos</h2>
            <ul>
                <li>Enhanced profile image loading efficiency.</li>
                <li>Fixed an issue where the search bar did not display retired users or nicknames.</li>
                <li>Added relationship status display on profiles.</li>
                <li>Implemented a loading wheel when the name generator is rendering.</li>
                <li>Disabled image dragging on the logo.</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);