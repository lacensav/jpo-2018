var tac1;
var tac2;
var zing;
var boum1;
var boum2;
var guitare;
var basse;
var tchac;
var harpe;
var clarinette;
var marimba1;
var marimba2;

function setup() {
    tac1 = new p5.SoundFile('sons/tac1.mp3');
    tac2 = new p5.SoundFile('sons/tac2.mp3');
    zing = new p5.SoundFile('sons/zing.mp3');
    boum1 = new p5.SoundFile('sons/boum1.mp3');
    boum2 = new p5.SoundFile('sons/boum2.mp3');
    guitare = new p5.SoundFile('sons/guitare.mp3');
    basse = new p5.SoundFile('sons/basse.mp3');
    tchac = new p5.SoundFile('sons/tchac.mp3');
    harpe = new p5.SoundFile('sons/harpe.mp3');
    clarinette = new p5.SoundFile('sons/clarinette.mp3');
    marimba1 = new p5.SoundFile('sons/marimba1.mp3');
    marimba2 = new p5.SoundFile('sons/marimba2.mp3');

	select('#tac1').mouseOver(playTac1);
	select('#tac2').mouseOver(playTac2);
	select('#zing').mouseOver(playZing);
	select('#boum1').mouseOver(playBoum1);
	select('#boum2').mouseOver(playBoum2);
	select('#guitareson').mouseOver(playGuitare);
	select('#basseson').mouseOver(playBasse);
	select('#tchacson').mouseOver(playTchac);
	select('#harpeson').mouseOver(playHarpe);
	select('#clarinette').mouseOver(playClarinette);
	select('#marimba1son').mouseOver(playMarimba1);
	select('#marimba2son').mouseOver(playMarimba2);	
}

function playTac1() {tac1.play();}
function playTac2() {tac2.play();}
function playZing() {zing.play();}
function playBoum1() {boum1.play();}
function playBoum2() {boum2.play();}
function playGuitare() {guitare.play();}
function playBasse() {basse.play();}
function playTchac() {tchac.play();}
function playHarpe() {harpe.play();}
function playClarinette() {clarinette.play();}
function playMarimba1() {marimba1.play();}
function playMarimba2() {marimba2.play();}
