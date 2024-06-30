import tippy from 'tippy.js';
import type { Instance, Props } from 'tippy.js';

const createTippy = (
  trigger: HTMLElement,
  content: HTMLElement,
  props: Partial<Props> = {}
): Instance => {
  const defaultProps: Partial<Props> = {
    content,
    trigger: 'click',
    allowHTML: true,
    interactive: true,
    placement: 'bottom-start',
    appendTo: document.body,
    animation: 'shift-away',
  };

  return tippy(trigger, {
    ...defaultProps,
    ...props,
  });
};

export default createTippy;
