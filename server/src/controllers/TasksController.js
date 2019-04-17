const { Task } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const tasks = await Task.findAll()
      res.send(tasks)
    } catch (err) {
      res.status(500).send({
        error: "An error occured trying to fetch your tasks."
      })
    }
  },
  async post (req, res) {
    try {
      const task = await Task.create(req.body)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: "An error occured trying to create your task."
      })
    }
  }
}