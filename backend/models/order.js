'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      
    }
  }
  Order.init({
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    isDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
      allowNull: false,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};