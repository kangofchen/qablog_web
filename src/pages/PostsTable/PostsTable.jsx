import React, {Component} from 'react';
import TabTable from './components/TabTable';
import analyse from "../../components/analyse";

export default class PostsTable extends Component {
    static displayName = 'PostsTable';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="posts-table-page">
                <TabTable/>
            </div>
        );
    }
}
