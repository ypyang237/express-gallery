'use strict'

module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    author: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        console.log('models', models);
      }
    }
  });
  return Photo;
};


