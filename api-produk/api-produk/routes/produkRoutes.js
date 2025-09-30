const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

router.post('/', produkController.creaproduk);           // Create
router.get('/', produkController.getAllproduk);           // Read all
router.get('/:id', produkController.getProdukById);      // Reat by ID
router.put('/:id', produkController.UpdateProduk);      // Update
router.delete('/:id', produkController.deleteProduk);  //Delete

module.exports = router;