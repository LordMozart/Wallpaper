<!DOCTYPE html>
<html>
<head>
    <title>trail6</title>
</head>
<body>

    <p id="demo"></p>

    <script>

    var today = new Date()
    var curHr = today.getHours()

    if (curHr >= 0 && curHr < 6) {
        document.getElementById("demo").innerHTML = 'What are you doing that early?';
    } else if (curHr >= 6 && curHr <= 12) {
        document.getElementById("demo").innerHTML = 'Good Morning';
    } else if (curHr >= 12 && curHr < 17) {
        document.getElementById("demo").innerHTML = 'Good Afternoon';
    } else {
        document.getElementById("demo").innerHTML = 'Good Evening';
    }

</script>

</body>
</html> 
