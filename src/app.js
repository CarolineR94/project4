import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

import ArticlesIndex from './components/articles/Index';
import ArticlesShow from './components/articles/Show';
import ArticlesNew from './components/articles/New';
import ArticlesEdit from './components/articles/Edit';
import ArticlesTranslate from './components/articles/Translate';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

import SecureRoute from './components/common/SecureRoute';
import FlashMessages from './components/common/FlashMessages';
import NotFound from './components/common/NotFound';


import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <FlashMessages/>
          <section className="section">
            <div className="container">
              <Switch>
                <SecureRoute path="/articles/new" component={ArticlesNew} />
                <SecureRoute path="/articles/:id/:language/edit" component={ArticlesEdit} />
                <SecureRoute path="/articles/:id/:language/translate" component={ArticlesTranslate} />
                <Route path="/articles/:id/:language" component={ArticlesShow} />
                <Route path="/articles" component={ArticlesIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
