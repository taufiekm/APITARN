'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [{
        menuId: 1,
        transactionId: 1,
        qty:1,
        price:50000,
        status:0
      },{
        menuId: 1,
        transactionId: 2,
        qty:1,
        price:35000,
        status:0
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
