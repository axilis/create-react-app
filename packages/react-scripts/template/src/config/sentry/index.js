import Raven from 'raven-js';

/**
 * Setup user data that will be logged alongside exceptions
 * @param {any} user User object that identifies user
 */
export const setUser = (user) => {
    Raven.setUserContext(user);
};

// Setup handler for global promise rejections of Promise library you are targeting
// Example for global DOM event
window.onunhandledrejection = (event) => {
    Raven.captureException(event.reason);
};

const isEnabled = process.env.NODE_ENV && process.env.NODE_ENV !== 'development';
const dsn = isEnabled && process.env.REACT_APP_SENTRY_DSN;

export default Raven.config(dsn, {
    logger: 'react',
    release: process.env.npm_package_version,
    environment: process.env.REACT_APP_ENVIRONMENT,
    autoBreadcrumbs: true,
}).install();