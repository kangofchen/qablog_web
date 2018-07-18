import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Grid, Form, Button, Select} from '@icedesign/base';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';

import BraftEditor from "../BraftEditor/BraftEditor";

const {Row, Col} = Grid;
const FormItem = Form.Item;

export default class ContentEditor extends Component {
    static displayName = 'ContentEditor';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                title: '',
                description: '',
                content: null,
                tags: [],
            },
        };
    }

    formChange = (value) => {
        console.log('value', value);
        this.setState({
            value,
        });
    };

    handleSubmit = () => {
        this.postForm.validateAll((errors, values) => {
            console.log('errors', errors, 'values', values);
            if (errors) {
                return false;
            }

            // ajax values
        });
    };


    render() {
        return (
            <div className="content-editor">
                <IceFormBinderWrapper
                    ref={(refInstance) => {
                        this.postForm = refInstance;
                    }}
                    value={this.state.value}
                    onChange={this.formChange}
                >
                    <IceContainer title="文章编辑">
                        <Form labelAlign="top" style={styles.form}>
                            <Row>
                                <Col span="11">
                                    <FormItem label="标题" required>
                                        <IceFormBinder name="title" required message="标题必填">
                                            <Input placeholder="这里填写文章标题"/>
                                        </IceFormBinder>
                                        <IceFormError name="title"/>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                {/*<Col span="11">*/}
                                    {/*<FormItem label="作者" required>*/}
                                        {/*<IceFormBinder*/}
                                            {/*name="author"*/}
                                            {/*required*/}
                                            {/*message="作者信息必填"*/}
                                        {/*>*/}
                                            {/*<Input placeholder="填写作者名称"/>*/}
                                        {/*</IceFormBinder>*/}
                                        {/*<IceFormError name="author"/>*/}
                                    {/*</FormItem>*/}
                                {/*</Col>*/}
                                <Col span="11">
                                    <FormItem label="标签" required>
                                        <IceFormBinder
                                            name="tags"
                                            required
                                            type="array"
                                            message="标签必填支持多个"
                                        >
                                            <Select
                                                style={styles.cats}
                                                multiple
                                                placeholder="请选择分类"
                                                dataSource={[
                                                    {label: '标签1', value: 'tag1'},
                                                    {label: '标签2', value: 'tag2'},
                                                    {label: '标签3', value: 'tag3'},
                                                ]}
                                            />
                                        </IceFormBinder>
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem label="描述">
                                <IceFormBinder name="description">
                                    <Input multiple placeholder="这里填写正文描述"/>
                                </IceFormBinder>
                            </FormItem>
                            <FormItem label="正文" required>
                                <IceFormBinder name="content">
                                    <BraftEditor/>
                                </IceFormBinder>
                            </FormItem>
                            <FormItem label="">
                                <Button type="primary" onClick={this.handleSubmit}>
                                    发布文章
                                </Button>
                            </FormItem>
                        </Form>
                    </IceContainer>
                </IceFormBinderWrapper>
            </div>
        );
    }
}

const styles = {
    form: {
        marginTop: 30,
    },
    cats: {
        width: '100%',
    },
};
