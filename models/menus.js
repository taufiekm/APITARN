'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menus.associate = function(models) {
    // associations can be defined here
    menus.hasMany(models.orders,{
      foreignkey: 'menuId'
    })
  };
  return menus;
};