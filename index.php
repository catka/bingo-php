<?php 
	include 'items.php';
	
	$randItems = array();
	do{
		$searchIn = array_diff($items, $randItems);
		$randItems[] = $searchIn[array_rand($searchIn)];
	} while(sizeof($randItems) < 25);

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Simple PHP Bingo</title>
	<link rel="stylesheet" type="text/css" href="./style.css">
  </head>

  <body>
	  <img src="./header.png" />
		<h1>Simple PHP Bingo</h1>
		
		<ul class="commands">
			<li>
				<button id="btn-infos" alt="Informations">
					<i class="fas fa-info-circle"></i>
				</button>
			</li>
		</ul>
		<div id="informations">
			More information here
		</div>
		<div id="bingo">
			<?php include('./grid.php'); ?>
		</div>
		
		<div id="popup-bingo">
			<div class="content">
				<span class="bingo-text">Bingo!</span>
			</div>
		</div>
  </body>
  <script src="./fa-all.min.js"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="./fireworks.js"></script>
  <script src="./script.js"></script>
</html>