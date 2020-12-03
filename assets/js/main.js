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
    nome: "Andrea",
    cognome: "D'Auria",
    età: 25,
    }
]

for (var nome in classe) {
    console.log(classe[nome]);
    var studenteClasse = classe[nome];
    var altroTitolo = `<h3> ${studenteClasse} </h3>`;
    document.getElementById("altro_titolo").insertAdjacentHTML("beforeend", altroTitolo);
}