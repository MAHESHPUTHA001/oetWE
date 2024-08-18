document.getElementById('oet-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://your-backend-url/submit', { // Replace with your actual backend URL
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => alert('Submission received!'))
    .catch(error => alert('Error: ' + error.message));
});
