import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import Card from '../components/Card';

const Home = () => {
  const { notes, loading } = useContext(NoteContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-800">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }
  if (notes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-800">
        <p className="text-gray-400 text-lg">No notes available.</p>
      </div>
    );
  }
  return (
    <div className=" min-h-[90vh] bg-gray-800 mx-auto">
      <div className="max-w-7xl p-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <Card key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Home;
