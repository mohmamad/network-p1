<?php

#define NO_ZEROLENGTH_COMMUNITY 1

$ip = "127.0.0.1:161";


$a1 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.4.22.1.2");
$a2 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.4.22.1.3");
$a3 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.4.22.1.4");


$data = array($a1 , $a2 , $a3);

echo json_encode($data);

?>