import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Grid,Button} from '@icedesign/base';
import {Link} from 'react-router-dom'
import {hashHistory} from 'react-router-dom'

const {Row, Col} = Grid;

export default class SimpleFooter extends Component {
    static displayName = 'SimpleFooter';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="simple-footer">
                <IceContainer style={styles.ice}>
                    <Row wrap style={styles.content}>
                        <Col l="4" xxs="24">
                            {/*<a href="#" style={styles.brand}>*/}
                                {/*<img*/}
                                    {/*src="https://img.alicdn.com/tfs/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png"*/}
                                    {/*alt=""*/}
                                    {/*style={styles.logo}*/}
                                {/*/>*/}
                            {/*</a>*/}
                        </Col>
                        <Col l="20" xxs="24">
                            <div style={styles.nav}>
                                <Link to="/homepage" style={styles.navLink}>
                                    home
                                </Link>
                                <Link to="/blog" style={styles.navLink}>
                                    blog
                                </Link>
                                <Link to="/project" style={styles.navLink}>
                                    project
                                </Link>
                                <Link to="/about" style={styles.navLink}>
                                    about
                                </Link>
                                <Button type="primary" size="small" href="/#/me/login" component="a">sign in</Button>
                            </div>
                        </Col>
                    </Row>
                </IceContainer>
            </div>
        );
    }
}

const styles = {
    content: {
        alignItems: 'center',
    },
    logo: {
        width: '86px',
    },
    nav: {
        textAlign: 'right',
    },
    navLink: {
        marginRight: '20px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    ice:{
        marginBottom: '0px',
        padding:'0px',
    }
};
