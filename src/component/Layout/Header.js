import React from 'react';
import { Menu, Dropdown, Icon, Layout } from 'antd';
const { Header } = Layout;
import './index.less';

export default class MyHeader extends React.Component{

    async componentDidMount() {
    }

	render() {
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a href="javascript:;">清华大学</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href="javascript:;">北京大学</a>
              </Menu.Item>
            </Menu>
        );
		return (
            <Header className="root_layout_content_header">
                <span className="root_layout_content_header_span">校区切换：</span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        北京大学 <Icon type="down" />
                    </a>
                </Dropdown>
                <span className="root_layout_content_header_span">您好：张振</span>
                <span className="root_layout_content_header_span" title="退出登录" style={{cursor: 'pointer'}}><Icon type="logout" /></span>
            </Header>
		);
	}
}
