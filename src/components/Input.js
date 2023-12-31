import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './styles/input.css';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !author || !category) {
      setErrorMessage('Please fill in all the fields before adding the book.');
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="input-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        />
        <input
          type="text"
          placeholder="Book author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="author"
        />
        <div className="category-input">
          <input
            type="text"
            placeholder="Category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category"
          />
          <i className="fas fa-caret-down" />
        </div>

        {errorMessage && <div className="text-danger error-message">{errorMessage}</div>}
        <button type="submit" id="add-new-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Input;
