const items = [
    { label: 'Index', path: './' },
    { label: 'Productos', path: './products' },
    { label: 'About', path: './about' },
];

export const menuItems = items
    .map(
        (item) => `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `,
    )
    .join('');

export function createHeader(title: string) {
    const img = './assets/logo.png';
    const cssClass = 'main-header';
    const headerTemplate = `
        <header class="${cssClass}">
        <img src=${img} width="120" alt="Logo" />
        <h1 id="header1" data-id="1" class="h2">${title}</h1>
        <nav>
                <ul>
                    ${menuItems}
                </ul>
        </nav>
        </header>
    `;
    return headerTemplate;
}
