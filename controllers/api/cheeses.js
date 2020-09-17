const Cheese = require('../../models/cheese')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
  }
  
  async function create(req, res) {
    req.body.addedBy = req.user._id
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

    async function update(req, res) {
        const updatedCheese = await Cheese.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedCheese);
    }

    async function deleteOne(req, res) {
        const deletedCheese = await Cheese.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedCheese);
    }