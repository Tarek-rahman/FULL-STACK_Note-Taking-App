import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const { createNote } = useContext(NoteContext);
  const navigate = useNavigate();
  const [notes, setNotes] = useState({
    title: '',
    content: '',
  });

  // handleSubmit
  const handleSubmit = async e => {
    e.preventDefault();
    await createNote(notes);
    setNotes({ title: '', content: '' });
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-800">
      <form className="w-125 bg-gray-700 p-4 rounded-md">
        <h2 className="text-center mb-4 text-2xl text-blue-500 font-semibold">
          Create New Note
        </h2>
        <div className="mb-4">
          <input
            value={notes.title}
            onChange={e => setNotes({ ...notes, title: e.target.value })}
            type="text"
            required
            placeholder="Enter note title..."
            className="rounded-md w-full bg-gray-600 p-2 text-gray-100 active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={notes.content}
            onChange={e => setNotes({ ...notes, content: e.target.value })}
            required
            placeholder="Write your note here..."
            className="rounded-md w-full bg-gray-600 p-2 min-h-30 text-gray-100 active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            onClick={e => handleSubmit(e)}
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 w-full rounded-md cursor-pointer"
          >
            Create Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
