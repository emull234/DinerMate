class RestaurantComponent extends HTMLElement {
  connectedCallback() {
    this._id = this.getAttribute('id');
    this._image = this.getAttribute('image');
    this._rating = this.getAttribute('rating');
    this._name = this.getAttribute('name');
    this._city = this.getAttribute('city');
    this._description = this.getAttribute('description');
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card post-restaurant">
        <div class="card-header">
          <img src="${this._image}" alt="gambar restaurant ${this._name}" class="tumbnail">
          <p class="tumbnail-title background-primary">${this._city}</p>
        </div>
        <div class="card-body">
          <p class="post-title">Rating : ${this._rating}</p>
          <p class="post-name"><a href="#/detail/${this._id}">${this._name}</a></p>
          <p class="post-description">${this._description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-component', RestaurantComponent);
