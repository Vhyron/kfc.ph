'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: "What's New", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fully Loaded Box", createdAt: new Date(), updatedAt: new Date() },
      { name: "Favourites", createdAt: new Date(), updatedAt: new Date() },
      { name: "Meals for 2", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bowls, Pastas, & More", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bucket Combos", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sandwiches", createdAt: new Date(), updatedAt: new Date() },
      { name: "Snacks", createdAt: new Date(), updatedAt: new Date() },
      { name: "Drinks & Desserts", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sides", createdAt: new Date(), updatedAt: new Date() },
      { name: "Deals", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};