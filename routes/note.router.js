const express = require('express');
const noteRouter = express.Router();
const Note = require('../controllers/note.controller');

//api/note - összes note(adat) lekérése
//GET localhost:3000/api/note
noteRouter.get('/', (req, res) => {
    res.json(Note.getAll());
});

//api/note/1 - összes adott id-jú note(adat) lekérése
//GET localhost:3000/api/note/1
noteRouter.get('/:id', (req, res) => {
    res.json(Note.getNote(req.params.id));
});

//api/note - új note(adat) létrehozása
//POST localhost:3000/api/note
noteRouter.post('/', (req, res) => {
    res.json(Note.addNote(req.body.title, req.body.body));
});

//api/note/1 - adott id-jú note(adat) módosítása
//PUT localhost:3000/api/note/1
noteRouter.put('/:id', (req, res) => {
    res.json(Note.editNote(req.params.id, req.body.title, req.body.body));
});

//api/notes/1 - adott id-jú note törlése
//DELETE localhost:3000/api/note/1
noteRouter.delete('/:id', (req, res) => {
    res.json(Note.removeNote(req.params.id));
});

module.exports = noteRouter