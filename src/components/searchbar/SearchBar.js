/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSubmit }) => {
  const handleCallback = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get('search');

    const hist = [];
    if (localStorage.getItem('search') != null) {
      hist.push(...JSON.parse(localStorage.getItem('search')));
    }
    if (!hist.some(item => item === search)) {
      hist.unshift(search);
    }
    localStorage.setItem('search', JSON.stringify(hist));

    e.target.querySelector('.search-input').value = '';
    handleSubmit(search);
  };

  const handleFocus = e => {
    e.target.nextElementSibling.innerHTML = '';
    if (localStorage.getItem('search') != null) {
      const searchArray = JSON.parse(localStorage.getItem('search'));
      searchArray.forEach(i => {
        const node = document.createElement('option');
        const val = document.createTextNode(i);
        node.appendChild(val);
        e.target.nextElementSibling.appendChild(node);
      });
    }
  };

  return (
    <div className="form-container">
      <form className="form" autoComplete="off" onSubmit={e => handleCallback(e)} onFocus={e => handleFocus(e)}>
        <input className="search-input" type="text" name="search" placeholder="Search" list="datalist" />
        <datalist id="datalist" />
        <input type="submit" className="submit-button" />
      </form>
    </div>
  );
};

export default SearchBar;
