import express from 'express';

import home from "./modules/home";

const app = express();

app.use('/', home);

export default app;
