// script.js
document.addEventListener("DOMContentLoaded", function() {
    const playBtn = document.querySelector(".play-btn");
    const gameAnimation = document.querySelector(".game-animation");
  
    playBtn.addEventListener("click", function() {
      gameAnimation.classList.toggle("active");
    });
  });
  