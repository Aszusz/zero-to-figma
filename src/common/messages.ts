export type UiCommand = SampleCommand;

export type PluginEvent = SampleCommand;

export type SampleCommand = {
  type: "sample";
  payload: null;
};

export type SampleEvent = {
  type: "sample";
  payload: null;
};
