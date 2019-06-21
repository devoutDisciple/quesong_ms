import React from 'react';
import { Layout } from 'antd';
import Login from '../Login/Login';
import Content from '../Content/Content';
import {inject, observer} from 'mobx-react';
import { Route } from 'react-router-dom';

@inject('GlobalStore')
@observer
export default class MyLayout extends React.Component{

    constructor(props) {
        super(props);
        this.globalStore = this.props.GlobalStore;
    }

    componentDidMount() {
    }

	render() {
        let isLogin = this.globalStore.isLogin;
        console.log(isLogin);
		return (
            <Layout className="root_layout">
                <Route  path="/" component={Login} />
                <Route  path="/login" component={Login} />
                <Route  path="/home" component={Content} />
            </Layout>
		);
	}
}
