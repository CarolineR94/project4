import React from 'react';
import ArticleForm from './Form';
import Card from './Card';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ArticlesTranslate extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount(){
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => {
        const { language } = this.props.match.params;
        const translation = res.data.translations.find(translation => translation.language === language);
        this.setState({ translation });
      });
  }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value }, () => console.log(this.state));
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`/api/articles/${this.props.match.params.id}/translations`, this.state,  {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/articles/${this.props.match.params.id}/${this.props.match.params.language}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    if(!this.state.translation) return null;
    return(
      <div className="columns">
        <div className="column">
          <Card translation={this.state.translation} />
        </div>
        <div className="column">
          <ArticleForm
            article={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleLanguageChange={this.handleLanguageChange}
            errors={this.state.errors}
          />
        </div>
      </div>
    );
  }
}


export default ArticlesTranslate;
