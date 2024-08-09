export const state = () => ({
  baseURL: process.env.IMAGE_URL,
  isActive: false
})

export const getters = {
  baseURL(state) {
    return state.baseURL
  },
  isActive(state) {
    return state.isActive
  }
}

export const mutations = {
  toggleMenu(state) {
    state.isActive = !state.isActive
  },
  closeMenu(state) {
    state.isActive = false
  }
}

export const actions = {
  toggleMenu({ commit }) {
    commit('toggleMenu')
  },
  closeMenu({ commit }) {
    commit('closeMenu')
  }
}
