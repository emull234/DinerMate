import UrlParser from '../../routes/url-parser';
import CatalogData from '../../data/catalog-data';
import CONFIG from '../../globals/config';
import '../components/header-detail-component';
import '../components/body-detial-component';
import likeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail">
        <body-detail-section></body-detail-section>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    //  do this
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const { id } = url;
    const data = await CatalogData.getDetailCatalog(id);
    const header = document.querySelector('#detail');
    header.innerHTML += `
    <header-detail-section 
      image="${CONFIG.BASE_IMAGE_URL}/${data.pictureId}"
      rating="${data.rating}">
    </header-detail-section>`;
    const bodySection = document.querySelector('body-detail-section');
    bodySection.data = data;
    likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: data,
    });
    console.log(likeButtonInitiator);
  },
};

export default Detail;
