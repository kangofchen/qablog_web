import React, {Component} from 'react';
import IntroBanner from './components/IntroBanner';
import BrandDisplay from './components/BrandDisplay';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";
import analyse from "../../components/analyse";

export default class Project extends Component {
    static displayName = 'Project';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="project-page">
                <SimpleFooter/>
                <IntroBanner/>
                <BrandDisplay/>
            </div>
        );
    }
}
