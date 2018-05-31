import React from 'react';


const SearchBar = ({ handleChange }) => {

  const languages = [
    {
      code: 'all',
      name: 'All languages'
    },
    {
      code: 'af',
      name: 'Afrikaans'
    },
    {
      code: 'cs',
      name: 'čeština'
    },
    {
      code: 'da',
      name: 'dansk'
    },
    {
      code: 'de',
      name: 'Deutsch'
    },
    {
      code: 'el',
      name: 'ελληνικά'
    },
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'es',
      name: 'Español'
    }, {
      code: 'fi',
      name: 'suomi'
    },
    {
      code: 'fr',
      name: 'Français'
    },
    {
      code: 'hi',
      name: 'हिन्दी'
    },
    {
      code: 'it',
      name: 'italiano'
    },
    {
      code: 'ja',
      name: '日本語'
    },
    {
      code: 'nl',
      name: 'Nederlands'
    }, {
      code: 'pt',
      name: 'Português'
    },
    {
      code: 'ru',
      name: 'русский'
    },
    {
      code: 'ssw',
      name: 'SiSwati'
    },
    {
      code: 'st',
      name: 'Sesotho'
    },
    {
      code: 'sv',
      name: 'Svenska'
    },
    {
      code: 'tr',
      name: 'Türkçe'
    },
    {
      code: 'tsn',
      name: 'Setswana'
    },
    {
      code: 'tso',
      name: 'Xitsonga'
    },
    {
      code: 'xho',
      name: 'isiXhosa'
    }, {
      code: 'zh',
      name: '中文'
    },
    {
      code: 'zu',
      name: 'isiZulu'
    }
  ];

  return(
    <div className="field">
      <p className="control has-icons-left">
        <span className="select">
          <select className="is-rounded" name="language" onChange={handleChange}>
            {languages.map(language =>
              <option
                key={language.code}
                value={language.code}
                name={language.name}
              >
                {language.name}
              </option>)}
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
