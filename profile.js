// Get the student profile form element.
const studentProfileForm = document.getElementById('profile-student');

// Get the buttons element.
const buttons = document.querySelector('.buttons');

// Add an event listener to the insert button.
buttons.querySelector('#insert').addEventListener('click', function() {
  // Get the values of the student profile form fields.
  const rollNo = studentProfileForm.querySelector('#roll').value;
  const name = studentProfileForm.querySelector('#name').value;
  const gender = studentProfileForm.querySelector('#gender').value;
  const address = studentProfileForm.querySelector('#address').value;
  const attendence = studentProfileForm.querySelector('#attendence').value;


  // Validate the form data.
  if (rollNo === '' || name === '' || gender === '' || address === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Insert the student profile data into the database.
  // TODO: Implement this function.

});

// Add an event listener to the read button.
buttons.querySelector('#read').addEventListener('click', function() {
  // Read the student profile data from the database.
  // TODO: Implement this function.

});

// Add an event listener to the update button.
buttons.querySelector('#update').addEventListener('click', function() {
  // Get the values of the student profile form fields.
  const rollNo = studentProfileForm.querySelector('#roll').value;
  const name = studentProfileForm.querySelector('#name').value;
  const gender = studentProfileForm.querySelector('#gender').value;
  const address = studentProfileForm.querySelector('#address').value;
  const attendence = studentProfileForm.querySelector('#attendence').value;


  // Validate the form data.
  if (rollNo === '' || name === '' || gender === '' || address === '' || attendence === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Update the student profile data in the database.
  // TODO: Implement this function.

});

// Add an event listener to the delete button.
buttons.querySelector('#delete').addEventListener('click', function() {
  // Get the value of the roll number field.
  const rollNo = studentProfileForm.querySelector('#roll').value;

  // Delete the student profile data from the database.
  // TODO: Implement this function.

});
