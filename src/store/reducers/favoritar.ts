import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload

      if (state.itens.find((favorite) => favorite.id === fav.id)) {
        state.itens.filter((favorite) => favorite.id !== fav.id)
      } else {
        state.itens.push(fav)
      }
    }
  }
})
