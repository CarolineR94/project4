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
      .get(`/api/articles/${this.props.match.params.id}/${this.props.match.params.language}`)
      .then(res => this.setState(res.data));
  }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .put(`/api/articles/${id}/${this.props.match.params.language}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/articles/${id}/${this.props.match.params.language}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));

  }

  render(){
    return( <ArticleForm
      article={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />);
  }
}


export default ArticlesEdit;
