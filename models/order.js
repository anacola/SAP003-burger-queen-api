'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order',
  {
    clientName: DataTypes.STRING,
    status: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER,
  }, {});
  order.associate = function(models) {
    order.hasMany(models.orderItens)
};
  return order;
};