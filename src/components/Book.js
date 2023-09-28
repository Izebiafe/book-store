import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import './styles/book.css';

function Book({ book, deleteBook }) {
  return (
    <li className="book-container">
      <div className="book">
        <div className="book-details">
          <h3>
            {book.category}
          </h3>
          <h2>
            {book.title}
          </h2>
          <p>
            {book.author}
          </p>
        </div>
        <div className="book-buttons">
          <button type="button">
            Comments
          </button>
          <button type="button" onClick={() => deleteBook(book.id)}>
            Remove
          </button>
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <Stats />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
