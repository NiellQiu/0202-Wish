document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove("not-loaded");
  startFireworksLoop(); // Start fireworks immediately after page loads

  const poemLines = document.querySelectorAll('.poem-box .text-line');
  const wishesBox = document.querySelector('.wishes-box');
  const wishesLines = document.querySelectorAll('.wishes-box .text-line');

  let poemIndex = 0;

  // Poem fade-in function
  function showPoem() {
    console.log('showPoem function triggered');
    console.log(poemLines); // Check if lines are correctly selected
    if (poemIndex < poemLines.length) {
      console.log('Displaying line:', poemIndex);
      poemLines[poemIndex].style.visibility = 'visible';
      poemLines[poemIndex].style.opacity = 1;
      poemLines[poemIndex].classList.add('fadeInLine'); // Add fade-in class
      poemIndex++;
      setTimeout(showPoem, 1500); // Delay next line by 1.5 seconds
    } else {
      hidePoem();
    }
  }

  // Poem fade-out function
  function hidePoem() {
    console.log('hidePoem function triggered');
    poemLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = 'fadeOutPoem 1s forwards';
        line.style.opacity = 0; // Make it disappear
        line.style.visibility = 'hidden'; // Hide the line after fade-out
      }, index * 1500); // Fade out after poem appears
    });

    // After poem fades out, show wishes
    setTimeout(() => {
      wishesBox.style.visibility = 'visible'; // Show wishes box
      showWishes(); // Start showing wishes
    }, poemLines.length * 1500);
  }

  // Wishes fade-in function
  function showWishes() {
    let wishesIndex = 0;
    function displayWishesLine() {
      if (wishesIndex < wishesLines.length) {
        wishesLines[wishesIndex].style.visibility = 'visible'; // Make visible
        wishesLines[wishesIndex].style.opacity = 1; // Show text
        wishesLines[wishesIndex].classList.add('fadeInLine');
        wishesIndex++;
        setTimeout(displayWishesLine, 1500); // Show next line with delay
      }
    }
    displayWishesLine();
  }

  // Start poem animation
  showPoem();
});

// Fireworks logic remains unchanged


// Fireworks logic remains unchanged


// Fireworks logic
function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('fireworks');
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight / 2 + window.innerHeight / 4 - 50;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;

  const colors = ['soft-pink', 'peach', 'lavender', 'mint-green', 'pale-blue', 'creamy-white'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  firework.classList.add(randomColor);

  const randomSize = 15 + Math.random() * 20;
  firework.style.width = `${randomSize}px`;
  firework.style.height = `${randomSize}px`;

  document.body.appendChild(firework);

  const randomDuration = (4 + Math.random() * 3).toFixed(2);
  const randomDelay = (Math.random() * 2).toFixed(2);
  firework.style.animationDuration = `${randomDuration}s`;
  firework.style.animationDelay = `${randomDelay}s`;

  setTimeout(() => {
    firework.remove();
  }, (parseFloat(randomDuration) + parseFloat(randomDelay)) * 1000);
}

function startFireworksLoop() {
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createFirework();
    }
  }, 2500);
}
