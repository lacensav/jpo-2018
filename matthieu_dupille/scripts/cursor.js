document.onmousemove = suitsouris;
document.onmouseenter = suitsouris;
function suitsouris(evenement) {
	document.getElementById("image_cursor1").style.display = 'block';
	document.getElementById("image_cursor2").style.display = 'block';
	document.getElementById("image_cursor3").style.display = 'block';


	document.body.style.cursor = "none";
	if (navigator.appName == "Microsoft Internet Explorer") {
		var x = event.x + document.body.scrollLeft;
		var y = event.y + document.body.scrollTop;
	}
	else {
		var x = evenement.pageX;
		var y = evenement.pageY;
	}
	var limg1 = 307;
	var limg2 = 99;
	var t = 370;
	var l = 75;

	document.getElementById("image_cursor1").style.left = ((x + 1) - (limg1 + l)) + 'px';
	document.getElementById("image_cursor1").style.top = ((y + 1) - t) + 'px';

	document.getElementById("image_cursor2").style.left = ((x + 1) - l) + 'px';
	document.getElementById("image_cursor2").style.top = ((y + 1) - t) + 'px';

	document.getElementById("image_cursor3").style.left = ((x + 1) + (limg2 - l)) + 'px';
	document.getElementById("image_cursor3").style.top = ((y + 1) - t) + 'px';
}

window.onresize = cursoresize;
function cursoresize() {
	document.body.style.cursor = "none";
}