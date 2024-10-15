const express = require('express');
const router = express.Router();
const { Product, Category } = require('../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
});

router.get('/category/:categoryId', async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { categoryId: req.params.categoryId },
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products by category:', error);
    res.status(500).json({ message: 'Error retrieving products by category', error: error.message });
  }
});

module.exports = router;