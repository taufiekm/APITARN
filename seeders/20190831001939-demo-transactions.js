'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('transactions', [{
        tableNumber: 1,
        finishedTime: '00:03:00',
        subtotal:0,
        discount:0,
        serviceCharge:0,
        tax:0,
        total:0,
        isPaid:0
      },{
        tableNumber: 2,
        finishedTime: '00:04:00',
        subtotal:22.22,
        discount:0,
        serviceCharge:0,
        tax:0,
        total:0,
        isPaid:1
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
