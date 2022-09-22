import { defineStore } from 'pinia'

export const useTokenStore = defineStore({
  id: 'token',
  state: () => ({
    spotifyAccessToken: '',
    spotifyRefreshToken: ''
  })
})
