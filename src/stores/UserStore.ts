import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Olie Cape'
  }),
  getters: {
    firstName(): string {
      return this.user.split(' ')[0]
    }
  }
})
