
const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, getProfile);

module.exports = router;
