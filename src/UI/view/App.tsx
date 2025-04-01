import { useShell } from '@/UI/shell/useShell';
import { useEffect } from 'react';

function App() {
  const { usePongMessages, onPluginStarted, onPluginClosed, onSendPingClicked } =
    useShell();

  const pongMessages = usePongMessages();

  useEffect(() => {
    // Notify the shell that the plugin has started
    onPluginStarted();
    // Cleanup function to notify the shell that the plugin has closed
    return () => {
      onPluginClosed();
    };
  }, [onPluginStarted, onPluginClosed]);

  // Format timestamp to a readable date string
  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="m-10 mx-auto flex max-w-xs flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-4 shadow-lg">
      <h1 className="text-2xl font-semibold">Pong Messages</h1>

      {/* Button to send ping */}
      <button
        className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        onClick={onSendPingClicked}
      >
        Send Ping
      </button>

      {/* List of pong messages */}
      <div className="w-full mt-4">
        <h2 className="text-lg font-medium mb-2">Received Messages:</h2>
        {pongMessages.length === 0 ? (
          <p className="text-gray-500 italic">No messages received yet</p>
        ) : (
          <ul className="w-full space-y-2 max-h-80 overflow-y-auto">
            {pongMessages.map((message, index) => (
              <li key={index} className="p-2 bg-white rounded shadow-sm">
                <p className="text-sm">
                  <span className="font-medium">Sent:</span> {formatTimestamp(message.timestamp)}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Received:</span> {formatTimestamp(message.receivedAt)}
                </p>
                <p className="text-xs text-gray-500">
                  Latency: {message.receivedAt - message.timestamp}ms
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
