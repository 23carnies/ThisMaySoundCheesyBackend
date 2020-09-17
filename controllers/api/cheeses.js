const Cheese = require('../../models/cheese')

module.exports = {
    create,
    index,
    show,

  }
  
  async function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.cast = req.body.cast.split(',');
    const cheeses = await Cheese.create(req.body)
    .then(cheese => {res.json(cheese)})
    .catch(err => {res.json(err)})
  }

  async function index(req, res) {
    const cheeses = await Cheese.find({})
    .populate('addedBy')
    .then(cheeses => {res.json(cheeses)})
    .catch(err => {res.json(err)})
  }


  async function show(req,res) {
		const cheeses = await Cheese.findById(req.params.id)
		.then(cheese => {res.json(cheese)})
    .catch(err => {res.json(err)})
	}
