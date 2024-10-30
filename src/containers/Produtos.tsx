import { useGetProdutoQuery } from '../services/api'
import * as S from './styles'
import { Produto as ProdutoType } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarOuRemover as adicionarFavorito } from '../store/reducers/favoritar'
import { adicionar as adicionarCarrinho } from '../store/reducers/carrinho'
import { RootReducer } from '../store'

import ProdutoComponent from '../components/Produto'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutoQuery()

  const dispatch = useDispatch()

  const aoComprar = (produto: ProdutoType) => {
    dispatch(adicionarCarrinho(produto))
  }

  const favoritar = (produto: ProdutoType) => {
    dispatch(adicionarFavorito(produto))
  }

  // Seleciona os favoritos e carrinho do estado global
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          aoComprar={aoComprar}
          favoritar={favoritar}
          estaNosFavoritos={favoritos.some((fav) => fav.id === produto.id)}
          estaNoCarrinho={carrinho.some((item) => item.id === produto.id)}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
