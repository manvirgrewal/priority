import Api from '@/services/Api'

export default {
  index () {
    return Api().get('create-task')
  },
  addTask (task) {
    return Api().post('create-task', task)
  }
}

// AuthenticationService.register({
//   email: 'lol.imaliveagain@gmail.com',
//   password: '123456'
// })
