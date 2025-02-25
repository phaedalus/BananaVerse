function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center style="user-select: none;">
            <h2>3.0 - Xanthus</h2>
            <ul>
                <li>The profile update!</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);