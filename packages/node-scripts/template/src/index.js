import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import app from './app';
import * as settings from './settings';
import sentry from './config/sentry';
import { requestLogger } from './config/logging';

const server = express();

server.set('port', settings.port);

server.use(sentry.requestHandler());
server.use(requestLogger);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(compression());

server.use(sentry.errorHandler());

server.use('/', app);

server.listen(server.get('port'));
