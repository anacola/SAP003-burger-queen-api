'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItens = sequelize.define('orderItens',
  {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
  }, {});
  orderItens.associate = function(models) {
    // associations can be defined here
  };
  return orderItens;
};