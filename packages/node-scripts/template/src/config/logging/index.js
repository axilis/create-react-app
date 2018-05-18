import winston from 'winston';
import WinstonSentry from 'winston-raven-sentry';
import WinstonCloudWatch from 'winston-cloudwatch';
import expressWinston from 'express-winston';

import sentry from '../sentry';

const isProduction = process.env.NODE_ENV === 'production';

const logLevel = process.env.LOG_LEVEL || 'info';
const sentryLogLevel = process.env.LOG_LEVEL_SENTRY || 'warn';

const cloudwatchGroupName = process.env.CLOUDWATCH_GROUP_NAME;
const cloudwatchStreamName = process.env.CLOUDWATCH_STREAM_NAME;

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

if (isProduction) {
    logger.add(new WinstonCloudWatch({
        level: logLevel,
        logGroupName: cloudwatchGroupName,
        logStreamName: cloudwatchStreamName,
        uploadRate: 5000,
    }));
}

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
