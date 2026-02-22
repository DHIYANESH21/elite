import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full text-lg font-bold text-white btn-glossy btn-glossy-hover transition-all duration-300 group";
  
  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
