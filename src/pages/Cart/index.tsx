import React from 'react';
import { BsPlus } from 'react-icons/bs';

import {
  CartDetail,
  Container,
  ProductAmountContainer,
  ProductHeader,
  ProductItem,
  ProductList,
} from './styles';

const Cart: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Jaleco',
      price: 'R$ 999,99',
      available: true,
    },
    {
      id: 2,
      name: 'Avental',
      price: 'R$ 999,99',
      available: true,
    },
    {
      id: 3,
      name: 'Touca',
      price: 'R$ 999,99',
      available: true,
    },
    {
      id: 4,
      name: 'Fronha',
      price: 'R$ 999,99',
      available: true,
    },
  ];

  return (
    <Container>
      <span>Meu Carrinho</span>
      <ProductHeader>
        <span>Produto</span>
        <span>Name</span>
        <span>Valor unitário</span>
        <span>Quantidade</span>
        <span>Total</span>
      </ProductHeader>
      <ProductList>
        {products.map((product) => (
          <ProductItem>
            <img
              src="https://images.tcdn.com.br/img/img_prod/991451/touca_gorro_estilo_beanie_estilosa_frio_pratica_de_esportes_249_1_10367008fba56e4ec7160331eaea6adb.jpg"
              alt="product"
            />
            <span>{product.name}</span>
            <strong>{product.price}</strong>
            <div>
              <ProductAmountContainer>
                <BsPlus size={16} />
                <p>1</p>
                <BsPlus size={16} />
              </ProductAmountContainer>
            </div>
            <strong>R$1111,11</strong>
          </ProductItem>
        ))}
      </ProductList>

      <CartDetail>
        <span>Total</span>
        <strong>R$1111,11</strong>
      </CartDetail>
    </Container>
  );
};

export default Cart;
