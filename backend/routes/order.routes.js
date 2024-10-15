const express = require('express');
const router = express.Router();
const { Order, Product } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { items, totalAmount, isDelivery } = req.body;
    
    let calculatedTotal = 0;
    const validatedItems = await Promise.all(items.map(async (item) => {
      const product = await Product.findByPk(item.productId);
      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }
      calculatedTotal += product.price * item.quantity;
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: product.price
      };
    }));

    if (Math.abs(calculatedTotal - totalAmount) > 0.01) {
      throw new Error('Total amount mismatch');
    }

    const order = await Order.create({
      totalAmount: calculatedTotal,
      isDelivery,
      items: validatedItems
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ message: 'Error retrieving orders', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Error retrieving order:', error);
    res.status(500).json({ message: 'Error retrieving order', error: error.message });
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.status = status;
    await order.save();
    res.json(order);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status', error: error.message });
  }
});

module.exports = router;