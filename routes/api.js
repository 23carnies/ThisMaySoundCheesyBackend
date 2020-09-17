// movies.js
const router = require('express').Router();
const cheesesCtrl = require('../controllers/api/cheeses');

// Public Routes
router.get('/', cheesesCtrl.index);

// Protected Routes
router.use(require('../config/auth'));
router.get('/:id', cheesesCtrl.show)
router.put('/:id', cheesesCtrl.update);
router.delete('/:id', cheesesCtrl.delete);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;