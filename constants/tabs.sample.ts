export enum Tabs {
  PROFILE = 'PROFILE',
  PASSWORD = 'PASSWORD',
  TEAM = 'TEAM',
  PLAN = 'PLAN',
  BILLING = 'BILLING',
  NOTIFICATIONS = 'NOTIFICATIONS',
}

export const TabsRecord: TabItem[] = [
  {
    id: 1,
    label: 'Profile',
    value: Tabs.PROFILE,
    notification: null,
    callback() {},
  },
  {
    id: 2,
    label: 'Password',
    value: Tabs.PASSWORD,
    notification: null,
    callback() {},
  },
  {
    id: 3,
    label: 'Team',
    value: Tabs.TEAM,
    notification: null,
    callback() {},
  },
  {
    id: 4,
    label: 'Billing',
    value: Tabs.BILLING,
    notification: null,
    callback() {},
  },
  {
    id: 5,
    label: 'Notifications',
    value: Tabs.NOTIFICATIONS,
    notification: 2,
    callback() {},
  },
];
