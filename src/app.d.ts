//BUTTON
type BtnVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

type BtnRounded = 'none' | 'initial' | 'full';

type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type BtnType = 'button' | 'submit' | 'reset' | undefined;

type BtnVariantRecord = Record<BtnVariant, string>;

type BtnSizeRecord = Record<BtnSize, string>;

type BtnRoundedRecord = Record<BtnRounded, string>;

//CHECKBOX
type CheckboxSize = 'sm' | 'md';

type CheckboxPosition = 'left' | 'right';

type CheckboxRecord = Record<CheckboxSize, string>;

//DROPDOWN
type DropdownSize = 'sm' | 'md';

type DropdownVariant = 'dropdown' | 'listbox';
interface DropdownItem {
	id: any;
	value: any;
	label: string;
	callback: () => any;
}

//INPUT
type InputSize = 'sm' | 'md';

type InputRecord = Record<InputSize, string>;

//RADIO
type RadioSize = 'sm' | 'md';

type RadioPosition = 'left' | 'right';

type RadioRecord = Record<RadioSize, string>;

//TOGGLE
type ToggleSize = 'sm' | 'md';

type TogglePosition = 'left' | 'right';

type ToggleRecord = Record<ToggleSize, string>;

//TABS
type TabsVariant = 'underline' | 'button' | 'border';

type TabsSize = 'sm' | 'md' | 'lg';

type TabsSizeRecord = Record<TabsSize, string>;

type TabsUnderlineVariant = 'base' | 'filled';

type BadgeVariant = 'primary' | 'secondary' | 'warning' | 'success' | 'error';

type BadgeType = 'base' | 'pill' | 'outline' | 'modern';

type BadgeSize = 'sm' | 'md' | 'lg';

type BadgeVariantRecord = Record<BadgeVariant, string>;

type BadgeSizeRecord = Record<BadgeSize, string>;

type BadgeTypeRecord = Record<BadgeType, string>;

type AvatarSize = 'sm' | 'md' | 'lg';

type AvatarSizeRecord = Record<AvatarSize, string>;

interface TabState {
	name: string;
	tabs: TabItem[];
	active: any;
	callback?: () => any;
}

interface TabItem {
	id: any;
	value: any;
	label: string;
	notification: number | null;
	active?: boolean;
	callback?: () => any;
}

interface NavbarState {
	name: string;
	tabs: NavbarItem[];
	active: any;
	callback?: () => any;
}

interface NavbarItem {
	id?: any;
	href?: any;
	label: string;
	active?: boolean;
	locked?: boolean;
	callback?: () => any;
	subItems?: NavbarItem[];
}
