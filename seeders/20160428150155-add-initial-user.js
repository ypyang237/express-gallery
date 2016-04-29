'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [{
        username: 'owen',
        password: '$2a$10$jBGGnlead4bRWim79i6i1OYK9Vd14GjW/1IMzgIN.2v8JYjD/Vn0O',
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
