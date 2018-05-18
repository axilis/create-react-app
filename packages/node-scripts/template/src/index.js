import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import app from './app';
import * as settings from './settings';

const server = express();

server.set('port', settings.port);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(compression());

server.use('/', app);

server.listen(server.get('port'));
