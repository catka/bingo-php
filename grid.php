<?php for($i = 0; $i < sizeof($randItems); $i++): ?>
	
		<div class="card" id="card-<?php echo $i ?>">
			<div class="content"><?php echo $randItems[$i]; ?></div>
		</div>
	
<?php endfor; ?>