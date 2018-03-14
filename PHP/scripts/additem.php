<?php
  require_once('connect.php');
  $name = $_POST["name"];
  $quantity = $_POST["quantity"];
  $price = $_POST["price"];
  $sql = "INSERT INTO `data`( `productname`, `quantity`, `price`) VALUES ('$name','$quantity','$price')";
  $res = mysqli_query($connection,$sql);
  if(! $res ) {
        echo "Please check your data";
    }
    else
        echo "Entered data successfully\n";

?>
