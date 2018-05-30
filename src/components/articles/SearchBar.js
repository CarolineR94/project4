import React from 'react';


const SearchBar = () => {

  [
    {
      language_code: 'af',
      language_name: 'Afrikaans'
    },
    {
      language_code: 'cs',
      language_name: 'čeština'
    },
    {
      language_code: 'da',
      language_name: 'dansk'
    },
    {
      language_code: 'de',
      language_name: 'Deutsch'
    },
    {
      language_code: 'el',
      language_name: 'ελληνικά'
    },
    {
      language_code: 'en',
      language_name: 'English'
    },
    {
      language_code: 'es',
      language_name: 'Español'
    }, {
      language_code: 'fi',
      language_name: 'suomi'
    },
    {
      language_code: 'fr',
      language_name: 'Français'
    },
    {
      language_code: 'hi',
      language_name: 'हिन्दी'
    },
    {
      language_code: 'it',
      language_name: 'italiano'
    },
    {
      language_code: 'ja',
      language_name: '日本語'
    },
    {
      language_code: 'nl',
      language_name: 'Nederlands'
    }, {
      language_code: 'pt',
      language_name: 'Português'
    },
    {
      language_code: 'ru',
      language_name: 'русский'
    },
    {
      language_code: 'ssw',
      language_name: 'SiSwati'
    },
    {
      language_code: 'st',
      language_name: 'Sesotho'
    },
    {
      language_code: 'sv',
      language_name: 'Svenska'
    },
    {
      language_code: 'tr',
      language_name: 'Türkçe'
    },
    {
      language_code: 'tsn',
      language_name: 'Setswana'
    },
    {
      language_code: 'tso',
      language_name: 'Xitsonga'
    },
    {
      language_code: 'xho',
      language_name: 'isiXhosa'
    }, {
      language_code: 'zh',
      language_name: '中文'
    },
    {
      language_code: 'zu',
      language_name: 'isiZulu'
    }
  ];

  return(
    <div className="field">
      <p className="control has-icons-left">
        <span className="select">
          <select className="is-rounded">
            <option default>Choose language...</option>
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
