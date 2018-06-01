import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ translation, translatedInto, articleId }) => {
  return (
    <div className="card show-page-card">
      <div className="card-image hero-image" style={{ backgroundImage: `url(${translation.image})` }}/>
      <div className="card-content">
        <h1 className="title is-3">{translation.title}</h1>
        <h2 className="subtitle is-5">{translation.tagline}</h2>
        {translation.author && <small>By {translation.author.username}</small>}
        <br/>
        <small><em>{translation.createdAtRelative}</em></small>
        <p className="show-page-article-content">{translation.content}</p>

        {translatedInto && translatedInto.map(language =>
          <Link className="button is-rounded index-language-button" key={language} to={`/articles/${articleId}/${language}`}>
            {language}<i className="fa-xs fas fa-search"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
