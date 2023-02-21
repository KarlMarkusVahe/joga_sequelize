'use strict';

const {Sequelize} = require("sequelize");
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Authors', [{
          name: 'Patrick Bateman'
        }]),
        queryInterface.bulkInsert('Authors', [{
          name: 'Bob Squarepants',
        }]),
        queryInterface.bulkInsert('Authors', [{
          name: 'John Doe'
        }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {})
  }
};
