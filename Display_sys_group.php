<?php

#define NO_ZEROLENGTH_COMMUNITY 1

$ip = "127.0.0.1:161";


$ad = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.1.0");
$ao = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.2.0");
$at = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.3.0");
$ac = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.4.0");
$an = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.5.0");
$al = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.6.0");
$as = snmp2_get($ip, "public", ".1.3.6.1.2.1.1.7.0");

$data = array($ad , $ao , $at , $ac , $an , $al , $as);


echo json_encode($data);
// $asd =  "asd";
// echo $asd;
//$json = file_get_contents('php://input');
// $data1 = json_decode($json);
// echo $data1;

?>