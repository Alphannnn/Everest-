import Note from '../models/note.model.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

// GET /api/notes
export const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// GET /api/notes/:id
export const getNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error('Note not found');
  }
  res.json(note);
});

// POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content });
  res.status(201).json(note);
});

// PUT /api/notes/:id
export const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!note) {
    res.status(404);
    throw new Error('Note not found');
  }
  res.json(note);
});

// DELETE /api/notes/:id
export const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error('Note not found');
  }
  res.json({ message: 'Note deleted', id: req.params.id });
});
