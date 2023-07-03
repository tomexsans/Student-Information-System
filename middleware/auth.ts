import { userSessionStore } from '~/stores/userSession'

export default defineNuxtRouteMiddleware((to, from) => {
  // const store = useAuth()
  const store = userSessionStore()
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (store.isAuthenticated === false) {
    return navigateTo('/guest')
  }
})