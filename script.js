const bird = document.getElementById('bird');
const gameContainer = document.getElementById('game-container');
const canvasHeight = gameContainer.clientHeight; // Add this line to get canvas height
let birdY = 150;
let birdVelocity = 0;
const gravity = 0.5;
const jumpPower = -10;

// Initialize game state
birdVelocity += gravity;
birdY += birdVelocity; // Fix this line to update bird's position

// Bird jump function
function jump() {
  birdVelocity = jumpPower;
}

// Pipe creation function

// Game loop function
function gameLoop() {
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

  // Call the game loop again
  requestAnimationFrame(gameLoop);
}

// Event listeners
document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowUp') { // Check for both spacebar and up arrow key
    jump();
  }
});

// Start the game loop
gameLoop();
