// Get the video element
var video = document.getElementById("myVideo");

// Play/Pause toggle function
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Mute/Unmute toggle function
function toggleMute() {
    video.muted = !video.muted;
}

// Add event listeners for custom controls
document.getElementById("playPauseBtn").addEventListener("click", togglePlayPause);
document.getElementById("muteBtn").addEventListener("click", toggleMute);