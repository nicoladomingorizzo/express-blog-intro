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


//app.get per home
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Bakery</h1>');
});


//app.get per products
app.get('/api/posts', (req, res) => {
    const postsProducts = [
        {
            title: 'Ciambellone ',
            content: 'Ciambellone bianco con zucchero a velo',
            image: '/images/ciambellone.jpeg',
            tags: ['dolce', 'dessert', 'zucchero a velo']
        },
        {
            title: 'Cracker di barbabietola',
            content: 'Cracker di barbabietola con semi vari',
            image: '/images/cracker_barbabietola.jpeg',
            tags: ['dolce', 'semi', 'barbabietola']
        },
        {
            title: 'Pane fritto dolce',
            content: 'Pane fritto dolce tagliato a tozzetti',
            image: '/images/pane_fritto_dolce.jpeg',
            tags: ['fritto', 'pane', 'zucchero']
        },
        {
            title: 'Pasta di barbabietola',
            content: 'Pasta di barbabietola con pistacchio',
            image: '/images/pasta_barbabietola.jpeg',
            tags: ['pasta', 'pistacchio', 'barbabietola']
        },
        {
            title: 'Torta paesana',
            content: 'Torta paesana xon noci e limone',
            image: '/images/torta_paesana.jpeg',
            tags: ['torta', 'limone', 'noci']
        }];
    res.json(postsProducts);
});


//faccio app.listen
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});