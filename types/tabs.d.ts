type TabsVariant = 'underline' | 'button' | 'border';

type TabsSize = 'sm' | 'md';

type TabsSizeRecord = Record<TabsSize, string>;

type TabsUnderlineVariant = 'base' | 'filled';

interface TabItem {
  id: any;
  value: any;
  label: string;
  notification: number | null;
  callback: () => any;
}
