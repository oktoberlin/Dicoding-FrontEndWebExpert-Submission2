import UrlParser from '../../routes/url-parser';
import RestoranSource from '../../data/restoran-source';
import { createRestaurantItemTemplate, createRestaurantCustomerReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../../components/loading-indicator';
import '../../components/error-message';

const DetailRestoran = {
    async render() {
      return `
      <loading-element></loading-element>
      <error-message></error-message>
      <div id="detailRestaurant" tabindex="1" class="detailRestaurant"></div>
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

        const customerReviewContainer = document.getElementById('customerReview');
        customerReviewContainer.innerHTML = createRestaurantCustomerReviewTemplate(restaurant);
        loader.style.display = 'none';

        const form = document.querySelector('#review-form');
        const thanks = document.getElementById('thanks-review');
        const loadingPost = document.getElementById('loading-post');

        /* Validating review form */
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.querySelector('#name');
          const review = document.querySelector('#review');

          /* Sending data to API */
          if (name.value && review.value !== '') { // to avoid sending empty data
            thanks.innerHTML = '';
            const dataInput = {
              id: url.id,
              name: name.value,
              review: review.value,
            };
            RestoranSource.postReview(dataInput);

            loadingPost.style.display = 'block';

            /* Let the User know the data is being sent and wait for 4 secons */
            setTimeout(() => {
              thanks.innerHTML = `<p>Terima kasih ${name.value} atas Reviewnya. Review anda telah tersimpan. Anda bisa melihat review anda di kolom Consumer Review dengan merefresh halaman ini setelah beberapa saat.</p>`;
              name.value = '';
              review.value = '';
              loadingPost.style.display = 'none';
            }, 4000);
          } else {
            thanks.innerHTML = '<p>Kolom belum diisi semua</p>';
          }
        });

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            description: restaurant.description,
            rating: restaurant.rating,
            city: restaurant.city,
            pictureId: restaurant.pictureId,
          },
        });
    },
};

export default DetailRestoran;