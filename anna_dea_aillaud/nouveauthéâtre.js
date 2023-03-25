
let mesMessages = [
  "VLADIMIR. - Si on se repentait ?",
  "ESTRAGON. - De quoi? D'être né? Vladimir part d'un bon rire qu'il réprime aussitôt",
  "VLADIMIR. - On n'ose même plus rire.",
  "ESTRAGON. - Tu parles d'une privation. Endroit délicieux.Aspects riants. Allons-nous-en.",
  "VLADIMIR. - On ne peut pas.",
  "ESTRAGON. - Pourquoi?",
  "VLADIMIR. - On attend Godot",
  "ESTRAGON. - Et s'il ne vient pas?",
  "VLADIMIR. - Nous reviendrons demain.",
  "ESTRAGON. - Et après-demain",
  "Et ainsi de suite.",
  "Your connexion to the world wide web has been lost",

];

let txt, b;
let monIndex = 0;


function setup() {
  noCanvas();
  txt = createP('THE NEW THEATER');
  b = createButton("Refresh");
}

function draw() {
  b.mousePressed(changePhrase);

}

function changePhrase() {

  txt.html(mesMessages[monIndex]);
  monIndex++;

  if (monIndex == mesMessages.length) {
    b.remove();

  }

}