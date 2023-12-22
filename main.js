let nomeUtente = prompt ('Dammi il tuo nome', "Christian");
let cognomeUtente = prompt ('Dammi il tuo cognome', "Baciu");
let coloreUtente = prompt ('Dammi il tuo colore', "nero");
let numeroUtente = prompt ('Dammi il tuo numero', "31");

console.log (nomeUtente , cognomeUtente , coloreUtente , numeroUtente);


document.writeln(` <p> <strong>La tua password è:</strong>  ${ nomeUtente + cognomeUtente + coloreUtente + numeroUtente }</p>`)