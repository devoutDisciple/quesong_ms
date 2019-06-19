import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu }  = Menu;

export default class MyMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            >
            <Menu.Item key="1">
                <Icon type="inbox" />
                <span>首页轮播图</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="pie-chart" />
                <span>商户管理</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="desktop" />
                <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="inbox" />
                <span>订单管理</span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="inbox" />
                <span>配送管理</span>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                </span>
                }>
                <Menu.Item key="9">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
        </Menu>
    );
  }
}
