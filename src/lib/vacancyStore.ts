// Simple global vacancy store with event-based reactivity
type Listener = (remaining: number) => void;

let remaining = 4;
const listeners = new Set<Listener>();

export const vacancyStore = {
  getRemaining: () => remaining,
  decrement: () => {
    if (remaining > 1) {
      remaining--;
      listeners.forEach((l) => l(remaining));
    }
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  },
  /** Whether notifications should still appear */
  canNotify: () => remaining > 1,
};
