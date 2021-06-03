import CONFIG from '../../globals/config';

const createRestaurantPostTemplate = (restaurant) => `
    <article class="post-item">
    <img class="post-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
            alt="${restaurant.name}">
    <div class="post-item__content">
        <div class="rating">
            <p>Lokasi: <span class="post-item__city">${restaurant.city}</span></p>
            <p>Rating: <span style="font-weight:bold;">${restaurant.rating}</span></p>
        </div>
        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
        <p class="post-item__description">${restaurant.description}</p>
    </div>
    <a href="#/detail/${restaurant.id}" class="detail-link">More Detail</a>
    </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
    <img class="post-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
            alt="${restaurant.name}">
    <div class="post-item__content">
        <div class="rating">
            <p>Alamat: <span class="post-item__city">${restaurant.address},${restaurant.city}</span></p>
            <p>Rating: <span style="font-weight:bold;">${restaurant.rating}</span></p>
        </div>
        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
        <p class="post-item__description">${restaurant.description}</p>
    </div>
    </article>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantPostTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};