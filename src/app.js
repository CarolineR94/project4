import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Navbar from './components/Navbar';

import ArticlesIndex from './components/articles/Index';
import ArticlesShow from './components/articles/Show';
import ArticlesNew from './components/articles/New';
import ArticlesEdit from './components/articles/Edit';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';



import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/articles/new" component={ArticlesNew} />
                <Route path="/articles/:id/:language/edit" component={ArticlesEdit} />
                <Route path="/articles/:id/:language" component={ArticlesShow} />
                <Route path="/articles" component={ArticlesIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
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
