import React from 'react';
import ArticleForm from './Form';
import ArticlesShow from './Show';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ArticlesTranslate extends React.Component {

  state = {
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }


  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/articles/translations', this.state,  {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(` /api/articles/${this.props.match.params.id}/${this.props.match.params.language}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return(
      <div className="columns">
        <div className="column">
          <ArticlesShow/>
        </div>
        <div className="column">
          <ArticleForm
            article={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </div>
    );
  }
}


export default ArticlesTranslate;
