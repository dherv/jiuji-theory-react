import React, { FC } from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

const FallbackComponent = () => {
  return <h1>an Error occured in the Boundaries!</h1>;
};

const ErrorBoundary: FC = ({ children }) => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;
