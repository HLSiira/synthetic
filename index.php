<!DOCTYPE html>
<html lang="en">

<!-- Copyright (C) 2020-Present  Liam Siira <Liam@Siira.us>	-->
<!-- This file is part of https://www.siira.us				-->
<!-- This code can not be copied and/or distributed			-->
<!-- without the express permission of Liam Siira			-->

<head>
	<title>Synthetic</title>
	<meta name="author" content="Liam Siira">
	<meta name="description" content="Synthetic - Simple pulsing hexagonal background for websites.">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content="Hexagons,Pulsing,Background,Javascript">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">

	<link rel="stylesheet" type="text/css" href="cdn/common.min.css" defer>

	<!-- Favicon -->
	<?php include '/var/www/html/util/assets/php/favicon.php'; ?>

</head>

<body>
	<canvas id="synthetic"></canvas>
	
	<footer>
		<small>&copy; Copyright 2020, Liam Siira</small>
	</footer>	
	
	<script src="cdn/synthetic.js"></script>
	<script>
		document.addEventListener("DOMContentLoaded", function() {
			Synthetic.init();
		});
	</script>
</body>

</html>