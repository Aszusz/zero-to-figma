import { State, initialState } from './core/core';
import './index.css';
import App from './view/App';
import { StrictMode } from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'zustand/vanilla';

const store = createStore<State>(() => initialState());

export const storeContext = createContext(store);
export type StoreContext = typeof storeContext;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <storeContext.Provider value={store}>
      <App />
    </storeContext.Provider>
  </StrictMode>,
);
