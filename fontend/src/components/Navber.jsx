import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuNotebookPen } from 'react-icons/lu';

const Navber = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white sm:px-4 md:px-20 sticky top-0 z-50 shadow-xl">
      <div>
        <NavLink to="/" className="flex items-center space-x-2">
          <LuNotebookPen className="text-xl" />
          <span>NoteKeeper</span>
        </NavLink>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/createNote">Create Note</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navber;
