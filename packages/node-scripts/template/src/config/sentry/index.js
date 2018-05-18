import Raven from 'raven';

const isEnabled = process.env.NODE_ENV === 'production';
const dsn = isEnabled && process.env.SENTRY_DSN;

export default Raven.config(dsn, {
  logger: 'node',
  release: process.env.npm_package_version,
  environment: process.env.ENVIRONMENT,
  autoBreadcrumbs: true,
  captureUnhandledRejections: true
}).install();
