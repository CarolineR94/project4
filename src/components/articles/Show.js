import React from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Card from './Card';


class ArticlesShow extends React.Component{

  state = {}

  componentDidMount(){
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }));
  }

  getTranslation = () => {
    const { language } = this.props.match.params;
    return this.state.article.translations.find(translation => translation.language === language);
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
    const translation = this.getTranslation();
    return(
      <div className="columns is-multiline">
        <div className="column is-10">
          <Card translation={translation} translatedInto={article.translatedInto} articleId={article._id} />
        </div>
        <div className="column is-2">

          {Auth.isAuthenticated() &&
          <ul className="show-buttons">
            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/translate`} className="button show-button translate-icon"><img src="assets/translate.svg"/></Link>

            {Auth.isCurrentUser(translation.author) &&
            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/edit`} className="button show-button edit-icon"><i className="fas fa-lg fa-edit"></i></Link>}

            {Auth.isCurrentUser(translation.author) &&
            <button onClick={this.handleDelete} className="button show-button delete-icon"><i className="far fa-lg fa-trash-alt"></i></button>}
          </ul>}

        </div>
      </div>
    );
  }
}


export default ArticlesShow;
