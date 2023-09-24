// Get the login form element.
const loginForm = document.querySelector('.signin-form"');

// Add an event listener to the form's submit event.
loginForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default.
  event.preventDefault();

  // Validate the form fields.
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Check if the email field is empty.
  if (email.value === '') {
    // Display an error message.
    alert('Please enter your email address.');

    // Return to prevent the form from submitting.
    return;
  }

  // Check if the password field is empty.
  if (password.value === '') {
    // Display an error message.
    alert('Please enter your password.');

    // Return to prevent the form from submitting.
    return;
  }

  // Submit the form if all validation checks pass.
  this.submit();

  window.location.href = 'login.html';
});
