const gamesBtn = document.getElementById('games-btn');
const extrasBtn = document.getElementById('extras-btn');
const gamesPopup = document.getElementById('games-popup');
const extrasPopup = document.getElementById('extras-popup');

function togglePopup(popup) {
    const isVisible = popup.style.display === 'block';
    gamesPopup.style.display = 'none';
    extrasPopup.style.display = 'none';
    popup.style.display = isVisible ? 'none' : 'block';
}

gamesBtn.addEventListener('click', () => togglePopup(gamesPopup));
extrasBtn.addEventListener('click', () => togglePopup(extrasPopup));

document.addEventListener('click', (event) => {
    if (!gamesBtn.contains(event.target) && !gamesBtn.contains(event.target)) {
        gamesPopup.style.display = 'none';
    }
    if (!extrasBtn.contains(event.target) && !extrasPopup.contains(event.target)) {
        extrasPopup.style.display = 'none';
    }
});

function hidePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
}