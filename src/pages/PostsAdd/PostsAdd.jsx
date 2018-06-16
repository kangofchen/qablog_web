import React, { Component } from 'react';
import ContentEditor from './components/ContentEditor';
import Images from "./components/ImageEdit/Images";

export default class PostsAdd extends Component {
  static displayName = 'PostsAdd';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="posts-add-page">
        <ContentEditor />

        <Images/>
      </div>
    );
  }
}
