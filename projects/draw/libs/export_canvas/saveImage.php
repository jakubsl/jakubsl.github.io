<?php
    # tpye jpg
    header('Content-type: image/jpeg');
     
    # we are an attachment (eg download), and we have a name
    header('Content-Disposition: attachment; filename="' . $_POST['name'] .'"');
     
    #capture, replace any spaces w/ plusses, and decode
    $encoded = $_POST['imgdata'];
    $encoded = str_replace(' ', '+', $encoded);
    $decoded = base64_decode($encoded);
     
    #write decoded data
    echo $decoded;
?>