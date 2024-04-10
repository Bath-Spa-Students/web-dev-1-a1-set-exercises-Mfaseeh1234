// RGB Color Guessing Game

        // Initial variables
        let colors = [];
        let pickedColor;
        let numColors = 3;
        let score = 0;

        // Selecting elements
        const colorDisplay = document.getElementById("colorDisplay");
        const messageDisplay = document.getElementById("message");
        const options = document.getElementById("options");
        const resetButton = document.getElementById("resetButton");
        const scoreValue = document.getElementById("scoreValue");

        // Initialize game
        init();

        function init() {
            generateRandomColors(numColors);
            pickColor();
            displayColors();
        }

        // Generate random RGB colors
        function generateRandomColors(num) {
            colors = [];
            for (let i = 0; i < num; i++) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                colors.push(`rgb(${r}, ${g}, ${b})`);
            }
        }

        // Pick a random color from colors array
        function pickColor() {
            pickedColor = colors[Math.floor(Math.random() * colors.length)];
            colorDisplay.textContent = pickedColor;
        }

        // Display colors in options
        function displayColors() {
            options.innerHTML = "";
            for (let color of colors) {
                const option = document.createElement("div");
                option.classList.add("option");
                option.style.backgroundColor = color;
                option.addEventListener("click", function () {
                    if (color === pickedColor) {
                        messageDisplay.textContent = "Correct!";
                        score++;
                        scoreValue.textContent = score;
                    } else {
                        messageDisplay.textContent = "Try Again";
                    }
                });
                options.appendChild(option);
            }
        }

        // Reset game
        resetButton.addEventListener("click", function () {
            messageDisplay.textContent = "";
            generateRandomColors(numColors);
            pickColor();
            displayColors();
        });