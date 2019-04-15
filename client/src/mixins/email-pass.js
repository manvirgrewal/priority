export default {
  computed: {
    emailProg () {
      if (this.emailIsValid(this.email) === 1) {
        return Infinity
      } else {
        return this.email.length * 5
      }
    },
    passProg () {
      return Math.min(100, this.password.length * 13)
    },
    passColor () {
      if (this.passProg === 0) {
        return 'primary'
      } else {
        return ['error', 'warning', 'success'][Math.floor(this.passProg / 40)]
      }
    },
    emailColor () {
      if (this.emailProg === Infinity) {
        return 'success'
      } else if (this.emailProg === 0) {
        return 'primary'
      } else {
        return ['error', 'warning'][Math.floor(this.emailProg / 50)]
      }
    }
  }
}
