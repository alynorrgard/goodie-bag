const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://101clipart.com/wp-content/uploads/10/Candy%20Clipart%20Black%20And%20White%2001.png',
  },
});
