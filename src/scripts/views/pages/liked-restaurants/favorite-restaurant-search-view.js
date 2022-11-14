import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <section class="content">
        <h2 class="content-header" tabindex="0">Favorite Restaurant</h2>
        <div class="posts">
            <div id="restaurant-list" class="restaurants"></div>
        </div>
    </section>
       `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('#restaurant-list').innerHTML = html;

    // document.getElementById('#restaurant-list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
