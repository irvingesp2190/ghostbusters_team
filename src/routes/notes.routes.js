const express = require("express")
const router = express.Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote 
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth')

//New note
router.get('/notes/add',isAuthenticated, renderNoteForm);


router.post('/notes/new-note',isAuthenticated, createNewNote);

//Get All note
router.get('/notes',isAuthenticated, renderNotes);

//Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);

router.put('/notes/edit/:id', isAuthenticated,  updateNote);

//Delete note 
router.delete('/notes/delete/:id', deleteNote);

module.exports = router