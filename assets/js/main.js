//Istruzioni:
//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso il for in tutte le proprietà.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno, nome e cognome.
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto...
//...studente inserendo nell’ordine: nome, cognome e età.



//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome : "Diego",
    cognome : "Petronaci",
    età : 21,
}
console.log(studente);

//Stampare a schermo attraverso il for in tutte le proprietà.

for (var nome in studente) {
    console.log(studente[nome]);
    var nomeStudente = studente[nome];
    var titolo = `<h3> ${nomeStudente} </h3>`
    document.getElementById("titolo").insertAdjacentHTML("beforeend", titolo)
}

//Creare un array di oggetti di studenti.

var classe = [
    {
    nome : "Diego",
    cognome : "Petronaci",
    età : 21,
    },
    {
    nome: "Niccolo",
    cognome: "Santelli",
    età: 28,
    },
    {
    nome: "Antonio",
    cognome: "Quattrocchi",
    età: 25,
    }
]

console.log(classe);




//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto...
//...studente inserendo nell’ordine: nome, cognome e età.

var nomeUtente = prompt("Inserisci Nome");
var nome = nomeUtente.toUpperCase;
var cognomeUtente = prompt("Inserisci Cognome");
var cognome = cognomeUtente.toUpperCase;
var etaUtente = Number(prompt("Inserisci Età"));
var eta = etaUtente.toUpperCase;

var nuovoOggetto = {
    nome,
    cognome,
    eta
}

console.log(nuovoOggetto);

classe.push(nuovoOggetto);

console.log(classe);

//Ciclare su tutti gli studenti e stampare per ognuno, nome e cognome.

for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].nome);
    var studenteClasse = classe[i].nome;
    var altroTitolo = `<div> ${studenteClasse} </div>`;
    document.getElementById("altro_titolo").insertAdjacentHTML("beforeend", altroTitolo);
}

for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].cognome);
    var studenteClasse = classe[i].cognome;
    var altroTitolo = `<div> ${studenteClasse} </div>`;
    document.getElementById("altro_titolo_ancora").insertAdjacentHTML("beforeend", altroTitolo);
}