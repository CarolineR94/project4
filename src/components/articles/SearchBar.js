import React from 'react';

const SearchBar = () => {
  return(
    <div className="field has-addons">
      <p className="control search-bar">
        <span className="select">
          <select>
            <option>en</option>
            <option>fr</option>
            <option>it</option>
          </select>
        </span>
      </p>
      <p className="control">
        <input className="input" type="text" placeholder="Search..."/>
      </p>
      <p className="control">
        <a className="button search-bar">
          <i className="fas fa-search"></i>
        </a>
      </p>
    </div>
  );
};

export default SearchBar;
