const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => res.sendStatus(200));

app.get('/embed', (req, res, next) => {
    if (!req.query || !req.query.description) return res.send({
        error: "No Description Supplied"
    });
    return res.render('main.ejs', {
        content: req.query.description
    });
});

app.get('/embedAdd', (req, res, next) => {
    if (!req.query || !req.query.description) return res.send({
        error: "No Description Supplied!"
    });
    return res.send({
        author_name: req.query.description,
        type: "photo"
    });
});

app.listen(3000, () => console.log("Started on port: 3000"));