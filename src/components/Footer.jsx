import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-cyan-950 text-white text-center py-4">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
