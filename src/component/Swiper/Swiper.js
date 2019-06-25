import React from 'react';
import {inject, observer} from 'mobx-react';

@inject('GlobalStore')
@observer
export default class Swiper extends React.Component{

	render() {
		return (
			<div>swiperswiperswiperswiper</div>
		);
	}
}
