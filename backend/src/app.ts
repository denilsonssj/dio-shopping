import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';

import '~/database/connection';
import { SERVER_PORT } from '~/lib/settings';
import { productRouter } from '~/routes/products.route';
import { GlobalError } from '~/middlewares/GlobalError';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(productRouter);
app.use(GlobalError);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
