const express = require("express")
const router = express.Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote } = require('../controllers/notes.controller');

//New note
router.get('/notes/add', renderNoteForm);
router.post('/notes/add', createNewNote);

//Get All note
router.get('/notes', renderNotes);

//Edit Notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

//Delete note 
router.delete('/notes/delete/:id', deleteNote);



module.exports = router