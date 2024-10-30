import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  // Seleciona os favoritos e carrinho do estado global
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)

  // Calcula o valor total do carrinho
  const valorTotal = carrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
