export type UiCommand = SampleCommand;

export type PluginEvent = SampleEvent;

export type SampleCommand = {
  type: 'ping';
  payload: null;
};

export type SampleEvent = {
  type: 'pong';
  payload: {
    timestamp: number;
  };
};
