
const words = ["FACE", "INST", "TWIT", "YTUB", "LINK", "MAIL", "FAIL", "BOOM", "PLUM", "DOOM", "ZSRR", "SNAX", "404S", "MODE", "SALT", "CHAM", "SPYX", "GLIT"];
const cubes = document.querySelectorAll('.glitch-cube');

// Preload glitch sound
const glitchSound = new Audio('audio/glitch.mp3');
glitchSound.volume = 0.3;

function rotateRandom() {
  const word = words[Math.floor(Math.random() * words.length)];
  glitchSound.currentTime = 0;
  glitchSound.play();

  cubes.forEach((cube, i) => {
    if (i >= word.length || i === 4) return;

    const front = cube.querySelector('.front');
    const back = cube.querySelector('.back');

    back.textContent = word[i];
    cube.classList.add('flipping');
    setTimeout(() => cube.classList.remove('flipping'), 1000);
  });
}

setInterval(rotateRandom, 4000);

// Hamburger menu toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('show');
});


// Zamknij menu po kliknięciu linku (mobile UX)
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('show');
  });
});
