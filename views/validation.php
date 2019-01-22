<?php // check if there is a request for a reservation

     if (isset($_POST['answer'])) {
       if ($_POST['answer']!="") {
           valiation_answer($_POST['answer']);
       }else{
         init_card();
       }
     }

function valiation_answer($answer)
{
  // Create connection
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  // make the request to the DATABASE
   $sql = "SELECT card_actual_id
         FROM users
         WHERE user_id =1;";
  $result = mysqli_query($conn, $sql); // send the query
  $row = mysqli_fetch_assoc($result); // fetch keys with values
  if (mysqli_num_rows($result) > 0) { // if we get back some values so the request was good
  $idOfCard = $row['card_actual_id'];
  }
  // make the request to the DATABASE
   $sql = "SELECT str_2
         FROM cards
         WHERE str_2='" .$answer. "'
         AND card_id = '" .$idOfCard. "';";
  $result = mysqli_query($conn, $sql); // send the query
  $row = mysqli_fetch_assoc($result); // fetch keys with values
  if (mysqli_num_rows($result) > 0) { // if we get back some values so the request was good
    echo "true";
  }else{
    echo "false";
  }

  // close the connection
  mysqli_close($conn);

//  init_card();

  /*if ($answer == "maurin") {
    echo "true";
  }else{
    echo "false";
  }*/
}

function init_card()
{
  // Create connection
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  // make the request to the DATABASE
   $sql = "SELECT str_1,card_id
         FROM cards
         ORDER BY RAND()
         LIMIT 1;";

  $result = mysqli_query($conn, $sql); // send the query
  $row = mysqli_fetch_assoc($result); // fetch keys with values
  if (mysqli_num_rows($result) > 0) { // if we get back some values so the request was good
  $txt = $row["str_1"];
  $idOfCard = $row["card_id"];
    echo "  <div class=\"card text-white bg-info mx-auto mt-5 shadow\" style=\"max-width: 18rem;\">
        <div class=\"card-body\">
          <p class=\"card-text\" id=\"cardText\"> $txt </p>
        </div>
      </div>";

      $sql = "UPDATE users
                         SET card_actual_id= $idOfCard
                         WHERE user_id = 1;";
      mysqli_query($conn, $sql);
  }
  // close the connection
  mysqli_close($conn);
}
?>
