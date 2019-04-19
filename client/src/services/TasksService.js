import Api from '@/services/Api'

export default {
  index () {
    return Api().get('create-task')
  },
  addTask (task) {
    return Api().post('create-task', task)
  }
}
