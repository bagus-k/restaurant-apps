/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.post-item__title');
    const likedRestaurant = locate('.post-item__title').first();
    I.click(likedRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    //first restaurant liked
    I.amOnPage('/#/favorite');
    I.seeElement('.post-item__title');
    const unlikeRestaurant = locate('.post-item__title').first();
    I.click(unlikeRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
