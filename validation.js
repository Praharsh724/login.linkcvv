// validation.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();
        // Call the validation function
        validateForm();
    });
});

function validateForm() {
    // Reset previous error messages
    resetErrorMessages();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;

    var isValid = true;

    // Validate username (only letters)
    var usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
        displayError('username', 'Username should contain only letters.');
        isValid = false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email', 'Invalid email format.');
        isValid = false;
    }

    // Validate password length
    if (password.length < 6) {
        displayError('password', 'Password should be at least 6 characters.');
        isValid = false;
    }

    // Validate password match
    if (password !== password2) {
        displayError('password2', 'Passwords do not match.');
        isValid = false;
    }

    // Validate age (numeric and greater than 0)
    if (isNaN(age) || parseInt(age) <= 0) {
        displayError('age', 'Invalid age.');
        isValid = false;
    }

    // Validate phone number (numeric and 10 digits)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        displayError('phone', 'Phone number should be 10 digits.');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Registration successful!');
        document.getElementById('form').submit();
    }
}

function displayError(fieldId, errorMessage) {
    var errorDiv = document.querySelector(`#${fieldId} + .error`);
    errorDiv.innerText = errorMessage;
}

function resetErrorMessages() {
    var errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(function (errorDiv) {
        errorDiv.innerText = '';
    });
}
