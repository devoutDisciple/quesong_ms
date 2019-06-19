import React from 'react';
import { Layout } from 'antd';
const { Sider, Content, Footer, Header } = Layout;
import './index.less';
import Menu from '../Menu/Menu';

export default class MyLayout extends React.Component{

	render() {
		return (
            <Layout className="root_layout">
                <Layout>
                    <Sider className="root_layout_content_sider">
                        <div className="root_layout_content_sider_header">
                            雀送管理后台
                        </div>
                        <Menu />
                    </Sider>
                    <Content className="root_layout_content_text">
                        <Header className="root_layout_content_text_header">Header</Header>
                    </Content>
                </Layout>
                <Footer className="root_layout_footer">雀送小程序 技术支持： 15906672702</Footer>
            </Layout>
		);
	}
}
