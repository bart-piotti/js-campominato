//Genera 16 numeri casuali
    //Inseriscili in un array per memorizzarli
//Chiedi un numero da 1 a 100 all'utente finchè uno di questi non è uguale ad uno dei 16 o fin quando li finisce
    //Comparali con tutti gli elementi dell'array per sapere se sono uguali
//Se è uguale ad uno dei 16 ==> Fine gioco, mosra punteggio

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//------------FUNZIONE PER CONFRONTO NUMERO/MINE-----------------------
//Creo una funziona per stabilire se un numero n è uguale ad una delle mine
function isEqualToBomb(n) {
    //Variabile d'appoggio per sapere se c'è un numero uguale a una mina
    var equal = false;
    //Compara tutti i numeri dell'array mine con il numero dell'utente
    for (var i = 0; i < array_mine.length; i++) {
        if (n == array_mine[i]) {
            equal = true;
        }
    }
    return equal
}
//------------FUNZIONE PER CONFRONTO NUMERO/MINE-----------------------


//------------FUNZIONE PER CONFRONTO NUMERO/NUMERI INSERITI-----------------------
//Creo un array per memorizzare i numeri inseriti dall'utente
var array_previous = [];
//Creo una funziona per stabilire se un numero x è uguale ad uno dei numeri precedenti
function isEqualToPrevious(x) {
    //Variabile d'appoggio per sapere se c'è un numero uguale a un numero già inserito
    var equal_to_previous = false;
    //Compara tutti i numeri dell'array_previous con il numero dell'utente
    for (var i = 0; i < array_previous.length; i++) {
        if (x == array_previous[i]) {
            equal_to_previous = true;
        }
    }
    return equal_to_previous
}
//------------FUNZIONE PER CONFRONTO NUMERO/NUMERI INSERITI-----------------------


//-------------------LIVELLO DIFFICOLTA'----------------------
var max_numeri = 100;
do {
    var difficolta = prompt('Seleziona il livello di difficoltà inserendo "1", "2" o "3" (Rispettivamente 100, 80 e 50 come numero massimo)')
    if (difficolta == 2) {
        max_numeri = 80;
    }
    else if (difficolta == 3) {
        max_numeri = 50;
    }
} while ((difficolta != 1 && difficolta != 2 && difficolta != 3) || (isNaN(difficolta)));
//-------------------LIVELLO DIFFICOLTA'----------------------


//----------------CREAZIONE NUMERI MINA---------------
//Creo un array vuoto per i numeri casuali
var array_mine = [];
//var array_mine = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; PER TEST VITTORIA

//Stabilisco la quantità di "numeri mina" da usare nel gioco
var mine = 16;
//Inserisco i 16 numeri mina nell'array
while(array_mine.length < mine){
    var m = getRandom(1, max_numeri);
    if(array_mine.indexOf(m) === -1) { //INDEX -1 SIGNIFICA CHE QUELL'ELEMENTO NON E' PRESENTE NELL'ARRAY
        array_mine.push(m);
    }
}
//----------------CREAZIONE NUMERI MINA---------------


console.log('Numeri mina (visibili per testing): ' + array_mine.join(' / '));

//Variabile d'appoggio per il punteggio
var punteggio = 0;
var game_over = false;
    while (isEqualToBomb(numero_utente) == false && game_over == false) {
        //Se non ci sono più possibili risposte l'utente ha vinto
        if (punteggio == max_numeri - mine) {
            console.log('Hai concluso il gioco totalizzando ben ' + punteggio + ' punti! Che fortuna sfacciata');
            game_over = true;
        }
        else {
            //Chiedi all'utente di inserire un numero
            var numero_utente = prompt('Inserisci un numero')

            //Controlla se lo ha già inserito
            if (isEqualToPrevious(numero_utente)) {
                console.log('Hai già inserito questo numero!');
                console.log('Numeri già inseriti: ' + array_previous);
            }

            //Controlla se è un numero valido
            else if (numero_utente > 0 && numero_utente <= max_numeri && !isNaN(numero_utente)) {
                //Stabilisci se il numero utente è una mina o meno
                if (isEqualToBomb(numero_utente) == false) {
                    punteggio++;
                    console.log('Complimenti, il numero inserito (' + numero_utente + ') non è una mina');
                    console.log('Punteggio: ' + punteggio);
                    array_previous.push(numero_utente);
                }
                else {
                    console.log('BOOM! Hai fatto esplodere una mina (' + numero_utente + ')');
                    console.log('Punteggio finale: ' + punteggio);
                }
            }
            else {
                console.log('Hai inserito un valore non valido!');
            }
        }
    }
