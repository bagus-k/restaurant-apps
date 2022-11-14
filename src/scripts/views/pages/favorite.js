import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restaurantContainer = document.querySelector('#restaurant-list');
    // restaurant.forEach((restaurant) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    // new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
