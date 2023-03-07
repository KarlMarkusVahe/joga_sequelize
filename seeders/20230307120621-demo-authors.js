'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Authors', [{
            name: 'Patrick Bateman',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Authors', [{
            name: 'Bob Squarepants',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Authors', [{
            name: 'John Doe',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {})
  }
};
