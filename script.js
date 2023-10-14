<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backlink Maker Tool</title>
</head>

<body>
    <h1>Backlink Maker Tool</h1>
    <label for="domain">Enter Domain:</label>
    <input type="text" id="domain" placeholder="Enter your domain">
    <br>
    <label for="websites">Enter Websites (comma-separated):</label>
    <input type="text" id="websites" placeholder="Enter websites where backlinks will be created">
    <br>
    <label for="interval">Time Interval (in minutes):</label>
    <input type="number" id="interval" placeholder="Time interval in minutes">
    <br>
    <button onclick="makeBacklinks()">Make Backlinks</button>
    <div id="progress"></div>
    <div id="result"></div>

    <script src="script.js"></script>
</body>

</html>
