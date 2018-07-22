import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import './MarkdownDocs.scss';
// import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import analyse from "../../../../components/analyse";
import api from "../../../../utils/api";
import {Grid,Button} from '@icedesign/base';

const {Row, Col} = Grid;

export default class MarkdownDocs extends Component {
    static displayName = 'MarkdownDocs';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            post: {
                title:'',
                content:'',
                tags:[{
                    id:'',
                    name:'',
                }],

            },
        };
    }

    componentWillMount() {
        console.log(this.props)
        analyse.send()
        const {id:postId} = this.props.match.params

        api.get(`/api/post/${postId}`).then((response) => {
            console.log('postId response : ', response.data);
            this.setState({
                post: response.data,
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    renderTag = (item, onClick) => {
        return (
            <Button size="small" onClick={onClick} key={item.id} style={styles.button}>
                {item.name}
            </Button>
        );
    };

    handleTagClick = () => {

    };

    render() {
        const {post} = this.state

        // const editorPropsDisplay = {
        //     height: 0,
        //     contentFormat: 'html',
        //     // disabled: true,
        //     controls: [],
        //     initialContent: post.content,
        //     contentId: post.id,
        // };

        console.log('render post is : ', post)

        return (
            <IceContainer>

                <Row wrap style={styles.content}>
                    <Col l="4" xxs="24">
                    </Col>
                    <Col l="16" xxs="24">
                        <div><h1>{post.title}</h1></div>
                        <div>
                            {post.tags.map((item) => {
                                return this.renderTag(
                                    item,
                                    this.handleTagClick.bind(this, post.id, item),
                                    post.id
                                );
                            })}
                        </div>
                        {/*<BraftEditor {...editorPropsDisplay} />*/}
                        <span dangerouslySetInnerHTML={{__html: post.content}} />
                    </Col>
                    <Col l="4" xxs="24">
                    </Col>
                </Row>

            </IceContainer>
        );

        // return (
        //   <div>
        //       {/*<pre>{initialSourceHtml}</pre>*/}
        //       {/*<span dangerouslySetInnerHTML={{__html: initialSourceHtml}} />*/}
        //     <ReactMarkdown className="markdown-docs-body" source={initialSource} />
        //
        //   </div>
        // );
    }
}

const styles = {
    content: {
        alignItems: 'center',
    },
    button: {
        marginRight: '10px',
    },
};