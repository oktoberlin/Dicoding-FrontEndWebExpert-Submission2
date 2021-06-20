import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';
import '../components/error-message';
import '../components/loading-indicator';

class RestoranSource {
  static async daftarRestoran() {
    const errorMessage = document.getElementById('error-message');
    const loader = document.getElementById('loading');
    const isOnline = navigator.onLine; // to check whether internet is connected or not

    if (isOnline) {
      const response = await fetch(API_ENDPOINT.DAFTAR_RESTORAN);
      if (!response.ok) { // to check whether the request is failed or not
        loader.style.display = 'none';
        errorMessage.innerHTML = `An error has occured: ${response.status}. Request gagal dilakukan.`;
      } else {
        const responseJson = await response.json();
        return responseJson.restaurants;
      }
    } else {
      loader.style.display = 'none';
      errorMessage.innerHTML = 'Error: Check Koneksi Internet Anda.';
    }
    return null;
  }

  static async detailRestoran(id) {
    const errorMessage = document.getElementById('error-message');
    const loader = document.getElementById('loading');
    const isOnline = navigator.onLine;

    if (isOnline) {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        loader.style.display = 'none';
        errorMessage.innerHTML = `An error has occured: ${response.status}. Request gagal dilakukan.`;
      } else {
        const responseJson = await response.json();
        return responseJson.restaurant;
      }
    } else {
      loader.style.display = 'none';
      errorMessage.innerHTML = 'Error: Check Koneksi Internet Anda.';
    }
    return null;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `${CONFIG.KEY}`,
      },
      body: JSON.stringify(review),
    })
    .catch((error) => {
      throw new Error(error);
    });
    return response.customerReviews;
  }
}

export default RestoranSource;