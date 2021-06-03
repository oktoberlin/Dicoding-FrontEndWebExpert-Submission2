import UrlParser from '../../routes/url-parser';
import RestoranSource from '../../data/restoran-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../../components/loading-indicator';

const DetailRestoran = {
    async render() {
      return `
      <loading-element></loading-element>
      <div id="detailRestaurant" class="detailRestaurant"></div>
      <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const loader = document.getElementById('loading');
        loader.style.display = 'block';
        const restaurant = await RestoranSource.detailRestoran(url.id);
        const restaurantContainer = document.querySelector('#detailRestaurant');
        restaurantContainer.innerHTML = createRestaurantItemTemplate(restaurant);
        loader.style.display = 'none';

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: restaurant.id,
            title: restaurant.title,
            description: restaurant.description,
            rating: restaurant.rating,
            city: restaurant.city,
          },
        });
    },
};

export default DetailRestoran;