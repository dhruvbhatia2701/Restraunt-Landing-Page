document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display a simple alert (for demonstration purposes)
    alert(`Thank you, ${name}! Your message has been sent.`);
  
    // Clear form fields
    document.getElementById('contact-form').reset();
  });