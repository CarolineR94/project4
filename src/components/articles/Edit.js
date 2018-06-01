import React from 'react';
import ArticleForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ArticlesEdit extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount(){
    axios
      .get(`/api/articles/${this.props.match.params.id}`)
      .then(res => {
        const { language } = this.props.match.params;
        const translation = res.data.translations.find(translation => translation.language === language);
        this.setState(translation);
      });
  }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id, language } = this.props.match.params;
    axios
      .put(`/api/articles/${id}/${language}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/articles/${id}/${language}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return(
      <ArticleForm
        article={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}


export default ArticlesEdit;
