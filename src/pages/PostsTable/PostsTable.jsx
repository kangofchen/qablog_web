import React, { Component } from 'react';
import TabTable from './components/TabTable';

export default class PostsTable extends Component {
  static displayName = 'PostsTable';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="posts-table-page">
        <TabTable />
      </div>
    );
  }
}
