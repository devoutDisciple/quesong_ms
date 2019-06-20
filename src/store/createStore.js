import TestStore from './test/TestStore';
import GlobalStore from './global/GlobalStore';

export const createStore = () => {
	return {
        TestStore,
        GlobalStore
	};
};
