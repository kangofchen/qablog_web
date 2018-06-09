import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import BrandDisplay from './components/BrandDisplay';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";

export default class Project extends Component {
  static displayName = 'Project';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-page">
        <SimpleFooter/>
        <IntroBanner />
        <BrandDisplay />
      </div>
    );
  }
}
