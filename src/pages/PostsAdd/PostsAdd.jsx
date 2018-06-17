import React, {Component} from 'react';
import Test from "./components/LZEdit/Edit";

export default class PostsAdd extends Component {
    static displayName = 'PostsAdd';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="posts-add-page">
                {/*<ContentEditor />*/}


                <Test/>

            </div>
        );
    }
}


