import { Produto as ProdutoType } from '../App'
import { useGetProdQuery } from '../services/api'
import * as S from './styles'

import ProdutoComponent from '../components/Produto'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto} aoComprar={function (produto: ProdutoType): void {
            throw new Error('Function not implemented.')
          } } favoritar={function (produto: ProdutoType): void {
            throw new Error('Function not implemented.')
          } } estaNosFavoritos={false}        />
      ))}
    </S.Produtos>
  );
}


export default Produtos
