import React from 'react';
import ArticleForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ArticlesNew extends React.Component {

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
      // First create article
      .post('/api/articles', this.state,  {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      // Then create translation
      .then((article) => {
        axios
          .post(`/api/articles/${article.data._id}/translations`, this.state, {
            headers: { Authorization: `Bearer ${Auth.getToken()}` }
          })
          .then(() => this.props.history.push('/articles'))
          .catch(err => this.setState({ errors: err.response.data.errors }));
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <ArticleForm
      article={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />;
  }
}


export default ArticlesNew;
