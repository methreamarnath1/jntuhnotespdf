import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};