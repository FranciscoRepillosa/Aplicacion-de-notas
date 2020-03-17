const { Router } = require('express');
const router = Router();

const { renderNotesForm, createNewNote, renderNotes, renderEditFrom, updateNote, deleteNote }= require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

router.get('/notes/add', isAuthenticated, renderNotesForm );

router.post('/notes/new-note', isAuthenticated ,createNewNote );

// Get all notes

router.get('/notes', isAuthenticated ,renderNotes );

// Edit notes
router.get('/notes/edit/:id', isAuthenticated , renderEditFrom)

router.put('/notes/edit/:id', isAuthenticated , updateNote)

//  Delete note

router.delete('/notes/delete/:id', isAuthenticated ,deleteNote )
module.exports = router