<?php

#define NO_ZEROLENGTH_COMMUNITY 1

$ip = "127.0.0.1:161";


$a1 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.6.13.1.1");
$a2 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.6.13.1.2");
$a3 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.6.13.1.3");
$a4 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.6.13.1.4");
$a5 = snmp2_walk($ip, "public", ".1.3.6.1.2.1.6.13.1.5");

$data = array($a1 , $a2 , $a3 , $a4 , $a5);
 

echo json_encode($data);

?>