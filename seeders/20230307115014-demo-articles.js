'use strict';

const {Sequelize} = require("sequelize");
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Intro to Ashtanga',
        slug: 'intro-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet</p>',
        published: '2020-01-08 15:02:30',
        author_id: 1,
        createdAT: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Morning vinyasa routine',
        slug: 'morning-vinyasa-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet</p>',
        published: '2020-04-14 15:02:41',
        author_id: 3,
        createdAT: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of yoga teaching',
        slug: 'secrets-of-yoga-teaching',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet</p>',
        published: '2060-05-28 15:02:55',
        author_id: 1,
        createdAT: new Date(),
        updatedAt: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};