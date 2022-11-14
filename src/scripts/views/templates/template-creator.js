/* eslint-disable no-trailing-spaces */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Detail Restaurant
const createRestaurantDetailTemplate = (restaurant) => `
<section class="content detail-item">
    <div class="post-item">
        <h2 class="content-header post-item__title" tabindex="0">${restaurant.name}</h2>
        <div class="post-item__thumbnail">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Gambar Restaurant ${restaurant.name}">
        </div>
        <div class="post-item__content">
            <p class="post-item__rating" tabindex="0">Kota :  ${restaurant.city || '-'}</p>
            <p class="post-item__rating" tabindex="0">Rating : ${restaurant.rating}</p>
            <p class="post-item__rating" tabindex="0">
                Kategori : ${restaurant.categories.map((categorie) => `
                  ${categorie.name}
              `.trim()).join(', ')}
            </p>
            <p class="post-item__rating" tabindex="0">Alamat : ${restaurant.address}</p>
            <p class="post-item__description" tabindex="0">${restaurant.description}</p>
            <h3 class="post-item__menu-title" tabindex="0">Menu</h3>
            <div id="restaurant-menu" class="post-item__menu">
                <div class="post-item__menu-inner post-item">
                    <p class="post-item__menu-sub-title" tabindex="0">Foods</p>
                    <ul class="post-item__menu-item">
                        ${restaurant.menus.foods.map((food) => `
                            <li class="post-item__menu-item-list" tabindex="0">${food.name}</li>
                        `.trim()).join('')}
                    </ul>
                </div>
                <div class="post-item__menu-inner post-item">
                    <p class="post-item__menu-sub-title" tabindex="0">Drinks</p>
                    <ul class="post-item__menu-item">
                        ${restaurant.menus.drinks.map((drink) => `
                            <li class="post-item__menu-item-list" tabindex="0">${drink.name}</li>
                        `.trim()).join('')}
                    </ul>
                </div>
            </div>
            <div class="post-item__review">
                <h3 class="post-item__menu-title" tabindex="0">Review</h3>
                <div class="post-item__review-inner">
                    ${restaurant.customerReviews.map((customer) => `
                        <div class="post-item post-item__review">
                            <p class="post-item__review-name" tabindex="0">${customer.name}</p>
                            <p class="post-item__review-desc" tabindex="0">${customer.review}</p>
                            <p class="post-item__review-date" tabindex="0">${customer.date}</p>
                        </div>
                     `.trim()).join('')}
                </div>
            </div>
        </div>
    </div>
</section>
`;

// List Restaurant
const createRestaurantItemTemplate = (restaurant) => `
<div class="post-item">
    <div class="post-item__thumbnail">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Gambar Restaurant ${restaurant.name}">
    </div>
    <div class="post-item__content">
        <p class="post-item__rating" tabindex="0">Kota :  ${restaurant.city || '-'}</p>
        <p class="post-item__rating" tabindex="0">Rating : ${restaurant.rating || '-'}</p>
        <h3 class="post-item__title"><a href="${`#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p class="post-item__description text" tabindex="0">${restaurant.description || '-'}</p>
    </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true" tabindex="0"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true" tabindex="0"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
