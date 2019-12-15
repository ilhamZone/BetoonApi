'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@tes.com',
        password: 'admin007',
        name: 'Annie Putri',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiW_qbHzt3mCDlv6JWM7jkNciLdIL7i0lcuNHAKWCFAZyKVRYF',
      },
      {
        email: 'budi@tes.com',
        password: 'budi007',
        name: 'Budi Santoso',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0TqgFh3r8mqE7HpaCeLJhFapi7_aZ108qZThPRgTpDdzyXJ1d'
      },
      {
        email: 'therock@tes.com',
        password: 'therock007',
        name: 'Dwayne Johnson',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx-3MhzltJCtId3tkKcMLyv4UTlR36XqsS9UvWX1r5rmlny30k'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
