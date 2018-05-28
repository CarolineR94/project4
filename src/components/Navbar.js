import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="logo">lingpost.</h1>
          </Link>
          <a role="button" className={`navbar-burger ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/articles" className="navbar-item navbar-icon"><i className="far fa-lg fa-list-alt"></i></Link>
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item navbar-icon">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item navbar-icon">Login</Link>}
            {Auth.isAuthenticated() && <Link to="/articles/new" className="navbar-item navbar-icon"><i className="fas fa-lg fa-pencil-alt"></i></Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item navbar-icon"><div className="icon"><i className="fas fa-lg fa-sign-out-alt"></i></div></a>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
