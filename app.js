// Select all the buttons on the page
const buttons = document.querySelectorAll('.card button');

// Loop through the buttons and add a click event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the content display when the button is clicked
    const content = button.nextElementSibling;
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
  });
});
