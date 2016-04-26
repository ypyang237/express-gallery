'use strict';

var faker = require('faker');

console.log('faker.image.imageUrl', faker.image.imageUrl());

module.exports = {
  up: function (queryInterface, Sequelize) {

    let pictures = [];
    for(let i = 0; i < 200; i++) {
  console.log(faker.image.animals());
      pictures.push( {
        author : faker.name.findName(),
        link : "https://unsplash.it/" + (100 +Math.floor(Math.random() * 150 + Math.random() * 150)),
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
