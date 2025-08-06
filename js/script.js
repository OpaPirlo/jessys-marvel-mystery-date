const hints = [
  "🕶️ Het wordt zonnig. Heel zonnig. 😎 Klaar om te shinen?",
  "👙 Je gaat iets doen waarbij nat worden een optie is… of eerder een zekerheid. Vertrouw me, het wordt leuk. 💦",
  "🛂 Venom heeft honger... en hij haat grenscontroles. Neem je paspoort mee. En iets voor onderweg, want het is een rit van bijna twee uur. 🕷️🚗",
  "☕ Opstaan is zwaar… behalve met een kopje magie. 🫖⏰ Dit avontuur begint vroeg!",
  "👗 Fancy hoeft niet. Comfort is key. We gaan een stadje in, en jij wordt mijn mooiste uitzicht. 🏙️👕",
  "🍽️ Deadpool zei ooit: ‘Je kunt geen honger stillen met kogels... maar wel met wat straks op je bord ligt.’ Trek gekregen?",
  "☁️ Zelfs de sterren fluisteren soms jouw naam. ✨ En als dromen de multiverse openen… dan droom jij vast ook over mij. 💫🌀",
  "🎁 Waterspatters. Energie. Spanning. In deze kist vind je geen antwoord, maar een nat avontuur. 🧊💧"
];

const clickSound = document.getElementById('click-sound');

function showHint(index) {
  const hintBox = document.getElementById('hints-box');
  clickSound.currentTime = 0;
  clickSound.play();
  hintBox.textContent = hints[index];
  hintBox.classList.add('show');
  setTimeout(() => {
    hintBox.classList.remove('show');
  }, 6000);
}

function closeIntro() {
  const intro = document.getElementById("intro-modal");
  intro.style.display = "none";
}
