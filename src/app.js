import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';



import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

// import SecureRoute from './components/common/SecureRoute';
// import FlashMessages from './components/common/FlashMessages';

import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          {/* <Navbar/> */}
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={Home} />
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
