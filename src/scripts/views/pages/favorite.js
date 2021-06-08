import FavoriteRestaurant from '../../data/favorite-restaurants-idb';
import CONFIG from '../../globals/config';
import '../components/hero-component';
import '../components/restaurant-component';

const Favorite = {
  async render() {
    return `
        <hero-section 
          background="./hero/hero.jpg"
          title="selamat datang di DinerMate"
          tagline="Makan Bersama lebih menyenangkan">
        </hero-section>
        <div class="main-post">
          <div class="main-title">
            <h2>Your Favorite Restaurant</h2>
          </div>
          <div class="post" id="post"></div>
        </div>
    `;
  },

  async afterRender() {
    //  do this
    const favoriteRestaurant = await FavoriteRestaurant.getAllRestaurants();
    document.querySelector('#post').innerHTML += favoriteRestaurant.map((post) => `
      <restaurant-component
        id="${post.id}"
        image="${CONFIG.BASE_IMAGE_URL}/${post.pictureId}"
        city="${post.city}"
        rating="${post.rating}"
        name="${post.name}"
        description="${post.description.slice(0, 300)}...">
      </restaurant-component>
    `).join('');
  },
};

export default Favorite;
