import React, { Component } from 'react';
import LeftContentDisplay from './components/LeftContentDisplay';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";

export default class About extends Component {
  static displayName = 'About';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        <SimpleFooter/>
        <LeftContentDisplay />
      </div>
    );
  }
}
