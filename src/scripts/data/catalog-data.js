import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class CatalogData {
  static async getListCatalog() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailCatalog(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewer({ id, name, review }) {
    const data = {
      id,
      name,
      review,
    };

    const option = {
      method: 'POST',
      header: {
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: new URLSearchParams(data),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, option);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default CatalogData;
