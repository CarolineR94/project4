import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class ArticlesIndex extends React.Component{
  state = {
    articles: [],
    search: '',
    languageFilter: 'en'
  }




  componentDidMount(){
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data }));
  }


  render(){
    return(
      <div>
        <SearchBar/>
        <div className="columns is-multiline">
          {this.state.articles.map(article =>
            <div className="column is-one-third-desktop is-half-tablet" key={article._id}>
              <div className="card">
                <div className="card-image"
                  style={{ backgroundImage: `url(${article.translations[0].image})` }}>
                </div>

                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 index-title">{article.translations[0].title}</p>
                      <p className="subtitle is-6 index-subtitle">{article.translations[0].tagline}</p>
                    </div>
                  </div>


                  {article.translatedInto.map(language =>
                    <Link className="button is-rounded" key={language} to={`/articles/${article._id}/${language}`}>
                      {language}
                    </Link>
                  )}
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ArticlesIndex;
