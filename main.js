//* Smooth scrolling for navigation links
document.querySelectorAll('.list-items a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.list-items a');
  
const updateActiveLink = () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
};

// Initial check on page load
window.addEventListener('load', () => {
  updateActiveLink();
});

// Update on scroll
window.addEventListener('scroll', updateActiveLink);

//* about section achievements
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('shadow-2xl');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('shadow-2xl');
  });
});

//? form validation
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

//? resolved the big issue with the overflow of the text area form the outside of the form container for a specific screen size range
let textArea = document.getElementById("message");
if(window.innerWidth >= 748 && window.innerWidth <= 1028){
    textArea.rows = 1;
}

const dummyBox = document.getElementById('dummy-box');
document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=> {
    dummyBox.style.display = 'none';
  },2000)
});

const header = document.getElementById('header');
const nav = document.getElementById('navbar');
const mainSection = document.getElementById('main-section');
const aboutSection = document.getElementById('about-section');
const projectSection = document.getElementById('project-section');
const contactSection = document.getElementById('contact-section');

let transition = "all 3s ease-in";

const sectionsToDisplay = [header, nav, mainSection, aboutSection, projectSection, contactSection];

window.addEventListener('load', () => {
  setTimeout(() => {
    sectionsToDisplay.forEach(section => {
      if (section === nav) {
        section.style.visibility = 'visible';
      } else {
        section.style.display = 'block';
      }
      section.style.transition = transition;
    });
  }, 700);
})






