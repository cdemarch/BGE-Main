const express = require('express');
const { getMedications, addMedication } = require('../controllers/medicationController');
const { protect } = require('../middleware/authMiddleware'); // Adjusted import to directly use 'protect'

const router = express.Router();

// Use the protect middleware for all routes
router.use(protect); // Ensure this is a valid middleware function

// Define routes
router.get('/', getMedications);
router.post('/', addMedication);

module.exports = router;
