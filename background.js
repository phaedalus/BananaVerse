// Bakckground's Path's
var options = ["./Backgrounds/bridge.jpg", "./Backgrounds/chase.jpg", "./Backgrounds/chase.jpg",
	"./Backgrounds/chase2.jpg", "./Backgrounds/cliff.jpg", "./Backgrounds/downtown.jpg",
	"./Backgrounds/far1.jpg", "./Backgrounds/highway1.jpg", "./Backgrounds/oldcasino.jpg",
	"./Backgrounds/route68.jpg", "./Backgrounds/skyline.jpg"];

// Pick Random From List
function pickRando(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Initalize Background
window.onload = function() {
    const background = pickRando(options);
    document.body.style.background = `url(${background}) no-repeat center/cover`;
}