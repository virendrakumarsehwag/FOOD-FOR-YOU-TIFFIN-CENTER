<?php

if (isset($_POST['fname']) && isset($_POST['lname'])
&& isset($_POST['email']) && isset($_POST['phone'])
&& isset($_POST['mealt']) && isset($_POST['meald']) && isset($_POST['message'])) {
    include 'db_conn.php';
    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;

    }
    $fname = validate($_POST['fname']);
    $lname = validate($_POST['lname']);
    $email = validate($_POST['email']);
    $phone = validate($_POST['phone']);
    $mealt = validate($_POST['mealt']);
    $meald = validate($_POST['meald']);
    $message = validate($_POST['message']);

    if (empty($lname)  || empty($fname)
    || empty($email) || empty($phone) || empty($mealt) || empty($meald) || empty($message)) {
        header("Location:contact.html");
    }else {
        $sql ="INSERT INTO Orders(fname,lname,email,phone,mealt,meald,message)
        VALUES('$fname','$lname','$email','$phone','$mealt','$meald','$message')";
        $res = mysqli_query($conn, $sql);
        if ($res) {
            echo "Your message was sent successfully!";
        }else {
            echo "Your Message could not be sent!";
        }
    }

}else {
    header("Location:contact.html");
}

?>
