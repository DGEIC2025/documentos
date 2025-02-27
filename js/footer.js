class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
                <nav>
                    <a href="/about">Acerca de</a> | <a href="/contact">Contacto</a>
                </nav>
            </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);
