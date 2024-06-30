export enum Navigation {
  HOME = '/',
}

export const HeaderNavigationRecord: TabItem[] = [
  {
    id: 1,
    label: 'Home',
    value: Navigation.HOME,
    notification: null,
    callback() {},
  },
];
