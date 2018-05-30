import React from 'react';


const SearchBar = () => {

  return(
    <div className="field">
      <p className="control has-icons-left">
        <span className="select">
          <select className="is-rounded">
            <option default>Choose language...</option>
            <option>af</option>
            <option>cs</option>
            <option>da</option>
            <option>de</option>
            <option>el</option>
            <option>en</option>
            <option>es</option>
            <option>fa</option>
            <option>fi</option>
            <option>fr</option>
            <option>hi</option>
            <option>it</option>
            <option>ja</option>
            <option>nl</option>
            <option>nso</option>
            <option>pt</option>
            <option>ru</option>
            <option>ssw</option>
            <option>st</option>
            <option>sv</option>
            <option>tr</option>
            <option>tsn</option>
            <option>tso</option>
            <option>xho</option>
            <option>yue</option>
            <option>zh</option>
            <option>zu</option>
          </select>
        </span>
        <span className="icon is-small is-left">
          <i className="fas fa-globe"></i>
        </span>
      </p>
    </div>
  );
};

export default SearchBar;
