import React from 'react';
import { Layout } from 'antd';
const { Sider, Content, Footer } = Layout;
import './index.less';
import Menu from '../Menu/Menu';
import MyHeader from './Header';
import Login from '../Login/Login';
import {inject, observer} from 'mobx-react';

@inject('GlobalStore')
@observer
export default class MyLayout extends React.Component{

    constructor(props) {
        super(props);
        console.log(this);
        this.globalStore = this.props.GlobalStore;
    }

    componentDidMount() {
    }

	render() {
        let isLogin = this.globalStore.isLogin;
        console.log(isLogin);
		return (
            <Layout className="root_layout">
                {
                    isLogin ?
                    <React.Fragment>
                        <Layout>
                            <Sider className="root_layout_sider">
                                <div className="root_layout_sider_header">
                                    雀送管理后台
                                </div>
                                <Menu />
                            </Sider>
                            <Content className="root_layout_content">
                                <MyHeader />
                            </Content>
                        </Layout>
                        <Footer className="root_layout_footer">专业小程序开发者 微信号： 15906672702 </Footer>
                    </React.Fragment>
                    :
                    <Login />
                }

            </Layout>
		);
	}
}
