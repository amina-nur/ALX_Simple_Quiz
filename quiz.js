// This function checks if the selected answer is correct
function checkAnswer() {
    // Set the correct answer value
    const correctAnswer = "4";

    // Get the selected radio input (if any)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback display element
    const feedback = document.getElementById('feedback');

    // If no option is selected, prompt the user
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Get the user's selected answer
    const userAnswer = selectedOption.value;

    // Compare the user's answer to the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button to trigger answer check
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
