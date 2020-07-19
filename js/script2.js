var genera = document.getElementById('genera');

//per far generare il biglietto
genera.addEventListener('click', function(){
    // per mostrare il biglietto con la classe show
    document.getElementById('biglietto').className += ' show';
    // creo var nome per prendere valore da input nome passeggero da un campo value
    var nome = document.getElementById('nome').value;
    //per stampare nome passeggero nel biglietto
    document.getElementById('nome-passeggero').innerHTML = nome;
    //per generare il numero Carrozza
    var numeroCarrozza = generaRandom(1, 10);
    // per generare il codice-CP
    var codiceCp = generaRandom(90000, 100000);
    //per stampare il numero carrozza generato nel biglietto
    document.getElementById('carrozza').innerHTML = numeroCarrozza;
    // per stampare il codiceCp generato
    document.getElementById('codice-cp').innerHTML = codiceCp;
    // prendiamo i km dall'input
    var km = document.getElementById('km').value;
    // calcolo prezzo standart
    var prezzo = km * 0.21;
    var messaggio = 'Tariffa standard';

    //prendo valore offerta dalla select
    var eta = document.getElementById('fascia-eta').value;
    // calcolo scontistica
    if(eta == 'minorenne'){
        prezzo -= prezzo * 0.2;
        messaggio = 'Tariffa minorenne';
    } else if( eta == 'over'){
        prezzo -= prezzo * 0.4;
        messaggio = 'Tariffa Silver';
    }
    // visualizzare l'Offerta
    document.getElementById('offerta').innerHTML = messaggio;
    // visualizzare il costo( to fixed trasforma il numero in stringa)
    document.getElementById('costo').innerHTML = prezzo.toFixed(2);
}
);

var annulla = document.getElementById('annulla');
annulla.addEventListener('click', function(){
    document.getElementById('biglietto').className = 'hidden';
}
);

// funzioni

// per generare numeri random estremi esclusi per carrozza e codiceCp
function generaRandom(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}
