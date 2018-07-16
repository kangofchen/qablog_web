import React, {Component} from 'react';
import Login from './components/Login';
import analyse from "../../components/analyse";

export default class MeLogin extends Component {
    static displayName = 'MeLogin';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="me-login-page">
                <Login/>
            </div>
        );
    }
}
