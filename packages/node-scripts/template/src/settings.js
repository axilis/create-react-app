export const environment = process.env.ENVIRONMENT || 'production';

export const port = process.env.PORT || '3001';

export const log = {
    level: process.env.LOG_LEVEL || 'debug',
};

export const sentry = {
    dsn: process.env.SENTRY_DSN || undefined
};
