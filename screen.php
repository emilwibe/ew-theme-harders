<?php /* Template Name: Info Screen */?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Harders Info Screen</title>
</head>
<body>
    <script>
        fetch('https://harders.nu/wp-json/wp/v2/event')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    </script>
</body>
</html>