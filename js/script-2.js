window.addEventListener('DOMContentLoaded', () => {
/* -------------------play-video----------------------------- */
var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function() {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.style.display = "none"; 
  } else {
    video.pause();
    playPauseBtn.style.display = "block"; 
  }
});

video.addEventListener("ended", function() {
  playPauseBtn.style.display = "block"; 
});

});