// pages/error.tsx
'use client';

import React from 'react';

interface ErrorProps {
  error: Error;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  return <div>An error occurred: {error.message}</div>;
};

export default ErrorComponent;
