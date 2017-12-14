"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./db");
const app = express();
const router = express.Router();
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/api', (req, res, next) => {
    db_1.procedure('spGetMovies')
        .then((movies) => {
        res.json(movies[0]);
    });
})
    .get('/api/:id', (req, res, next) => {
    db_1.procedure('spGetMovie', [+req.params.id])
        .then((movies) => {
        res.json(movies[0][0]);
    });
})
    .post('/api', (req, res, next) => {
    db_1.procedure('spInsertMovie', [req.body.title, req.body.director, req.body.poster])
        .then((sets) => {
        return res.json(sets[0][0]);
    });
});
app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
