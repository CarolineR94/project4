import React from 'react';
import axios from 'axios';


class ArticlesShow extends React.Component{

  state = {}

  componentDidMount(){
    axios.get(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`)
      .then(res => this.setState({ article: res.data }));
  }

  render(){
    const { article } = this.state;
    if(!article) return null;
    return(
      <div>
        <div className="hero-image" style={{ backgroundImage: `url(${article.image})` }}/>
        <div>
          <h1 className="title is-1">{article.title}</h1>
          <h2 className="subtitle is-2">{article.tagline}</h2>
          <small>{article.author}</small>
          <small>{article.createdAtRelative}</small>
          <p>{article.content}</p>
        </div>
      </div>
    );
  }
}


export default ArticlesShow;
