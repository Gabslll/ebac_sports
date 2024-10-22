import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProd: builder.query<Produto[], void>({
      query: () => 'produtos'
    }),
    getCarrinho: builder.query<Produto[], void>({
      query: () => 'carrinho'
    }),
    getFavoritos: builder.query<Produto[], void>({
      query: () => 'favoritos'
    })
  })
})

export const { useGetProdQuery, useGetCarrinhoQuery, useGetFavoritosQuery } =
  api

export default api
