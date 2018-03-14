<?php
  header('Content-Type: application/json');
  require_once('connect.php');
  $d2 = date('c', strtotime('-30 days'));
  $sql = "SELECT DAY(Date) AS dtDay, MONTH(Date) AS dtMonth, YEAR(Date) AS dtYear, sales FROM `salesdata`";
  $res = mysqli_query($connection,$sql);
  $data = array();
  foreach ($res as $row) {
	   $data[] = $row;
   }
   print json_encode($data);
?>
