
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create the root element where our app will be rendered
const rootElement = document.getElementById('root');

// Ensure the element exists before mounting
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id "root" in your HTML.');
}

// Create the React root and render the App
const root = createRoot(rootElement);
root.render(<App />);
