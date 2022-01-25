import express from 'express';
import 'reflect-metadata';

import '~/database/connection';
import { SERVER_PORT } from './lib/settings';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));