<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" /> 
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="style.css" >		
 	  <link rel="stylesheet" href="animate.css">
		<meta http-equiv="Refresh" content="3; url=../03_vassilys_orchestra/index.html">
		<title>Memory Loss</title>
	</head>
  <body bgcolor=black >
		<div class="font animated zoomIn">
			<h1>Memoria</h1>
 		</div>

		<?php
			$numero = rand(1, 24);	// un numero aléatoire 
			$container = 'container' . $numero;
		?>

		<div class='<?php echo $container?>'>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
			<div class="rectangle animated fadeIn"></div>
		</div>

		<?php
			$liste_citations = array(
        		"\"La mémoire se perd, mais l'écriture demeure.\" - Citation de l'Orient",
        		"\"La mémoire fait partie de notre être : oublier, c'est mutiler son âme, c'est dessécher son cœur ; oublier c'est cesser d'être homme.\" - Henri Frédéric Amiel",
        		"\"Dans le sommeil, les rêves évoquent la plus précise des réalités ; dans la réalité, la mémoire imparfaite n'engendre qu'une image grossière sur l'écran du souvenir.\" - René Chicoine",
        		"\"Immense, la triste opacité des choses qui déchire en nous l'espace, brusquement révélé, tandis que naît au fond du vide et de la nuit, la pensée unique sans fin.\" - Giacinto Scelsi"
        		);  
			$numero2 = rand(0, 3);	// un numero aléatoire 
 		?> 

		<div class="font animated zoomIn">
			<h2> <?php echo $liste_citations[$numero2]?> </h2>	
 		</div>
  </body>
</html>
