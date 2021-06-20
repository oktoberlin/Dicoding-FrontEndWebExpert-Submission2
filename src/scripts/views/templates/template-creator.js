import CONFIG from '../../globals/config';
import '../../components/loading-post';
import userReviewIcon from '../../../public/images/user-review/user-review-avatar.jpg';

const createRestaurantPostTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item__thumbnail"
                src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
                alt="${restaurant.name}">
        <div class="post-item__content">
            <div class="rating">
                <p>Lokasi: <span class="post-item__city">${restaurant.city}</span></p>
                <p>⭐️<span style="font-weight: bold;"> ${restaurant.rating}</span></p>
            </div>
            <h1 class="post-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p tabindex="0" class="post-item__description">${restaurant.description}</p>
        </div>
        <a href="#/detail/${restaurant.id}" class="detail-link">More Detail</a>
    </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article id="postItem" class="post-item">
        <img class="post-item__thumbnail"
                src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
                alt="${restaurant.name}">
        <div class="post-item__content">
            <div class="rating">
                <p class="address">Alamat: <span class="post-item__city">${restaurant.address}, ${restaurant.city}</span></p>
                <p>⭐️<span style="font-weight: bold;"> ${restaurant.rating}</span></p>
            </div>
            <h1 class="post-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p tabindex="0" class="post-item__description">${restaurant.description}</p>
        </div>

        <div class="restaurant-category">
            <h3>Kategori Restoran:</h3>
            <p>${restaurant.categories.map((category) => `
            ${category.name}`).join(', ')}.</p>
        </div>
        
        <div id="menu-container">
            <div class="column">
                <div id="menu-makanan">
                    <p tabindex="0">Menu Makanan:</p>
                    <ol tabindex="0">
                        ${restaurant.menus.foods.map((food) => `
                        <li>${food.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
            
            <div class="column">
                <div id="menu-minuman">
                    <p tabindex="0">Menu Minuman:</p>
                    <ol tabindex="0">
                        ${restaurant.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="review-form-container">
            <form id="review-form">
                <ul class="wrapper">
                <h1 tabindex="0">Berikan Review untuk Restaurant <span>${restaurant.name}</span></h1>
                    <li class="form-row">
                        <input aria-label="Enter your name" type="text" id="name" placeholder="Your Name..." />
                    </li>
                    <li class="form-row">
                        <textarea aria-label="Write your review here" type="text" id="review" placeholder="Write Your Review here..." style="height:100px"></textarea>
                    </li>
                    <li class="form-row">
                        <button aria-label="submit your review form" type="submit">Submit</button>
                    </li>
                </ul>
            </form>
            <loading-post></loading-post>
            <div id="thanks-review"></div>
        </div>
        
        <div id="customerReview"></div>
    </article>       
`;

const createFavoriteRestaurantsTemplate = (restaurant) => `
    <article class="post-item" style="margin-bottom: 10px;">
        <img class="post-item__thumbnail"
                src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
                alt="${restaurant.name}">
        <div class="post-item__content">
            <div class="rating">
                <p>Kota: <span class="post-item__city">${restaurant.city}</span></p>
                <p>⭐️<span style="font-weight: bold;"> ${restaurant.rating}</span></p>
            </div>
            <h1 class="post-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p tabindex="0" class="post-item__description">${restaurant.description}</p>
        </div>
        <a href="#/detail/${restaurant.id}" class=detail-link>More Detail</a>
    </article>       
`;

const createRestaurantCustomerReviewTemplate = (reviews) => `
    <h1 tabindex="0">Consumer Review</h1>
    <ul class="cards">
        ${reviews.customerReviews.map((review) => `
        <li class="cards_item">
            <div class="card">
                <div class="card_image">
                    <img class="img-consumer-review" src="${userReviewIcon}" alt="user-review-icon">
                </div>
                <div class="card_content">
                    <h2 tabindex="0" class="card_title">${review.name}</h2>
                    <p tabindex="0" class="card_text">"${review.review}"</p>
                    <p tabindex="0" style="font-size:smaller;">${review.date}</p>
                </div>
            </div>
        </li>
        `).join('')}    
    </ul>
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
    createFavoriteRestaurantsTemplate,
    createRestaurantCustomerReviewTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};