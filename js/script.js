//far comparire il biglietto
var genera = document.getElementById('genera');

genera.addEventListener('click',
    function(){
        // per mostrare il biglietto con la classe show
        document.getElementById('biglietto').className += ' show';
        // prendere un valore da un campo value
        var nome = document.getElementById('nome').value;
        //per scrivere il nome passeggero
        document.getElementById('nome-passeggero').innerHTML = nome;
        //per generare il numero Carrozza
        var carrozza = generaRandom(1,10);
        //per generare codice-cp
        var codiceCp = generaRandom(90000, 100000);
        // per visualizzare il numero carrozza
        document.getElementById('carrozza').innerHTML = carrozza;
        // per visualizzare il codiceCp
        document.getElementById('codice-cp').innerHTML = codiceCp;
        // prendiamo i km
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

// per annullare
var genera = document.getElementById('annulla');
annulla.addEventListener('click',
    function(){
        document.getElementById('biglietto').className = ' hidden';
    }
);

// per generare numeri random estremi esclusi per carrozza e codiceCp
function generaRandom(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}
