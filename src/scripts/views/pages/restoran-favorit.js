import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createFavoriteRestaurantsTemplate } from '../templates/template-creator';

const RestoranFavorit = {
    async render() {
      return `
        <div class="content">
          <h2 tabindex="0" class="favorite-heading">Restoran Favoritmu</h2>
          <div id="restaurant" class="restaurant"></div>
      </div>
      `;
    },

    async afterRender() {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurant');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createFavoriteRestaurantsTemplate(restaurant);
      });
    },
};

export default RestoranFavorit;