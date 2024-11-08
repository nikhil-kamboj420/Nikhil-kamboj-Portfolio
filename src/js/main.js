function validateForm() {
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Optional: Further email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send the email using EmailJS
  sendEmail(name, email, subject, message);
}

function sendEmail(name, email, subject, message) {
  emailjs.send("service_y3lrtpo", "template_sliacnp", {
    user_name: name,
    user_email: email,
    user_subject: subject,
    user_message: message
  })
  .then((response) => {
    alert("Message sent successfully!");
    console.log("SUCCESS!", response.status, response.text);
  }, (error) => {
    alert("Failed to send message. Please try again.");
    console.error("FAILED...", error);
  });

  // reset the form after submission
  document.getElementById('contactForm').reset();
}

// Function for when an input/textarea gets focus
function handleInputFocus(event) {
  const inputFields = document.querySelectorAll('.input-field');
  // Reset the style for all fields
  inputFields.forEach((field) => {
    field.style.height = '1.875rem';
    field.style.fontSize = '1rem';
  });
  // Apply custom style to the focused field
  event.target.style.height = '3.125rem';
  event.target.style.fontSize = '1.25rem';
}

// Function for when an input/textarea loses focus
function handleInputBlur(event) {
  event.target.style.height = '1.875rem';
  event.target.style.fontSize = '1rem';
}

// Apply the event listeners to all input and textarea fields
const inputFields = document.querySelectorAll('.input-field');
inputFields.forEach((field) => {
  field.addEventListener('focus', handleInputFocus);
  field.addEventListener('blur', handleInputBlur);
});