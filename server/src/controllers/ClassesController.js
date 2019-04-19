const { ClassModel } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const classes = await ClassModel.findAll()
      res.send(classes)
    } catch (err) {
      res.status(500).send({
        error: "An error occured trying to fetch your classes."
      })
    }
  },
  async post (req, res) {
    try {
      const myClass = await ClassModel.create(req.body)
      res.send(myClass)
    } catch (err) {
      res.status(500).send({
        error: "An error occured trying to add your class."
      })
    }
  }
}