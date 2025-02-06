const gta5Button = document.getElementById("gta-5");
gta5Button.addEventListener("click", () => displayCharacters("GTA"));

async function initalLoad() {
    await loadCharacterData();
    gta5Button.click();
}