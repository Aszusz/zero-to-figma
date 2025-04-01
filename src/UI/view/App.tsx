import { useShell } from '@/UI/shell/useShell';
import { useEffect } from 'react';

function App() {
  const { usePluginState, onPluginStarted, onPluginClosed, onSendPingClicked } =
    useShell();

  const pluginState = usePluginState();

  useEffect(() => {
    // Notify the shell that the plugin has started
    onPluginStarted();
    // Cleanup function to notify the shell that the plugin has closed
    return () => {
      onPluginClosed();
    };
  }, [onPluginStarted, onPluginClosed]);

  return (
    <div className="m-10 mx-auto flex max-w-xs flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-4 shadow-lg">
      <h1 className="text-2xl font-semibold">Plugin State: {pluginState}</h1>

      {/* Button grid container */}
      <div className="grid w-full grid-cols-2 gap-4">
        {/* Increment button */}
        <button
          className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          onClick={onSendPingClicked}
        >
          Send Ping
        </button>
      </div>
    </div>
  );
}

export default App;
