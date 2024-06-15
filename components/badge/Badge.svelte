<script lang="ts">
  import { classnames } from '../../utils/common';

  const BSR: BadgeSizeRecord = {
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  };

  const BVR: BadgeVariantRecord = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    error: 'badge-error',
    warning: 'badge-warning',
    success: 'badge-success',
  };

  const BTR: BadgeTypeRecord = {
    base: 'badge-base',
    pill: 'badge-pill',
    outline: 'badge-outline',
    modern: 'badge-modern',
  };
  export let label: string = '';
  export let size: BadgeSize = 'md';
  export let variant: BadgeVariant = 'primary';
  export let type: BadgeType = 'base';
  export let determiner: boolean = false;

  let badge = classnames(
    `badge ${BSR[size]} ${BVR[variant]} ${BTR[type]} ${determiner && type === 'modern' ? 'determiner' : ''}`
  );
</script>

<span class={badge}>{label}</span>
