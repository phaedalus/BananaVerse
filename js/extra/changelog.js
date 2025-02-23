function changelog() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center style="user-select: none;">
            <h2>2.7 - Uranus</h2>
            <ul>
                <li>Fixed annoying height input issues—no more hassle!</li>
                <li>Improved performance: code now runs 0.5ms faster!</li>
                <li>Death Age now displays correctly.</li>
                <li>Routine bug fixes and optimizations.</li>
                <li>ENOS feature added for enhanced functionality.</li>
                <li>Thanks for reading! Stay tuned for more updates :)</li>
            </ul>
        </center>
    `
}

const changelogButton = document.getElementById("changelog");
changelogButton.addEventListener("click", changelog);