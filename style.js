// Function to show the custom message overlay
function showCustomMessage() {
    document.getElementById('customMessageOverlay').style.display = 'flex';
}

// Function to close the custom message overlay
function closeCustomMessage() {
    document.getElementById('customMessageOverlay').style.display = 'none';
}

// Call the showCustomMessage function when the page loads
window.onload = showCustomMessage;


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
