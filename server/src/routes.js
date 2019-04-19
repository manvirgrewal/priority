const AuthenticationController = require('./controllers/AuthenticationController')
const AutheneticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TasksController = require('./controllers/TasksController')
const ClassesController = require('./controllers/ClassesController')

module.exports = (app) => {
  app.post('/register',
    AutheneticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.get('/create-task',
    TasksController.index)
  app.post('/create-task',
    TasksController.post)
  app.get('/add-class',
    ClassesController.index)
  app.post('/add-class',
    ClassesController.post)
}
