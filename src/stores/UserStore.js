import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Olie Cape'
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})
