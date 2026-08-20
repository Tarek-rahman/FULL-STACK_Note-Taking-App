import express from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from '../controllers/note.controller.js';
const router = express.Router();

router.post('/createNote', createNote);
router.get('/getAllNotes', getAllNotes);
router.put('/updateNote/:id', updateNote);
router.delete('/deleteNote/:id', deleteNote);
export default router;
