import Api from '@/services/Api'

export default {
  index () {
    return Api().get('add-class')
  },
  addClass (myClass) {
    return Api().post('add-class', myClass)
  }
}
