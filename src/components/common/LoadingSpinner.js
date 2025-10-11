import React from 'react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  const spinnerClass = `loading-spinner ${sizeClasses[size]}`;
  const containerClass = fullScreen ? 'loading-fullscreen' : 'loading-container';

  return (
    <div className={containerClass} role="status" aria-live="polite" aria-label={text}>
      <div className={spinnerClass}>
        <div className="spinner-circle"></div>
      </div>
      {text && (
        <p className="loading-text" aria-hidden="true">
          {text}
        </p>
      )}
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default LoadingSpinner;
