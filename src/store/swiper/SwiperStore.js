import {
	observable,
	action,
	runInAction
} from 'mobx';
import request from '../../request/AxiosRequest';

class SwiperStore {

    // 校区list
    @observable
	swiperList = [];

	// 设置校区
	@action
    setSwiperList(data) {
    	this.swiperList = data;
    }

	//  获取校区
	@action
	 async getSwiper() {
	 	try {
	 		let res = await request.get('/swiper/all');
	 		runInAction(() => {
				let data = res.data || [];
				data.map(item => {
					item.key = item.id;
				});
				this.setSwiperList(data || []);
	 		});
	 	} catch (error) {
	 		console.log(error);
	 	}
	 }
}
export default new SwiperStore();
