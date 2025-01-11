const express = require('express');
const { getNodes } = require('../controller/nodesController');

const router = express.Router();

// Endpoint untuk mendapatkan data
router.get('/:categoryName', getNodes);

module.exports = router;
