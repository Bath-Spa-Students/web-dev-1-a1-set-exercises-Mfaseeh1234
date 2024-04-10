// Define audio files and their associated names
const audioFiles = [
    { name: 'Audio 1', file: '1.mp3' },
    { name: 'Audio 2', file: '2.mp3' },
    { name: 'Audio 3', file: '3.mp3' },
    { name: 'Audio 4', file: '4.mp3' },
    { name: 'Audio 5', file: '5.mp3' },
    { name: 'Audio 6', file: '6.mp3' },
    { name: 'Audio 7', file: '7.mp3' },
    { name: 'Audio 8', file: '8.mp3' },
];

// Create sound buttons dynamically
const soundboardDiv = document.getElementById('soundboard');

audioFiles.forEach(sound => {
    const container = document.createElement('div'); // Create a container div
    container.className = 'sound-button-container'; // Add class to the container
    const button = document.createElement('button');
    button.className = 'sound-button';
    button.textContent = sound.name;
    button.addEventListener('click', () => playSound(sound.file));
    container.appendChild(button); // Append button to the container
    soundboardDiv.appendChild(container); // Append container to the soundboard
});

// Function to play audio
function playSound(file) {
    const audio = new Audio(file);
    audio.play();
}