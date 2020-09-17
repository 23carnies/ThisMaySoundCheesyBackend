const Cheese = require('../models/cheese')

module.exports = {
    create,
    index,
  }
  
  function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.cast = req.body.cast.split(',');
    Cheese.create(req.body)
    .then(cheese => {res.json(cheese)})
    .catch(err => {res.json(err)})
  }

  function index(req, res) {
    Cheese.find({})
    .populate('addedBy')
    .then(cheeses => {res.json(cheeses)})
    .catch(err => {res.json(err)})
  }