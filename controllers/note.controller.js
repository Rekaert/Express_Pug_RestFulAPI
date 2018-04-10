const fs = require('fs');
const notesFile = './database/note.model.json';

const Note = {
    getAll: function (req) {
        const toDo = req;
        let notes = [];
        try {
            const noteString = fs.readFileSync(notesFile);
            notes = JSON.parse(noteString);
        } catch (err) {
            return err;
        }
        return notes;
    },

    save: function (notes) {
        try {
            fs.writeFileSync(notesFile, JSON.stringify(notes));
        } catch (err) {
            return err;
        }
    },

    getNote: function (id = 1) {
        let notes = this.getAll();
        let note = notes.filter(note => note.id === parseInt(id));
        return note[0] || 'Not found';
    },

    addNote: function (title = 'default title', body = 'default body') {
        let notes = this.getAll();
        let id = 0;
        notes.forEach(note => {
            if (note.id > id)
                id = note.id;
        });
        const note = {
            id: id + 1,
            title,
            body
        };
        notes.push(note);
        this.save(notes);
        return {
            length: notes.length,
            data: note
        };
    },

    removeNote: function (id) {
        let notes = this.getAll();
        notes = notes.filter(note => note.id !== parseInt(id));
        this.save(notes);
        return notes.length;
    },

    editNote: function (id, title = "default title", body = "default body") {
        let notes = this.getAll();
        const index = notes.findIndex(note => note.id === parseInt(id));
        if (index !== -1) {
            notes[index].title = title;
            notes[index].body = body;
            this.save(notes);
            return notes[index];
        }
        return 'Data exists or not found';
    }
};

module.exports = Note;