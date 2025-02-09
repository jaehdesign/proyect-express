import { resolve } from 'path';
// Importamos el framework `express`
import express from 'express';
import createDebug from 'debug';
import morgan from 'morgan';
import cors from 'cors';

// Importamos los controladores que manejan las peticiones HTTP para distintas rutas.
import {
    getHomeController,
    notFoundController,
    postController,
} from './controllers.js';

import { logger } from './middleware.js';
import { errorManager } from './errors.js';
import { usersRouter } from './routers/users.routers.js';

export const app = express();
const debug = createDebug('demo:app');
const __dirname = resolve();

// Definimos la ruta a la carpeta `public`(HTML, CSS, imágenes, etc.).
const publicPath = resolve(__dirname, 'public');

debug('Iniciando App...');

// Deshabilitamos el encabezado `x-powered-by` de Express por razones de seguridad, ya que puede revelar que usamos Express.
app.disable('x-powered-by');

// Middlewares
app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(logger('debugger'));

// Servimos archivos estáticos desde la carpeta `public`, para servir HTML, imágenes, CSS, etc.
app.use(express.static(publicPath));
app.use(errorManager);

// Definimos las rutas GET principales de la aplicación y las enlazamos con el controlador `getHomeController`.

app.get('/', getHomeController);
app.get('/products', getHomeController);
app.get('/about', getHomeController);
app.use('*', notFoundController);

// Ruta POST para '/contacts'.
app.post('/contacts', postController);
app.use('/api/users', usersRouter);

app.use('*', notFoundController);
app.use(errorManager);
