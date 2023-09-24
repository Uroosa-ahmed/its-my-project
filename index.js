
const signupForm = document.getElementById('signup-form');

// Add an event listener to the form's submit event.
signupForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default.
  event.preventDefault();

  // Validate the form fields.
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Check if the name field is empty.
  if (name.value === '') {
    // Display an error message.
    alert('Please enter your name.');

    // Return to prevent the form from submitting.
    return;
  }

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
    alert('Please enter a password.');

    // Return to prevent the form from submitting.
    return;
  }

  // Validate the email address.
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email.value)) {
    // Display an error message.
    alert('Please enter a valid email address.');

    // Return to prevent the form from submitting.
    return;
  }

  // Submit the form if all validation checks pass.
  this.submit();

  window.location.href = 'index.html';
});
