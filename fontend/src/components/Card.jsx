import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

const Card = ({ note }) => {
  const { updateNote, deleteNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  // handleUpdate
  const handleUpdate = async () => {
    await updateNote(note._id, editedNote);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <div className="bg-gray-700 p-4 rounded-md flex flex-col justify-between gap-2">
            <input
              type="text"
              value={editedNote.title}
              onChange={e =>
                setEditedNote({ ...editedNote, title: e.target.value })
              }
              className="bg-gray-600 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded"
              placeholder="Note Title"
            />
            <textarea
              value={editedNote.content}
              onChange={e =>
                setEditedNote({ ...editedNote, content: e.target.value })
              }
              className="bg-gray-600 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded"
              placeholder="Note Content"
            />
            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="bg-yellow-500 text-white px-2 rounded text-sm cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-2 rounded text-sm cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-700 p-4 rounded-md flex flex-col justify-between gap-2">
            <div className="h-auto mb-4">
              <h2 className="text-white font-semibold text-lg mb-1">
                {note.title}
              </h2>
              <p className="text-gray-300 text-sm">{note.content}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-400 text-xs">16 aus 2026</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm px-2 rounded cursor-pointer"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm px-2 py-0.5 rounded cursor-pointer"
                  onClick={() => deleteNote(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
