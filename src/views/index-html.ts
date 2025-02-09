import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
export const renderHomeHtml = () => {
    const title = 'Inicio | JuananDesign';
    const pageTitle = 'JuananDesign';
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="es">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}

                <main>
                    <section>
                        <h2>Productos a tu medida</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae alias odio distinctio qui,
                            cupiditate autem eos? Voluptate beatae molestias
                            dignissimos doloremque similique recusandae porro
                            ducimus perferendis accusamus? Ea, laborum sint.
                        </p>
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};
