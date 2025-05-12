import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Amplify } from 'aws-amplify';

// Import Amplify configuration - use default import for aws-exports.js
import awsExports from './aws-exports';

// Initialize Amplify
Amplify.configure(awsExports);

// Log configuration for debugging
console.log('Amplify Storage Configuration:', awsExports.aws_user_files_s3_bucket);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
