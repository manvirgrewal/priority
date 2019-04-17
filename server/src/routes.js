const AuthenticationController = require('./controllers/AuthenticationController')
const AutheneticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TasksController = require('./controllers/TasksController')

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
}
