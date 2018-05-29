import React from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import Auth from '../../lib/Auth';



class ArticlesShow extends React.Component{

  state = {}

  componentDidMount(){
    axios.get(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`)
      .then(res => this.setState({ translation: res.data }));
  }

  handleDelete = () => {
    axios
      .delete(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/articles'));
  }



  render(){
    const { translation } = this.state;
    if(!translation) return null;
    return(
      <div className="columns is-multiline">
        <div className="column is-10">
          <div className="card show-page-card">
            <div className="card-image hero-image" style={{ backgroundImage: `url(${translation.image})` }}/>
            <div className="card-content">
              <h1 className="title is-3">{translation.title}</h1>
              <h2 className="subtitle is-5">{translation.tagline}</h2>
              {translation.author && <small><em>By {translation.author.username}</em></small>}
              <small>{translation.createdAtRelative}</small>
              <p className="show-page-article-content">{translation.content}</p>
            </div>
          </div>
        </div>
        <div className="column is-2">
          <ul className="show-buttons">
            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/edit`} className="button show-button"><i className="fas fa-lg fa-edit"></i></Link>
            <button onClick={this.handleDelete} className="button show-button"><i className="far fa-lg fa-trash-alt"></i></button>
            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/translate`} className="button show-button"><img className="translate-icon" src="../../assets/translate.svg"/></Link>
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
