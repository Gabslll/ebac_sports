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
    adicionarOuRemover: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload
      const index = state.itens.findIndex((favorite) => favorite.id === fav.id)

      if (index !== -1) {
        // O item já está nos favoritos, então remove
        state.itens.splice(index, 1)
        console.log('Removendo dos favoritos:', fav)
      } else {
        // O item não está nos favoritos, então adiciona
        state.itens.push(fav)
        console.log('Adicionando aos favoritos:', fav)
      }
    }
  }
})

export const { adicionarOuRemover } = favoritarSlice.actions
export default favoritarSlice.reducer
