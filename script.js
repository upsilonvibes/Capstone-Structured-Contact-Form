document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Prevent the page from refreshing (the default behavior)
    event.preventDefault();

    // 2. Hide the form and show a success message
    this.classList.add('hidden');
    const successBox = document.getElementById('successMessage');
    successBox.classList.remove('hidden');

    // 3. Log data to console (simulating what a server would receive)
    const formData = new FormData(this);
    console.log("Form Submitted Successfully!");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});