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
    <title>Elo'Bingo</title>
	<link rel="stylesheet" type="text/css" href="./style.css">
  </head>

  <body>
	  <img src="./header.png" />
		<h1>Elo'Bingo</h1>
		<h2>(Nom déposé par Redily)</h2>
		
		<ul class="commands">
			<li>
				<button id="btn-infos" alt="Informations">
					<i class="fas fa-info-circle"></i>
				</button>
			</li>
		</ul>
		<div id="informations">
			Complétez le bingo au fur et à mesure du live !<br />
			Par ligne, colonne ou même en diagonale !<br />
			<span class="important">Attention, recharger la page réinitialise votre grille.</span> (Bah oui, ça a été fait à l'arrache...)
			<br />
			Les cases du bingo ont été trouvées par Redily, Madilange et Setrianna.
			<br /><br />
			Ce site n'enregistre aucune donnée.
			<br /><br />
			<span class="host">
				Hébergement<br />
				OVH, 2 rue Kellermann<br />
				59100 ROUBAIX, FRANCE
			</span>
		</div>
		<div id="bingo">
			<?php include('./grid.php'); ?>
		</div>
		
		<div id="popup-bingo">
			<div class="content">
				
				<span class="bingo-text">Bingo !</span>
			</div>
		</div>
  </body>
  <script src="./fa-all.min.js"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="./fireworks.js"></script>
  <script src="./script.js"></script>
</html>