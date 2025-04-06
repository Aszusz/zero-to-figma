import { PluginEvent, UiCommand } from '../common/messages';

// Show the plugin UI
figma.showUI(__html__, { width: 450, height: 650 });

figma.ui.onmessage = (msg: UiCommand) => {
  let response: PluginEvent | undefined = undefined;

  switch (msg.type) {
    case 'ping': {
      response = {
        type: 'pong',
        payload: {
          timestamp: Date.now(),
        },
      };
      break;
    }
  }

  // Send the response if one was generated
  if (response) {
    figma.ui.postMessage(response);
  }
};
