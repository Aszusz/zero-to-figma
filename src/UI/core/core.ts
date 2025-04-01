// Types

export type PluginState = 'active' | 'inactive';

export type State = {
  readonly pluginState: PluginState;
};

// Factories

export const initialState = (): State => ({
  pluginState: 'inactive',
});

// Selectors

export const selectPluginState = (state: State): PluginState =>
  state.pluginState;

// Actions

export const setPluginState =
  (pluginState: PluginState) =>
  (state: State): State => ({
    ...state,
    pluginState,
  });
