import React, {Component} from 'react';
import BasicNotFound from '../../components/BasicNotFound';
import './NotFound.scss';
import analyse from "../../components/analyse";

export default class NotFound extends Component {
    static displayName = 'NotFound';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="not-found-page">
                <BasicNotFound/>
            </div>
        );
    }
}
