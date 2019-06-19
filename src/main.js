import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd';
import {createStore} from './store/createStore';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import Router from './router/router';
import './style/common.css';
import './style/main.less';

const stores = createStore();
// 开启严格模式
configure({ enforceActions: 'strict' });

const render = () => {
	ReactDOM.render(
		<Provider {...stores}>
			<LocaleProvider locale={zhCN}>
				<Router/>
			</LocaleProvider>
		</Provider>,
		document.getElementById('root')
	);
};
render();

