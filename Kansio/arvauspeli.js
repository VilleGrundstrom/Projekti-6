var kierros=0;
var pelit = 0;
var oikea = satunnainen();
var voitot = 0;
var haviot = 0;

function arvaus(nappinro) {
  var palauta = "";
  kierros++;
  if(kierros <= 2 ) {
    if(nappinro < oikea) palauta = "Liian pieni. Arvaa uudestaan!";
    if(nappinro > oikea) palauta = "Liian suuri. Arvaa uudestaan!";
    if(nappinro == oikea) {
      kierros = 0;
      voitot++;
      palauta = "Oikein meni! Mainiota!";
    }
  }
  else {
    haviot++;
    palauta = "Mönkään meni. Oikea numero olisi ollut " + oikea;
    oikea = satunnainen();
    kierros = 0;
  }
  alert(palauta);

  document.getElementById("p1").innerHTML = voitot;
  document.getElementById("p2").innerHTML = haviot;
}

function numero() {
  palauta = numero++;
  return palauta;
}

function satunnainen() {
  var sat = Math.ceil(Math.random()*10);
  return sat;
}
