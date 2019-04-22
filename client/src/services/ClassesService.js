import Api from '@/services/Api'

export default {
  index () {
    return Api().get('add-class')
  },
  show (classId) {
    return Api().get(`classes/${classId}`)
  },
  addClass (myClass) {
    return Api().post('add-class', myClass)
  },
  put (myClass) {
    return Api().put(`classes/${myClass.id}`, myClass)
  }
}
