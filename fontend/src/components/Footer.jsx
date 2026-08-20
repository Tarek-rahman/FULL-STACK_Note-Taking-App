import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-2 text-center shadow border-t border-t-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Note Taking App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
