type BtnVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'dropdown'
  | 'dropdown-item';

type BtnRounded = 'none' | 'initial' | 'full';

type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type BtnType = 'button' | 'submit' | 'reset' | undefined;

type BtnVariantRecord = Record<BtnVariant, string>;

type BtnSizeRecord = Record<BtnSize, string>;

type BtnRoundedRecord = Record<BtnRounded, string>;
