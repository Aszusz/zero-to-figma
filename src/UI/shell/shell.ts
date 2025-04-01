import { Effects } from './effects';
import { setPluginState, State } from '@/UI/core/core';
import { SampleCommand, PluginEvent } from '@/common/messages';
import { StoreApi } from 'zustand/vanilla';

export const shell = (store: StoreApi<State>, eff: Effects) => {
  // Internal thunks
  const onPluginEvent = (event: PluginEvent) => {
    eff.log('Plugin event received:', event);
    switch (event.type) {
      case 'pong':
        eff.log('Pong received');
        break;
      default:
        eff.log('Unknown event type:', event.type);
        break;
    }
  };

  const onAnyMessage: EventListener = (event: Event) => {
    const messageEvent = event as MessageEvent;
    const pluginMessage = messageEvent.data?.pluginMessage;

    if (pluginMessage) {
      onPluginEvent(pluginMessage as PluginEvent);
    }
  };

  return {
    // External thunks
    onPluginStarted: async () => {
      eff.log('Plugin started');
      eff.addEventListener('message', onAnyMessage);
      store.setState(setPluginState('active'));
    },

    onSendPingClicked: async () => {
      eff.log('Sending ping to Figma');
      const pingCommand: SampleCommand = {
        type: 'ping',
        payload: null,
      };
      eff.postMessage({ pluginMessage: pingCommand }, '*');
    },

    onPluginClosed: async () => {
      eff.log('Plugin closing');
      eff.removeEventListener('message', onAnyMessage);
      eff.postMessage({ pluginMessage: { type: 'close-plugin' } }, '*');
      store.setState(setPluginState('inactive'));
    },
  };
};
