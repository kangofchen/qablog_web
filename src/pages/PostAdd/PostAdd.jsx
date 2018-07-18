import React, {Component} from 'react';
import BraftEditor from './components/BraftEditor';
import analyse from "../../components/analyse";
import ContentEditor from "./components/ContentEditor/ContentEditor";

export default class PostAdd extends Component {
    static displayName = 'PostAdd';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="post-add-page">
                <ContentEditor/>
                {/*<BraftEditor/>*/}
            </div>
        );
    }
}
