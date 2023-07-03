import { defineStore } from 'pinia'

export const userSessionStore = defineStore('userSession', {
    state: () => {
        return {
          // all these properties will have their type inferred automatically
          isAuthenticated : false
        }
    }
})