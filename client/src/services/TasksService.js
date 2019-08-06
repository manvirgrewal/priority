import Api from '@/services/Api'

export default {
  index () {
    return Api().get('tasks')
  },
  show (taskId) {
    return Api().get(`tasks/${taskId}`)
  },
  addTask (task) {
    return Api().post('create-task', task)
  },
  put (task) {
    return Api().put(`tasks/${task.id}`, task)
  },
  removeTask (taskId) {
    return Api().delete(`tasks/${taskId}`)
  }
}
