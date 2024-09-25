<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you For your response</title>

    <link rel="stylesheet" href="mainStyle.css">
</head>
<body>
    <section class="response-section">
        <div class="response-card">
        <h2>Thank you <?php echo $_POST['txt-name']?>.</h2>
            <div class="response-text">
                <p>Your message has been recieved and will be reverted back to you.</p>
                <p>Click the below button to go back to my portfolio</p>
            </div>
                <button class="return-btn"><a href="../index.html">Back to My portfolio</a></button>
        </div>
    </section>
<?php 
    $servername = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'portfoliodb';

    $conn = new mysqli($servername,$user,$password,$dbname);

    if($conn->connect_error){
        die("Connection Failed:".$conn->connect_error);
    }
    else{
        echo "Connection Successfull";
    }

    $name = $_POST['txt-name'];
    $mail = $_POST['txt-mail'];
    $message = $_POST['txt-msg'];

    $statement = $conn -> prepare("Insert into responses(name, email, message) values(?,?,?)");
    $statement->bind_param("sss", $name, $mail, $message);

    if($statement->execute()){
        echo '<script>
                console.log("record Added");
            </script>';
    }
    else{
        echo '<script>
                console.log("error occurred");
            </script>';
    }
    ?>
</body>
</html>