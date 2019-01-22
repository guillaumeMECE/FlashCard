<?php
if (isset($_POST['recto']) && isset($_POST['verso']) ) {
      new_card($_POST['recto'],$_POST['verso']);
  }

  function new_card($str1,$str2)
  {
    // Create connection
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // make the request to the DATABASE
     $sql = "INSERT INTO `cards`(`str_1`,`str_2`) values ('" . $str1 ."','" . $str2 ."');";
     mysqli_query($conn, $sql); // send the query

    // close the connection
    mysqli_close($conn);
  }
 ?>
