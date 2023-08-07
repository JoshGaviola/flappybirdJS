const bird = document.getElementById('bird');
const gameContainer = document.getElementById('game-container');
const canvasHeight = gameContainer.clientHeight; // Add this line to get canvas height

let birdY = 150;
let birdVelocity = 0;
let gameStarted = false; // Add a gameStarted flag
const gravity = 0.5;
const jumpPower = -10;

// Bird jump function
function jump() {
  birdVelocity = jumpPower;
  gameStarted = true; // Set gameStarted to true after the first jump
}

// Pipe creation function

// Game loop function
function gameLoop() {
  if (gameStarted) { // Only update if game has started
    // Update bird's position
    birdVelocity += gravity;
    birdY += birdVelocity;

    // Check for collision with ground or screen top
    if (birdY > canvasHeight || birdY < 0) {
      // Handle game over
      console.log('Game Over');
    }

    // Update bird's position on the screen
    bird.style.transform = `translateY(${birdY}px)`;
  }

  // Call the game loop again
  requestAnimationFrame(gameLoop);
}

// Event listeners
document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowUp') { // Check for both spacebar and up arrow key
    jump();
  }
});

document.addEventListener('click', () => {
  jump();
});

document.addEventListener('touchstart', () => {
  jump();
});

// Start the game loop
gameLoop();