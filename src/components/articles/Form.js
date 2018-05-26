import React from 'react';

const ArticleForm = ({ handleChange, handleSubmit, article, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>

      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" className="input" placeholder="Name" onChange={handleChange} value={article.title || ''} />
        {errors.title && <small>{errors.title}</small>}
      </div>

      <div className="field">
        <label htmlFor="tagline">Tagline</label>
        <input id="tagline" name="tagline" className="input" placeholder="Tagline" onChange={handleChange} value={article.tagline || ''} />
        {errors.tagline && <small>{errors.tagline}</small>}
      </div>

      <div className="field">
        <label htmlFor="image">Image</label>
        <input id="image" name="image" className="input" placeholder="Image" onChange={handleChange} value={article.image || ''} />
        {errors.image && <small>{errors.image}</small>}
      </div>

      <div className="field">
        <label htmlFor="language">Language</label>
        <textarea id="language" name="language" className="input" placeholder="Language" onChange={handleChange} value={article.language || ''}/>
        {errors.language && <small>{errors.language}</small>}
      </div>

      <div className="field">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" className="textarea" placeholder="Content" onChange={handleChange} value={article.content || ''}/>
        {errors.content && <small>{errors.content}</small>}
      </div>


      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default ArticleForm;
