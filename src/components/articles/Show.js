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
      <div className="card">
        <div className="container">
          <div className="card-image hero-image" style={{ backgroundImage: `url(${article.image})` }}/>
          <div className="card-content">
            <h1 className="title is-2">{article.title}</h1>
            <h2 className="subtitle is-4">{article.tagline}</h2>
            <small>{article.author}</small>
            <small>{article.createdAtRelative}</small>
            <p>{article.content}</p>
            <Link to={`/articles/${article._id}/${this.props.match.params.language}/edit`} className="button">Edit</Link>
            <button onClick={this.handleDelete} className="button">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ArticlesShow;
