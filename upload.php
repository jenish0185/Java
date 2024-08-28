<?php

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "image_key_db";

// Check if the image file was uploaded without errors
if ($_FILES['imageFile']['error'] === UPLOAD_ERR_OK) {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the image data
    $imageData = file_get_contents($_FILES['imageFile']['tmp_name']);
    // Encode image data to Base64
    $base64Data = base64_encode($imageData);
    // Hash the Base64 data using SHA256
    $key = hash('sha256', $base64Data);

    // Prepare SQL statement
    $sql = "INSERT INTO images (image_data, image_key) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $base64Data, $key);

    // Execute SQL statement
    if ($stmt->execute() === TRUE) {
        // If insertion is successful, set success flag to true
        $response = array("success" => true);
    } else {
        // If insertion fails, set success flag to false
        $response = array("success" => false);
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();

} else {
    // If there was an error with the file upload, set success flag to false
    $response = array("success" => false);
}

// Send JSON response
echo json_encode($response);

?>
