import { create } from 'zustand'

const useStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (credentials) => {
    set({ isAuthenticated: true, user: credentials.username })
  },
  register: (userData) => {
    set({ isAuthenticated: true, user: userData.username })
  },
  logout: () => {
    set({ isAuthenticated: false, user: null })
  },
}))

export default useStore
