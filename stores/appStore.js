import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  const isLoading = ref(true)
  const isMenuOpen = ref(false)
  const isPageMounted = ref(false)

  return { isLoading, isMenuOpen, isPageMounted }

})