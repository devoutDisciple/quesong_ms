import {
	observable,
	action,
	runInAction
} from 'mobx';
import request from '../../request/AxiosRequest';

class CampusStore {

    // 校区list
    @observable
	campus = [];

	// 设置校区
	@action
    setCampus(data) {
    	this.campus = data;
    }

	//  获取校区
	@action
	 async getCampus() {
	 	try {
	 		let res = await request.get('/position/all');
	 		runInAction(() => {
				let data = res.data || [];
				data.map(item => {
					item.key = item.id;
				});
				this.setCampus(data || []);
	 		});
	 	} catch (error) {
	 		console.log(error);
	 	}
	 }
}
export default new CampusStore();
