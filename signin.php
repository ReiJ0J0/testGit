<?php
// signin.php

// Connect to the database
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'test';
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the username and password from the form
$username = $_POST['username'];
$password = $_POST['password'];



// Insert the new user into the database
$query = "INSERT INTO sign_in (username, password) VALUES ('$username', '$password')";
$result = mysqli_query($conn, $query);

if ($result) {
    // Sign in successful
    echo "Sign in successful";
} else {
    // Sign in failed
    echo "Sign in failed: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
