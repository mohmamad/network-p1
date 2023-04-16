<?php


$ip = "127.0.0.1:161";


$json = file_get_contents('php://input');

// Decode the JSON data into a PHP associative array
$data = json_decode($json, true);
$contact = $data['Contact'];

$result = snmp2_set($ip, "public", ".1.3.6.1.2.1.1.4.0", "s", $contact );


echo json_encode(array("result" => $result));

?>