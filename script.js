// JavaScript for form validation (optional enhancement)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple client-side form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
    } else {
        alert("Thank you for your message, " + name + "!");
        // Clear the form fields
        document.getElementById('contact-form').reset();
    }
});
