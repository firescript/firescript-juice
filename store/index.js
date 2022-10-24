export const state = () => ({
  isLoading: true,
  menuOpen: false,
})

export const getters = {
  isMenuOpen(state) {
    return state.menuOpen
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  setMenuOpen(state, status) {
    state.menuOpen = status
  },
  setLoading(state, status) {
    state.isLoading = status
  }
}