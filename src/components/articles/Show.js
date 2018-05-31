import React from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Card from './Card';


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
        <Card translation={translation} />
        <div className="column is-2">

          {Auth.isAuthenticated() &&
          <ul className="show-buttons">
            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/edit`} className="button show-button edit-icon"><i className="fas fa-lg fa-edit"></i></Link>

            <Link to={`/articles/${this.props.match.params.id}/${this.props.match.params.language}/translate`} className="button show-button translate-icon"><img src="../../assets/translate.svg"/></Link>

            <button onClick={this.handleDelete} className="button show-button delete-icon"><i className="far fa-lg fa-trash-alt"></i></button>
          </ul>}

          {/* <ul>
            {article.translatedInto.map(language =>
              <Link key={language} to={`/articles/${article._id}/${language}`}>
                {language}
              </Link>
            )}
          </ul> */}

        </div>
      </div>
    );
  }
}


export default ArticlesShow;
