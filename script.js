document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a new FormData object to store form data
    var formData = new FormData();
    
    // Get the file input element and append the selected file to the FormData object
    var fileInput = document.getElementById('imageFile');
    formData.append('imageFile', fileInput.files[0]);

    // Send a POST request to the upload.php endpoint with the form data
    fetch('upload.php', {
        method: 'POST',
        body: formData // Set the body of the request to the FormData object
    })
    .then(response => response.json()) // Parse the JSON response from the server
    .then(data => {
        // Handle the response data
        if (data.success) {
            // If the upload was successful, display success message
            document.getElementById('message').textContent = 'Image and Key successfully uploaded!';
        } else {
            // If there was an error in the upload process, display error message
            document.getElementById('message').textContent = 'Error uploading image and key.';
        }
    })
    .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
        // Display error message
        document.getElementById('message').textContent = 'Error uploading image and key.';
    });
});
