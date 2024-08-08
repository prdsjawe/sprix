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
		label: 'Getting Started',
		href: '/docs'
	},
	{
		id: 2,
		label: 'How to use',
		href: '/docs/use-components'
	},
	{
		id: 3,
		label: 'About the developer',
		href: '/docs/about-developer'
	},
	{
		label: 'Components',
		subItems: [
			{
				id: 4,
				label: 'Accordion',
				href: `/docs${Components.ACCORDION}`,
				locked: true
			},
			{
				id: 5,
				label: 'Alert',
				href: `/docs${Components.ALERT}`
			}
		]
	}
];
