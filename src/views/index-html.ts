import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
export const renderHomeHtml = () => {
    const title = 'Inicio | JuananDesign';
    const pageTitle = 'JuananDesign';
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}

                <main>
                    <section>
                        <h2>Creatividad a tu medida</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae alias odio distinctio qui,
                            cupiditate autem eos? Voluptate beatae molestias
                            dignissimos doloremque similique recusandae porro
                            ducimus perferendis accusamus? Ea, laborum sint.
                        </p>
                        <p>
                            Voluptatum, nobis ex! Dignissimos aut possimus
                            laudantium quo esse voluptates aperiam, earum
                            molestias! Aspernatur in nisi suscipit nostrum eaque
                            iste, sit odio maxime voluptatum. Atque reiciendis
                            eum impedit aut similique.
                        </p>
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};
