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
</body>
</html>