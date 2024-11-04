const express = require('express');
const app = express();
app.use(express.json());
const Category = require('../models/products_db');

const getItems = async (req, res) => {
    try {
        const filter = {};
        if(req.query.name) {
            filter.name = req.query.name;
        }
        if(req.query.subcategory) {
            filter['subcategories.name'] = req.query.subcategory;
        }
        const categories = await Category.find(filter);
        // Filter items if item query parameter is provided
        if(req.query.item){
            categories.forEach(category => {
                category.subcategories.forEach(subcategory => {
                    if (subcategory.name === req.query.subcategory) {
                        subcategory.items = subcategory.items.filter(item => item === req.query.item);
                    }
                });
            });
        }
        res.json(categories);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).send('Server Error');
    }
}

const addItems = async (req, res) => {
    const { categoryName, subcategoryName, itemName } = req.body;
    if(!categoryName || !subcategoryName || !itemName) {
        return res.status(400).send('Missing required fields');
    }
    try {
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).send('Category not found');
        }
        const subcategory = category.subcategories.find(sub => sub.name === subcategoryName);
        if (!subcategory) {
            return res.status(404).send('Subcategory not found');
        }
        subcategory.items.push(itemName);
        await category.save();
        res.status(200).send('Item added successfully');
    } catch (err) {
        res.status(500).send('Server error');
    }
}

module.exports = {getItems, addItems};