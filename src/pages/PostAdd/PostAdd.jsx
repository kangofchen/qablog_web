import React, { Component } from 'react';
import BraftEditor from './components/BraftEditor';

export default class PostAdd extends Component {
  static displayName = 'PostAdd';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="post-add-page">
        <BraftEditor />
      </div>
    );
  }
}
