import { Effects } from './effects';
import { SampleCommand, PluginEvent } from '@/common/messages';
import { addPongMessage, State } from '@/ui/core/core';
import { StoreApi } from 'zustand/vanilla';

export const shell = (store: StoreApi<State>, eff: Effects) => {
  // Internal thunks
  const onPluginEvent = (event: PluginEvent) => {
    eff.log('Plugin event received:', event);
    switch (event.type) {
      case 'pong':
        eff.log('Pong received');
        store.setState(
          addPongMessage({
            timestamp: event.payload.timestamp,
            receivedAt: eff.getCurrentTime(),
          }),
        );
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
    },
  };
};
