

 const words = [ "FACE", "INST", "TWIT", "YTUB", "LINK" ];
  const cubes = document.querySelectorAll('.glitch-cube');

  function rotateRandom() {
    const word = words[Math.floor(Math.random() * words.length)];
    cubes.forEach((cube, i) => {
      // OMIJAMY małpę = ostatni element
      if (i >= word.length || i === 4) return;

      const front = cube.querySelector('.front');
      const back = cube.querySelector('.back');

      back.textContent = word[i];
      cube.classList.add('flipping');
      setTimeout(() => cube.classList.remove('flipping'), 1000);
    });
  }

    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
    });

