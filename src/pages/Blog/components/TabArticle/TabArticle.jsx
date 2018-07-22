import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {enquireScreen} from 'enquire-js';
import ArticleList from './ArticleList';
import api from "../../../../utils/api";
import analyse from "../../../../components/analyse";

const ICON = {
    active: 'https://gw.alicdn.com/tfs/TB1bQQ4ihrI8KJjy0FpXXb5hVXa-20-24.png',
    inactive: 'https://gw.alicdn.com/tfs/TB1PwspilfH8KJjy1XbXXbLdXXa-20-24.png',
};

export default class TabArticle extends Component {
    static displayName = 'TabArticle';

    constructor(props) {
        super(props);
        this.queryCache = {};
        this.state = {
            isMobile: false,
            pots: [],
            number: null,
            size: null,
            total: null,
        };
    }

    componentWillMount() {
        this.enquireScreenRegister();
        this.queryCache.page = 0;
        this.fetchData(this.queryCache.page);
        analyse.send()
    }

    enquireScreenRegister = () => {
        const mediaCondition = 'only screen and (max-width: 720px)';

        enquireScreen((mobile) => {
            this.setState({
                isMobile: mobile,
            });
        }, mediaCondition);
    };

    changePage = (currentPage) => {
        this.queryCache.page = currentPage - 1;
        this.fetchData(this.queryCache.page);
    };

    fetchData = index => {
        api.post(`/api/post/list/${index}`).then((response) => {
            console.log('post list response : ', response.data);
            this.setState({
                posts: response.data.posts,
                number: response.data.number,
                size: response.data.size,
                total: response.data.total,
            })
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        console.log('to render page is : ', this.state)
        if (!this.state.total) {
            return null
        }
        return (
            <div className="tab-article">
                <IceContainer style={styles.tabList}>
                    <div
                        style={{
                            ...styles.tab,
                            ...styles.active,
                        }}
                    >
                        最新 <img src={ICON.active} style={styles.icon} alt="最新"/>
                    </div>
                    <div style={styles.tab}>
                        最热 <img src={ICON.inactive} style={styles.icon} alt="最热"/>
                    </div>
                    {/*<div style={styles.tab}>*/}
                        {/*距离截稿日期最近{' '}*/}
                        {/*<img*/}
                            {/*src={ICON.inactive}*/}
                            {/*style={styles.icon}*/}
                            {/*alt="距离截稿日期最近"*/}
                        {/*/>*/}
                    {/*</div>*/}
                </IceContainer>
                <ArticleList {...this.state} isMobile={this.state.isMobile} changePage={this.changePage}/>
            </div>
        );
    }
}

const styles = {
    tabList: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '0px',
    },
    icon: {
        width: '10px',
        height: '12px',
    },
    tab: {
        cursor: 'pointer',
        marginRight: '20px',
    },
    tabActive: {
        color: '#3080FE',
    },
};
