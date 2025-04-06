// Types

export type PongMessage = {
  timestamp: number;
  receivedAt: number;
};

export type State = {
  readonly pongMessages: PongMessage[];
};

// Factories

export const initialState = (): State => ({
  pongMessages: [],
});

// Selectors

export const selectPongMessages = (state: State): PongMessage[] =>
  state.pongMessages;

// Actions

export const addPongMessage =
  (pongMessage: PongMessage) =>
  (state: State): State => ({
    ...state,
    pongMessages: [...state.pongMessages, pongMessage],
  });
