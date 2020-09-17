// movies.js
const router = require('express').Router();
const cheesesCtrl = require('../controllers/api/cheeses');

// Public Routes
router.get('/', cheesesCtrl.index);

// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, cheesesCtrl.create)
router.get('/:id', checkAuth, cheesesCtrl.show)
router.put('/:id', checkAuth, cheesesCtrl.update);
router.delete('/:id', checkAuth, cheesesCtrl.delete);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;