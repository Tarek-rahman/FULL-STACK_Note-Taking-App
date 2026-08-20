import { createContext, useEffect, useState } from 'react';
import BASE_URL from '../api/url';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch all notes from the backend
  const getNotes = async () => {
    setLoading(true);
    const response = await BASE_URL.get('/getAllNotes');
    setNotes(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getNotes();
  }, []);

  // create a new note
  const createNote = async note => {
    const response = await BASE_URL.post('/createNote', note);
    setNotes([response.data, ...notes]);
  };

  // update a note
  const updateNote = async (id, updatedNote) => {
    const response = await BASE_URL.put(`/updateNote/${id}`, updatedNote);
    setNotes(notes.map(note => (note._id === id ? response.data : note)));
  };

  // delete a note
  const deleteNote = async id => {
    await BASE_URL.delete(`/deleteNote/${id}`);
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <NoteContext.Provider
      value={{ notes, loading, getNotes, createNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
