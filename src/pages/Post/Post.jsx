import React, {Component} from 'react';
import MarkdownDocs from './components/MarkdownDocs';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";
import analyse from "../../components/analyse";

export default class Post extends Component {
    static displayName = 'Post';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="post-page">
                <SimpleFooter/>
                <MarkdownDocs {...this.props}/>
            </div>
        );
    }
}
