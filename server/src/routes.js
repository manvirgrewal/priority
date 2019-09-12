const AuthenticationController = require('./controllers/AuthenticationController')
const AutheneticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TasksController = require('./controllers/TasksController')
const ClassesController = require('./controllers/ClassesController')

module.exports = (app) => {
  app.post('/register',
    AutheneticationControllerPolicy.register,
    AuthenticationController.register),
  app.post('/login',
    AuthenticationController.login),
  app.get('/tasks',
    TasksController.index),
  app.get('/tasks/:taskId',
    TasksController.show),
  app.put('/tasks/:taskId',
    TasksController.put),
  app.delete('/tasks/:taskId',
    TasksController.delete),
  app.post('/create-task',
    TasksController.post),
  app.get('/add-class',
    ClassesController.index)
  app.post('/add-class',
    ClassesController.post)
  app.get('/classes/:classId',
    ClassesController.show),
  app.delete('/classes/:classId',
    ClassesController.delete),
  app.put('/classes/:classId',
    ClassesController.put)
}
