// Importamos los tipos `Request` y `Response` de Express
import type { Request, Response } from 'express';
import createDebug from 'debug';

// Importamos la función `renderHomeHtml`.
import { renderHomeHtml } from './views/index-html.js';

export const getHomeController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('Petición recibida');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderHomeHtml());
};

// `postController` maneja las solicitudes POST enviadas a '/contacts'.
export const postController = (req: Request, res: Response) => {
    const debug = createDebug('demo:postController');
    debug('Datos recibidos');
    const data = req.body;

    data.id = crypto.randomUUID();
    const result = {
        message: 'Datos recibidos',
        data,
    };
    res.status(201);
    res.json(result);
};

// `notFoundController` maneja cualquier solicitud a una ruta inexistente.
export const notFoundController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:notFoundController');
    debug('Petición recibida en una ruta no válida');
    res.status(405);
    res.setHeader('Content.Type', 'text/plain; charset=utf-8');
    res.send('Method not allowed');
};
