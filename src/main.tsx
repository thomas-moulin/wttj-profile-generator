import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

// Initialize Amplify
Amplify.configure(amplifyconfig);

// Log configuration for debugging
console.log('Amplify Storage Configuration:', amplifyconfig.aws_user_files_s3_bucket);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
