import type { Request, Response } from 'express';
import createDebug from 'debug';
import { renderHomeHtml } from './views/index-html.js';

export const getHomeController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('Petición recibida');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderHomeHtml());
};

export const postController = (req: Request, res: Response) => {
    const debug = createDebug('demo:postController');
    debug('Datos recibidos');

    const data = req.body;
    // Haríamos algo con los datos recibidas

    data.id = crypto.randomUUID();
    const result = {
        message: 'Datos recibidos',
        data,
    };

    res.status(201);
    res.json(result);
};

export const notFoundController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:notFoundController');
    debug('Petición recibida');

    res.status(405);
    res.setHeader('Content.Type', 'text/plain; charset=utf-8');
    res.send('Method not allowed');
};
