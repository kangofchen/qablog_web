/* eslint react/no-string-refs:0 */
import React, {Component} from 'react';
import {Input, Button, Checkbox, Grid, Feedback} from '@icedesign/base';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import './Login.scss';
import { Redirect } from 'react-router-dom';

const {Row, Col} = Grid;

export default class Login extends Component {
    static displayName = 'Login';
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                account: '',
                password: '',
                checkbox: false,
            },
            redirectTo: false,
        };
    }

    formChange = (value) => {
        this.setState({
            value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.refs.form.validateAll((errors, values) => {
            if (errors) {
                console.log('errors', errors);
                return;
            }
            console.log('values:', values);
            // Feedback.toast.success('登录成功');
            this.setState({
                redirectTo: true
            });
            // 登录成功后做对应的逻辑处理
        });
    };

    render() {
        const {redirectTo} = this.state;

        if (redirectTo) {
            return <Redirect push to="/admin"/>;
        }
        return (
            <div style={styles.container} className="user-login">
                <div style={styles.formContainer}>
                    <IceFormBinderWrapper
                        value={this.state.value}
                        onChange={this.formChange}
                        ref="form"
                    >
                        <div>
                            <Row style={styles.formItem}>
                                <Col style={styles.formItemCol}>
                                    <IceIcon type="lock" size="small" style={styles.inputIcon}/>
                                    <IceFormBinder name="password" required message="必填">
                                        <Input
                                            size="large"
                                            htmlType="password"
                                            placeholder="UHKO-OLKE-OPSD-UUQP-BNCX-ZMRD"
                                        />
                                    </IceFormBinder>
                                </Col>
                                <Col>
                                    <IceFormError name="password"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Button
                                    type="light" shape="ghost"
                                    onClick={this.handleSubmit}
                                    style={styles.submitBtn}
                                >
                                    登 录
                                </Button>
                            </Row>
                        </div>
                    </IceFormBinderWrapper>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        paddingTop: '100px',
        background: '#f0f2f5',
        backgroundImage:
            'url(https://img.alicdn.com/tfs/TB1kOoAqv1TBuNjy0FjXXajyXXa-600-600.png)',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    title: {
        textAlign: 'center',
        fontSize: '33px',
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: 'Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif',
        fontWeight: '600',
    },
    desc: {
        margin: '10px 0',
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.45)',
    },
    logo: {
        marginRight: '10px',
        width: '48px',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '368px',
        margin: '0 auto',
    },
    formItem: {
        position: 'relative',
        marginBottom: '25px',
        flexDirection: 'column',
        padding: '0',
    },
    formItemCol: {
        position: 'relative',
        padding: '0',
    },
    formTitle: {
        textAlign: 'center',
        margin: '0 0 20px',
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: 'bold',
    },
    inputIcon: {
        position: 'absolute',
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#999',
    },
    submitBtn: {
        fontSize: '16px',
        height: '40px',
        lineHeight: '40px',
        // background: '#3080fe',
        borderRadius: '4px',
    },
    checkbox: {
        marginLeft: '5px',
    },
    tips: {
        justifyContent: 'center',
    },
    link: {
        color: '#999',
        textDecoration: 'none',
        fontSize: '13px',
    },
    line: {
        color: '#dcd6d6',
        margin: '0 8px',
    },
};
