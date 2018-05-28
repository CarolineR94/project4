import React from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import Auth from '../../lib/Auth';



class ArticlesShow extends React.Component{

  state = {}

  componentDidMount(){
    axios.get(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`)
      .then(res => this.setState({ article: res.data }));
  }

  handleDelete = () => {
    axios
      .delete(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/articles'));
  }



  render(){
    const { article } = this.state;
    if(!article) return null;
    return(
      <div className="columns is-multiline">
        <div className="column is-10">
          <div className="card show-page-card">
            <div className="card-image hero-image" style={{ backgroundImage: `url(${article.image})` }}/>
            <div className="card-content">
              <h1 className="title is-3">{article.title}</h1>
              <h2 className="subtitle is-5">{article.tagline}</h2>
              <small><em>By {article.author}</em></small>
              <small>{article.createdAtRelative}</small>
              <p className="show-page-article-content">{article.content}</p>
            </div>
          </div>
        </div>
        <div className="column is-2">
          <ul className="show-buttons">
            <Link to={`/articles/${article._id}/${this.props.match.params.language}/edit`} className="button show-button"><i className="fas fa-lg fa-edit"></i></Link>
            <button onClick={this.handleDelete} className="button show-button"><i className="far fa-lg fa-trash-alt"></i></button>
            <Link to="" className="button show-button"><i className="fas fa-lg fa-globe"></i></Link>
            {/* {article.translatedInto.map(language =>
              <Link key={language} to={`/articles/${article._id}/${language}`}>
                {language}
              </Link>
            )} */}
          </ul>
        </div>
      </div>
    );
  }
}


export default ArticlesShow;
