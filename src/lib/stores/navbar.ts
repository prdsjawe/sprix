import createStore from '../utils/store';
import { browser } from '$app/environment';
import { page } from '$app/stores';
import { get } from 'svelte/store';

const initialState: NavbarState = {
	name: '',
	tabs: [],
	active: null
};

const store = createStore(initialState);

let $state: NavbarState;
store.subscribe((state) => ($state = state));

export default {
	subscribe: store.subscribe,
	reset: store.reset,
	setName(name: string) {
		store.update({ name });
	},

	setTabs(tabs: NavbarItem[]) {
		store.update((state) => {
			const currentPath = browser ? get(page).url.pathname : null;
			state.tabs = tabs.map((item, i) => {
				if (currentPath) {
					if (currentPath === item.href) {
						item.active = true;
						state.active = item.href;
					}
				} else if (i === 0) {
					item.active = true;
					state.active = item.href;
				} else {
					item.active = false;
				}
				return item;
			});
			return state;
		});
	},

	setCallBack(cb: () => any) {
		store.update({ callback: cb });
	},

	setActiveTab(tab: NavbarItem) {
		store.update((state) => {
			state.tabs = state.tabs.map((item) => {
				item.active = false;
				if (item.href === tab.href) {
					item.active = true;
					state.active = tab.href;
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
		return $state.tabs.find((item) => item.active) as NavbarItem;
	}
};
