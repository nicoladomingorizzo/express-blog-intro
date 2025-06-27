/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /api/posts che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman
*/

//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
//creo le costanti per richiamare express
const express = require('express');
const app = express();
const port = 3030;

//con app.use rendo richiamabili le immagini all'intenro di public
app.use(express.static('public'));

//faccio app.listen
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

//app.get per home
app.get('/', (req, res) => {

});