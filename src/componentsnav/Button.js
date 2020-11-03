import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to="donation">
      <button className="btn btn-white">DONATION</button>
    </Link>
  );
}
