export const classnames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ').trim().replace(/\s+/g, ' ');
