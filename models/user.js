'use strict';

const   bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username  : DataTypes.STRING,
    password  : DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : function(user, options) {
        var salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });

  return User;
};