export enum Navigation {
	HOME = '/',
	DOCS = '/docs',
	COMPONENTS = '/components',
	TEMPLATES = '/templates'
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
	},
	{
		id: 3,
		label: 'Components',
		href: Navigation.COMPONENTS,
		callback() {}
	},
	{
		id: 4,
		label: 'Templates',
		href: Navigation.TEMPLATES,
		callback() {}
	}
];
