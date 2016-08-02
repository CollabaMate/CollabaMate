<?php
header('Content-type: application/json');

// database credentials 
$server = "localhost";
$username = "root";
$password = "";
$database = "collabamate";

// connect to the database or error
$con = mysqli_connect($server, $username, $password) or die ("Could not connect: " . mysqli_error());
mysqli_select_db($database, $con);

// get the user id (find out of there is session in phonegap)
$sql = "SELECT * FROM users_table ASC";

// execute the query
$result = mysqli_query($sql) or die ("Query error: " . mysqli_error());

$records = array();

// fill the array with data
while($row = mysqli_fetch_assoc($result)) {
	$records[] = $row;
}

// close the connection 
mysqli_close($con);

// send back to javascript a json array of the data from the database
echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
?>