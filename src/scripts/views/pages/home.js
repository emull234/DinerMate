import data from '../../data/catalog-data';
import CONFIG from '../../globals/config';
import '../components/hero-component';
import '../components/restaurant-component';

const Home = {
  async render() {
    return `
      <hero-section 
        background="./hero/hero.jpg"
        title="selamat datang di DinerMate"
        tagline="Makan Bersama lebih menyenangkan">
      </hero-section>
      <div class="main-post">
        <div class="main-title">
          <h2>Catalog Restaurant</h2>
        </div>
        <div class="post" tabindex="-1" id="post"></div>
      </div>
    `;
  },

  async afterRender() {
    //  do this
    const postData = await data.getListCatalog();
    document.querySelector('#post').innerHTML += postData.map((post) => `
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

export default Home;
