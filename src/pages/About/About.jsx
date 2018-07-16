import React, {Component} from 'react';
import LeftContentDisplay from './components/LeftContentDisplay';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";
import analyse from "../../components/analyse";

export default class About extends Component {
    static displayName = 'About';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="about-page">
                <SimpleFooter/>
                <LeftContentDisplay/>
            </div>
        );
    }
}
