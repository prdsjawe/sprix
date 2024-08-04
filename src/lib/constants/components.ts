enum Components {
	ACCORDION = '/accordion',
	ALERT = '/alert',
	AVATAR = '/avatar',
	BADGE = '/badge',
	BREADCRUMBS = '/breadcrumbs',
	BUTTON = '/button',
	CARD = '/card',
	CHECKBOX = '/checkbox',
	COMMANDMENU = '/command-menu',
	DATEPICKER = '/date-picker'
}

export const ComponentNavigation: NavbarItem[] = [
	{
		id: 1,
		label: 'Accordion',
		href: `/docs${Components.ACCORDION}`,
		locked: true
	},
	{
		id: 2,
		label: 'Alert',
		href: `/docs${Components.ALERT}`
	},
	{
		id: 3,
		label: 'Avatar',
		href: `/docs${Components.AVATAR}`
	},
	{
		id: 4,
		label: 'Badge',
		href: `/docs${Components.BADGE}`
	}
];
