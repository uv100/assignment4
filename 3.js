document.getElementById('generate').addEventListener('click', function() {
    // Get the input values
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);

    // Check if inputs are valid
    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }
    
    if (min > max) {
        alert("Minimum value should be less than or equal to the maximum value.");
        return;
    }

    // Generate random number
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    // Display the result
    document.getElementById('result').textContent = "Random Number: " + randomNum;
});