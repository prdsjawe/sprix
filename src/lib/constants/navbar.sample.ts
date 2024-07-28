export enum Navigation {
	HOME = '/',
	DOCS = '/docs'
}

export const HeaderNavigationRecord: NavbarItem[] = [
	{
		id: 1,
		label: 'Home',
		href: Navigation.HOME,
		callback() {}
	},
	{
		id: 2,
		label: 'Docs',
		href: Navigation.DOCS,
		callback() {}
	}
];
