import { createSlice } from '@reduxjs/toolkit'

export const starWars = createSlice({
  name: 'starWars',
  initialState: {
    loading: true,
    favourites: []
  },
  reducers: {
    updateLoading: (state, action) => {
      state.loading = action.payload
    },
    addFavourite: (state, action) => {
      state.favourites.push(action.payload)
      
    },
    removeFavourite: (state, action) => {
        state.favourites = state.favourites.filter( val => action.payload !== val);
      },
  },
})

export const { addFavourite, removeFavourite, updateLoading } = starWars.actions

export default starWars.reducer