// Get the button element with ID "myBtn"
let mybutton = document.getElementById("myBtn");

// Add an onscroll event to the window object to call the scrollFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Check if the user has scrolled down more than 20px from the top of the document
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // If the user has scrolled down, display the "Scroll to Top" button
    mybutton.style.display = "block";
  } else {
    // If the user is at the top of the document, hide the button
    mybutton.style.display = "none";
  }
}

// Function to scroll to the top of the document smoothly when the "Scroll to Top" button is clicked
function topFunction() {
    // Use the window.scrollTo method with smooth behavior for a better user experience
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Select all buttons with the "scroll-button" class for smooth navigation to specific sections
const buttons = document.querySelectorAll('.scroll-button');

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the value of the "data-target" attribute, which specifies the ID of the target section
        const targetId = button.getAttribute('data-target'); 
        // Find the target section element using the ID
        const targetElement = document.querySelector(targetId);

        // Scroll smoothly to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
