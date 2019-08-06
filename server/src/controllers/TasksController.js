const { Task } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const tasks = await Task.findAll()
      res.send(tasks)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch your tasks.'
      })
    }
  },
  async show (req, res) {
    try {
      const task = await Task.findByPk(req.params.taskId)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch this task.'
      })
    }
  },
  async post (req, res) {
    try {
      const task = await Task.create(req.body)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to create your task.'
      })
    }
  },
  async put (req, res) {
    try {
      await Task.update(req.body, {
        where: {
          id: req.params.taskId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to update your task.'
      })
    }
  },
  async delete (req, res) {
    const taskId = req.params.taskId
    try {
      await Task.destroy({
        where: {
          id: taskId
        }
      })
      res.send(taskId)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to delete your task.'
      })
    }
  },
}