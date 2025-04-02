# Zero to Figma Plugin Template

A modern, React-based Figma plugin template with TypeScript, Tailwind CSS, and Zustand for state management.

## Features

- 🚀 **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for fast development
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📦 **Zustand**: Simple, fast state management solution
- 🔄 **Message Architecture**: Clean communication between UI and plugin code
- 🧩 **Component Structure**: Well-organized code with separation of concerns
- 🛠️ **Development Tools**: ESLint, Prettier, and TypeScript for code quality

## Project Structure

```
zero-to-figma/
├── dist/               # Build output directory (contains compiled plugin and manifest.json)
├── public/             # Static assets and source manifest.json
├── src/
│   ├── common/         # Shared types and utilities
│   │   └── messages.ts # Message type definitions
│   ├── plugin/         # Figma plugin code
│   │   └── main.ts     # Plugin entry point
│   └── ui/             # React UI code
│       ├── core/       # Core state management
│       ├── shell/      # Communication layer
│       ├── view/       # React components
│       ├── index.css   # Global styles
│       ├── index.html  # HTML template
│       └── main.tsx    # UI entry point
├── .eslintrc.js        # ESLint configuration
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (v8 or later)
- [Figma Desktop App](https://www.figma.com/downloads/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/zero-to-figma.git
   cd zero-to-figma
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the Figma desktop app, create a new file, and go to `Plugins > Development > Import plugin from manifest...`

3. Select the `manifest.json` file from the `dist` directory of your project.

4. Run the plugin from the Figma plugins menu.

### Building for Production

```bash
npm run build
```

## Plugin Architecture

This template follows a clean architecture pattern:

- **Plugin Layer**: Handles Figma API interactions
- **UI Layer**: React components for user interface
- **Shell Layer**: Manages communication between UI and plugin
- **Core Layer**: State management with Zustand

### Communication Flow

1. UI sends commands to the plugin via `postMessage`
2. Plugin processes commands and sends events back to UI
3. Shell layer handles these events and updates the state
4. React components react to state changes

## Example Features

The template includes a simple ping/pong example to demonstrate communication:

1. Click the "Send Ping" button in the UI
2. The UI sends a ping command to the plugin
3. The plugin responds with a pong event
4. The UI displays the timestamp and calculates latency

## Customization

1. Update the plugin information in `public/manifest.json`
2. Modify the UI components in `src/ui/view`
3. Add new commands and events in `src/common/messages.ts`
4. Implement plugin functionality in `src/plugin/main.ts`

## License

ISC
