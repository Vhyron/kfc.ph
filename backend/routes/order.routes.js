const express = require('express');
const router = express.Router();
const { Order, Product, Category } = require('../models');

router.post('/', async (req, res) => {
  try {

    console.log('Request Body:', req.body);

    const { items, isDelivery } = req.body;
    
    let totalAmount = 0;
    const validatedItems = await Promise.all(items.map(async (item) => {
      const product = await Product.findByPk(item.productId, {
        include: [{ model: Category, attributes: ['name'] }]
      });
      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }
      totalAmount += product.price * item.quantity;
      return {
        productId: item.productId,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.Category.name,
        quantity: item.quantity
      };
    }));

    const order = await Order.create({
      totalAmount,
      isDelivery,
      items: validatedItems,
      status: 'completed'
    });

    const orderDetails = {
      orderId: order.id,
      isDelivery: order.isDelivery,
      status: order.status,
      totalAmount: order.totalAmount,
      items: order.items
    };

    res.status(201).json(orderDetails);
  } catch (error) {
    console.error('Error creating order:', error.stack);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

module.exports = router;