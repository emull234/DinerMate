class HeaderDetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="image-header">
        <img src="${this.image}" alt="gambar">
        <p class="background-primary">Rating : ${this.rating}</p>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['image', 'rating'];
  }
}

customElements.define('header-detail-section', HeaderDetailComponent);
