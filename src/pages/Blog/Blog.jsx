import React, {Component} from 'react';
import {Grid} from '@icedesign/base';
import SimpleFooter from "../Homepage/components/SimpleFooter/SimpleFooter";
import TabArticle from "./components/TabArticle/TabArticle";
import analyse from "../../components/analyse";

const {Row, Col} = Grid;

export default class Blog extends Component {
    static displayName = 'Blog';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        analyse.send()
    }

    render() {
        return (
            <div className="blog-page">
                <SimpleFooter/>
                <Row wrap style={styles.content}>
                    <Col l="4" xxs="24">
                    </Col>
                    <Col l="16" xxs="24">
                        <TabArticle/>
                    </Col>
                    <Col l="4" xxs="24">
                    </Col>
                </Row>
            </div>
        );
    }
}

const styles = {
    content: {
        alignItems: 'center',
    },
};
