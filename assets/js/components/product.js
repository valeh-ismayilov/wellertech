class Product extends HTMLElement{
    constructor() {
        super();
        // HTML Tags of Component
        this.innerHTML = `
        <div class="product product-margin">
            <div class="product-image-container">
                <img class="product-image" src="./assets/img/${this.getAttribute('img').png}" />
            </div>
            <div class="product-title">
                ${this.getAttribute('title')}
            </div>
            <div class="product-link-container">
                <a class="product-link" target="_blank" href="./products/${this.getAttribute('link')}.htm" class="product-link">
                    Ətraflı
                </a>
            </div>
        </div>
        `;
    }
connectedCallback() {
    console.log("Connected Plugin")
}
disconnectedCallback() {
    console.log("Disconnected Plugin")
}
}

window.customElements.define('product-el', Product);