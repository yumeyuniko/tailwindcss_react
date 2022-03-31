import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        HOME
      </Link>
      <Link className="p-4" to="/menu">
        MENU
      </Link>
      <Link className="p-4" to="/about">
        ABOUT
      </Link>
      <Link className="p-4" to="/contact">
        CONTACT
      </Link>
    </div>
  );
};

export default Dropdown;
