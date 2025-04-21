// Event listener to handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('successMessage').textContent = '';
  
    // Form validation
    let isValid = true;
  
    // Validate name field
    const nameField = document.getElementById('name');
    if (nameField.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required!';
      isValid = false;
    }
  
    // Validate email field
    const emailField = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address!';
      isValid = false;
    }
  
    // If the form is valid, display a success message
    if (isValid) {
      document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
  });
  
  // Example of interactive element: Hover effect on the button
  const submitButton = document.querySelector('button');
  submitButton.addEventListener('mouseover', function() {
    submitButton.style.backgroundColor = '#45a049'; // Change button color on hover
  });
  
  submitButton.addEventListener('mouseout', function() {
    submitButton.style.backgroundColor = '#4CAF50'; // Revert button color when mouse out
  });
  