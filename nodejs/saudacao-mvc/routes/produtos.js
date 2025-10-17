const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.produtos);
router.post('/camisetas', siteController.camisetas);

module.exports = router;