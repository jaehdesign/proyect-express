import { resolve } from 'path';
// importamos aplicación express
import express from 'express';
import createDebug from 'debug';
import morgan from 'morgan';
import cors from 'cors';

import {
    getHomeController,
    notFoundController,
    postController,
} from './controllers.js';
import { logger } from './middleware.js';
import { errorManager } from './errors.js';

//Creamos instancia de aplicación express
export const app = express();
const debug = createDebug('demo:app');

const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');

debug('Iniciando App...');

// deshabilitado por razones de seguridad
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(logger('debugger'));
app.use(express.static(publicPath));

app.use(errorManager);

// ---- RUTAS ----//
// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

app.get('/', getHomeController);
app.get('/products', getHomeController);
app.get('/about', getHomeController);
app.post('/products', postController);
app.use('*', notFoundController);
