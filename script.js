// script.js

// Function to validate form inputs
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out.");
        return false;
    }
    
    // Basic email pattern check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    return true;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        // Proceed with form submission or further processing
        alert("Form submitted successfully!");
    }
}

// Function to add event listeners
function setupEventListeners() {
    document.getElementById("myForm").addEventListener("submit", submitForm);
}

// Call setupEventListeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);