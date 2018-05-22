import winston from 'winston';
import WinstonSentry from 'winston-raven-sentry';
import expressWinston from 'express-winston';

import sentry from '../sentry';

const logLevel = process.env.LOG_LEVEL || 'info';
const sentryLogLevel = process.env.LOG_LEVEL_SENTRY || 'warn';

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: logLevel,
            timestamp: true,
            colorize: true,
            prettyPrint: true,
            json: false,
        }),
        new winston.transports.File({
            level: logLevel,
            timestamp: true,
            json: true,
            filename: './app.log',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        }),
        new WinstonSentry({
            level: sentryLogLevel,
            raven: sentry,
        }),
    ],
});

export const terminate = () => {
    if (logger.transports.CloudWatch) {
        logger.transports.CloudWatch.kthxbye(() => {});
    }
};

export const requestLogger = expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    statusLevels: {
        success: 'info',
        warn: 'info',
        error: 'error',
    },
});

export default logger;
