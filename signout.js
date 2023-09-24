// Get the current URL path
var currentPath = window.location.pathname;

// Find the corresponding navigation link and add a class to highlight it
var navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
// Logout Button Click Event
document.getElementById('logout-button').addEventListener('click', function () {
    // Clear user session or perform logout actions here
    alert('Logged out successfully!');
    // You can redirect the user to the login page after logout if needed
  window.location.href = 'signout.html';
});