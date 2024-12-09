// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Select all buttons with the "scroll-button" class
const buttons = document.querySelectorAll('.scroll-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Find the target section

        // Scroll smoothly to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

