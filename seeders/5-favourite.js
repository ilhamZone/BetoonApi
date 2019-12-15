'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favourites', [
      {
        users_id: 1,
        comics_id: 1,
        is_favorite: 1
      },
      {
        users_id: 1,
        comics_id: 2,
        is_favorite: 1
      },
      {
        users_id: 2,
        comics_id: 1,
        is_favorite: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favourites', null, {});
  }
};
