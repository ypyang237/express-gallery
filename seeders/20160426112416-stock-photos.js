'use strict';

var faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {

    let pictures = [];
    for(let i = 0; i < 20; i++) {
      pictures.push( {
        author : faker.name.findName(),
        link : "https://unsplash.it/" + 500 + "/" + (340 + Math.floor( Math.random() * 20)),
        description: faker.lorem.paragraph(),
        createdAt : new Date(),
        updatedAt : new Date()
      });
    }

      return queryInterface.bulkInsert('Photos', pictures, {});
  },

  down: function (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Photos', null, {});

  }
};
