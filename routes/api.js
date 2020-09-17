// movies.js
const router = require('express').Router();
const cheesesCtrl = require('../controllers/api/cheeses');

// Public Routes
router.get('/', cheesesCtrl.index);

// Protected Routes
router.use(require('../config/auth'));
router.get('/cheeses/:id', cheesesCtrl.show)


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;