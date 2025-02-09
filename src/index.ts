// Importamos `createServer` de `node:http` para crear un servidor HTTP en Node.js.
import { createServer } from 'node:http';

// Importamos el tipo `ServerResponse` de `node:http` para la respuesta del servidor.
import type { ServerResponse } from 'node:http';

// Importamos la configuración de variables de entorno desde `.env`.
import 'dotenv/config';

// Importamos `debug` para depuración.
import createDebug from 'debug';

// Importamos la clase personalizada `HttpError` para manejar errores HTTP.
import { HttpError } from './http-error.js';

// Importamos la función `createHtmlString` que genera una estructura HTML .
import { createHtmlString } from './template.js';

// Importamos la aplicación Express desde `app.js`.
import { app } from './app.js';

const debug = createDebug('demo:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;
const listenManager = () => {
    const addr = server.address();
    if (addr === null) return;
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }

    console.log(`Server listening on ${bind}`);
    debug(`Servidor escuchando en ${bind}`);
};

// `errorManager` se ejecuta cuando ocurre un error en el servidor.
const errorManager = (error: Error | HttpError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    const publicMessage = `Error: ${error.statusCode} ${error.status}`;
    debug(publicMessage, error.message);

    const html = createHtmlString(
        'Error | Node Server',
        'Error',
        publicMessage,
    );

    response.statusCode = error.statusCode;
    response.statusMessage = error.status;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(html);
};

// Creamos el servidor HTTP utilizando `createServer`.
const server = createServer(app);

// Configuramos el servidor.
server.listen(PORT);
server.on('listening', listenManager);
server.on('error', errorManager);
