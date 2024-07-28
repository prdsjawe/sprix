import createStore from '../utils/store';
import { browser } from '$app/environment';

const initialState: TabState = {
	name: '',
	tabs: [],
	active: null
};

const store = createStore(initialState);

let $state: TabState;
store.subscribe((state) => ($state = state));

export default {
	subscribe: store.subscribe,
	reset: store.reset,
	setName(name: string) {
		store.update({ name });
	},

	setTabs(tabs: TabItem[]) {
		store.update((state) => {
			let active = browser ? (window.localStorage.getItem(state.name) as any) : null;
			state.tabs = tabs.map((item, i) => {
				if (!!active) {
					if (active === item.value) {
						item.active = true;
						state.active = item.value;
						if (browser) {
							window.localStorage.setItem(state.name, item.value);
						}
					}
				} else if (i === 0) {
					item.active = true;
					state.active = item.value;
					if (browser) {
						window.localStorage.setItem(state.name, item.value);
					}
				}

				return item;
			});

			return state;
		});
	},

	setCallBack(cb: () => any) {
		store.update({ callback: cb });
	},

	setActiveTab(tab: TabItem) {
		store.update((state) => {
			state.tabs = state.tabs.map((item) => {
				item.active = false;
				if (item.value === tab.value) {
					item.active = true;
					state.active = tab.value;
					if (browser) {
						window.localStorage.setItem(state.name, tab.value);
					}
				}

				return item;
			});

			return state;
		});

		if ($state.callback) {
			$state.callback();
		}
	},

	getActiveTab() {
		return $state.tabs.find((item) => item.active) as TabItem;
	}
};
