import CatalogData from '../../data/catalog-data';

class BodyDetailComponent extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class= "body-detail">
        <div class="card detail-card text-center ">
          <div class="padding-card">
            <i class="fa fa-thumb-tack color-primary icon" aria-hidden="true"></i>
            <h3>${this._data.name}</h3>
            <p>Address : ${this._data.address}, ${this._data.city}</p>
            <p>Categoris : ${this._data.categories.map((categorie) => `${categorie.name}`).join(' ,')}</p>
            <p>Description : <br> ${this._data.description}</p>
          </div>
        </div>
        <div class="card foods text-center">
          <div class="padding-card">
            <i class="fa fa-cutlery color-primary icon"></i>
            <h3>Food</h3>
            <p>${this._data.menus.foods.map((food) => `${food.name}`)}</p>
          </div>
        </div>
        <div class="card drinks text-center">
          <div class="padding-card">
            <i class="fa fa-glass color-primary icon"></i>
            <h3>Drink</h3>
            <p>${this._data.menus.drinks.map((drink) => `${drink.name}`)}</p>
          </div>
        </div>
        <div class="card input-review">
          <div class="padding-card">
            <h3>How is this place ? </h3>
            <form id="form-review">
              <div>
                <label for="reviewer-name">Name</label>
                <br>  
                <input name="name" id="reviewer-name" placeholder="Enter your name" autocomplete="off">
              </div>
              <div>
                <label for="reviewer-value">Review</label>
                <br>
                <textarea name="reviewer" id="reviewer-value" placeholder="Enter your review"></textarea>
              </div>
              <button type="submit" id="post-review">Post Review</button>
            </form>
          </div>
        </div>
        <div class="reviewer">
          ${this._data.customerReviews.map((review) => `
            <div class="card">
              <div class="review">
                <h4>${review.name} (${review.date})</h4>
                <p>${review.review}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    this.querySelector('#post-review').addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        const response = await CatalogData.addReviewer({
          id: this._data.id,
          name: this.querySelector('#reviewer-name').value,
          review: this.querySelector('#reviewer-value').value,
        });
        if (response.message === 'success') {
          // eslint-disable-next-line no-alert
          alert('review berhasil dipost');
          this.querySelector('#reviewer-name').value = '';
          this.querySelector('#reviewer-value').value = '';
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}

customElements.define('body-detail-section', BodyDetailComponent);
