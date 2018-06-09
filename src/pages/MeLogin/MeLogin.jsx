import React, { Component } from 'react';
import Login from './components/Login';

export default class MeLogin extends Component {
  static displayName = 'MeLogin';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="me-login-page">
        <Login />
      </div>
    );
  }
}
