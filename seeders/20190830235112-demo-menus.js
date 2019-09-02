'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('menus', [{
        name: 'roti bakar',
        price: 17.500,
        categoryId:1
      },{
        name: 'sosis goreng',
        price: 5000,
        categoryId:1
      },{
        name: 'kopi',
        price: 5.000,
        categoryId: 2
      },{
        name: 'nasi goreng',
        price: 2.000,
        categoryId:3
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
