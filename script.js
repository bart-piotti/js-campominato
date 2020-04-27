//Genera 16 numeri casuali
    //Inseriscili in un array per memorizzarli
//Chiedi un numero da 1 a 100 all'utente finchè uno di questi non è uguale ad uno dei 16 o fin quando li finisce
    //Comparali con tutti gli elementi dell'array per sapere se sono uguali
//Se è uguale ad uno dei 16 ==> Fine gioco, mosra punteggio

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Variabile d'appoggio per sapere se c'è un numero uguale a una mina
var equal = false;
//Creo una funziona per stabilire se un numero n è uguale ad una delle mine
function isEqualToBomb(n) {
    //Compara tutti i numeri dell'array mine con il numero dell'utente
    for (var i = 0; i < array_mine.length; i++) {
        if (n == array_mine[i]) {
            equal = true;
        }
    }
    return equal
}

//Creo un array per memorizzare i numeri inseriti dall'utente
var array_previous = [];
//Variabile d'appoggio per sapere se c'è un numero uguale a un numero già inserito
var equal_to_previous = false;
//Creo una funziona per stabilire se un numero x è uguale ad uno dei numeri precedenti
function isEqualToPrevious(x) {
    //Compara tutti i numeri dell'array_previous con il numero dell'utente
    for (var i = 0; i < array_previous.length; i++) {
        if (x == array_previous[i]) {
            equal_to_previous = true;
        }
    }
    return equal_to_previous
}

//----------------NUMERI MINA---------------
//Creo un array vuoto per i numeri casuali
var array_mine = [];
//Stabilisco la quantità di "numeri mina" da usare nel gioco
var mine = 16;
//Inserisco i 16 numeri mina nell'array
for (var i = 0; i < mine; i++) {
    array_mine.push(getRandom(1, 20))
}
//----------------NUMERI MINA---------------

console.log(array_mine);
//Variabile d'appoggio per il punteggio
var punteggio = 0;
while (isEqualToBomb(numero_utente) == false /* && punteggio < 5 */) {
    //Chiedi all'utente di inserire un numero
    var numero_utente = prompt('Inserisci un numero')

    // //Controlla se lo ha già inserito
    // if (isEqualToPrevious(numero_utente)) {
    //     console.log('Hai già inserito questo numero!');
    //     console.log(array_previous);
    // }

    //Controlla se è un numero valido
    if (numero_utente > 0 && numero_utente <= 100 && !isNaN(numero_utente)) {
        //Stabilisci se il numero utente è una mina o meno
        if (isEqualToBomb(numero_utente) == false) {
            punteggio++;
            console.log('Complimenti, il numero inserito (' + numero_utente + ') non è una mina');
            console.log('punteggio: ' + punteggio);
            array_previous.push(numero_utente);
            console.log(array_previous);
        }
        else {
            console.log('BOOM! Hai fatto esplodere una mina');
            console.log('Punteggio finale: ' + punteggio);
        }
    }
    else {
        console.log('Hai inserito un valore non valido!');
    }
}
