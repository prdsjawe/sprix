import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export default <T>(
  initialState: T
): {
  set: Writable<T>['set'];
  subscribe: Writable<T>['subscribe'];
  update: (ps: Partial<T> | ((state: T) => Partial<T>)) => void;
  reset: () => void;
} => {
  const { subscribe, update, set } = writable(
    structuredClone(initialState)
  );

  const _u = (ps: Partial<T> | ((state: T) => Partial<T>)) => {
    if (typeof ps === 'function') {
      update(state => ({ ...state, ...ps(state) }));
      return;
    }

    update(state => ({ ...state, ...ps }));
  };

  const reset = () => set(structuredClone(initialState));

  return {
    set,
    subscribe,
    update: _u,
    reset,
  };
};
