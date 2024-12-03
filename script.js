document.getElementById("check-btn").addEventListener("click", function () {
    // Get input value
    const inputText = document.getElementById("text-input").value;

    // Show alert if no input
    if (!inputText.trim()) {
        alert("Please input a value");
        return;
    }

    // Original input for output
    const originalText = inputText;

    // Sanitize input: remove non-alphanumeric characters and convert to lowercase
    const sanitizedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse sanitized text
    const reversedText = sanitizedText.split("").reverse().join("");

    // Check if input is a palindrome
    const isPalindrome = sanitizedText === reversedText;

    // Display the result
    const resultElement = document.getElementById("result");
    if (isPalindrome) {
        resultElement.textContent = `${originalText} is a palindrome.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${originalText} is not a palindrome.`;
        resultElement.style.color = "red";
    }
});
