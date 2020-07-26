import React, { FC } from 'react';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';

Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_API_KEY!,
  plugins: [new BugsnagPluginReact()],
});

// Handle Typescript on plugin with !
const BugSnagErrorBoundary = Bugsnag.getPlugin("react")!.createErrorBoundary(
  React
);

const FallbackComponent = () => {
  return <h1>an Error occured in the Boundaries!</h1>;
};

const ErrorBoundary: FC<{}> = ({ children }) => {
  return (
    <BugSnagErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </BugSnagErrorBoundary>
  );
};

export default ErrorBoundary;
