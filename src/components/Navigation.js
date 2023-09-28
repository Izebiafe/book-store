import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation.css';

const Navbar = () => (
  <header>
    <div className="navbar">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="user">
      <i className="fa-solid fa-user" />
    </div>
  </header>
);

export default Navbar;
