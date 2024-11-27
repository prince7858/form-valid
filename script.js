document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
  });
  
  function validateForm() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    const emailMessage = document.getElementById('emailMessage');
    const passwordMessage = document.getElementById('passwordMessage');
  
    emailMessage.textContent = '';
    passwordMessage.textContent = '';
  
    let isValid = true;
  
    // Email validation
    if (email.length <= 3 || !email.includes('@') || !email.includes('.')) {
      emailMessage.textContent = 'Make sure email is more than 3 characters and has @ and a .';
      emailMessage.className = 'message error';
      isValid = false;
    } 
    // else {
    //   emailMessage.textContent = 'All good to go!';
    //   emailMessage.className = 'message success';
    // }
  
    // Password validation
    if (password.length <= 8) {
      passwordMessage.textContent = 'Make sure password is more than 8 characters.';
      passwordMessage.className = 'message error';
      isValid = false;
    } else {
      passwordMessage.textContent = 'All good to go!';
      passwordMessage.className = 'message success';
    }
  
    // If both fields are valid
    if (isValid == true || isValid == false) {
      //alert('Form is valid!');
      emailField.value = ''; // Clear email input
      passwordField.value = ''; // Clear password input
    }
  }
  