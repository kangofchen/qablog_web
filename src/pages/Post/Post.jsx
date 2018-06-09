import React, { Component } from 'react';
import MarkdownDocs from './components/MarkdownDocs';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";

export default class Post extends Component {
  static displayName = 'Post';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="post-page">
        <SimpleFooter/>
        <MarkdownDocs />
      </div>
    );
  }
}
