// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const resultDiv = document.getElementById('result');
    const submitGuessButton = document.getElementById('submitGuess');

    submitGuessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
            if (userGuess < targetNumber) {
                resultDiv.textContent = 'Too low! Try again.';
            } else if (userGuess > targetNumber) {
                resultDiv.textContent = 'Too high! Try again.';
            } else {
                resultDiv.textContent = `Congratulations! You guessed the number ${targetNumber}!`;
                guessInput.disabled = true;
                submitGuessButton.disabled = true;
            }
        } else {
            resultDiv.textContent = 'Please enter a valid number between 1 and 100.';
        }
    });
});
