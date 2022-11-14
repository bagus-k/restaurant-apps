import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <h2 class="content-header" tabindex="0">Explore Restaurant</h2>
        <div class="posts">
            <div id="restaurant-list" class="restaurants"></div>
        </div>
     </section>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
