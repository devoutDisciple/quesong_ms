import TestStore from './test/TestStore';
import GlobalStore from './global/GlobalStore';
import CampusStore from './campus/CampusStore';

export const createStore = () => {
	return {
		TestStore,
		GlobalStore,
		CampusStore
	};
};
