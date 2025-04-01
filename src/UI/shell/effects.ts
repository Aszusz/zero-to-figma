export type Effects = {
  log: (message: string, ...args: unknown[]) => void;
  postMessage: <T>(message: T, targetOrigin: string) => void;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
};

export const appEffects: Effects = {
  log: (message: string, ...args: unknown[]): void => {
    console.log(message, ...args);
  },

  postMessage: <T>(message: T, targetOrigin: string): void => {
    if (window.parent) {
      window.parent.postMessage(message, targetOrigin);
    }
  },

  addEventListener: (type: string, listener: EventListener): void => {
    window.addEventListener(type, listener);
  },

  removeEventListener: (type: string, listener: EventListener): void => {
    window.removeEventListener(type, listener);
  },
};
