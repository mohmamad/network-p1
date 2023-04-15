<?php

    echo "Hello from Server.\n";
    if(!empty($_POST["name"]))
        echo "Welcome ".$_POST['name'].".\n";
    else
        echo "Welcome Stranger\n";
    if(!empty($_GET["first"]) && !empty($_GET["last"]))
        echo "Welcome ".$_GET["first"]." ".$_GET["last"].".\n";
    else
        echo "Welcome Stranger\n";
?>