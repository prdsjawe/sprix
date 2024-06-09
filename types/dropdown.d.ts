type DropdownSize = 'sm' | 'md';

type DropdownVariant = 'dropdown' | 'listbox';
interface DropdownItem {
  id: any;
  value: any;
  label: string;
  callback: () => any;
}
