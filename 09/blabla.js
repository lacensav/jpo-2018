// JavaScript Document

function click_bouton_page1() 
{
	document.getElementById("page1").style.left = "0%";
	document.getElementById("page2").style.left = "100%";
	document.getElementById("page3").style.left = "200%";
}

function click_bouton_page2() 
{
	document.getElementById("page1").style.left = "-100%";
	document.getElementById("page2").style.left = "0%";
	document.getElementById("page3").style.left = "100%";
}

function click_bouton_page3() 
{
	document.getElementById("page1").style.left = "-200%";
	document.getElementById("page2").style.left = "-100%";
	document.getElementById("page3").style.left = "0%";
}

var vid1 = document.getElementById("video1");

function playVid1() {
	video1.play ();
	video2.pause();
	video3.pause();
}

var vid2 = document.getElementById("video2");

function playVid2() {
	video2.play ();
	video3.pause ();
	video1.pause ();
}

var vid3 =document.getElementById("video3");

function playVid3() {
	video3.play ();
	video2.pause ();
	video1.pause ();
}
