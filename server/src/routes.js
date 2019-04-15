const AuthenticationController = require('./controllers/AuthenticationController')
const AutheneticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post('/register',
    AutheneticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
}
