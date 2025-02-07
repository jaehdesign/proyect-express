export const createHead = (title: string) => {
    return /*html*/ `
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Creación de documento de Node con Express">   
            <title>${title}</title>
            <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet">
            <link rel="stylesheet" href="guide.css" />
            <link rel="stylesheet" href="main.css" />
            <script src="index.js" defer></script>
        </head>
    `;
};
