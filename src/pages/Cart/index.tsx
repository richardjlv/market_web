import React, { useMemo } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import { IApplicationState } from '../../store/types';
import { formatPrice } from '../../util/format';
import {
  CartDetail,
  Container,
  EmptyText,
  ProductAmountContainer,
  ProductHeader,
  ProductItem,
  ProductList,
  TrashIcon,
} from './styles';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: IApplicationState) =>
    state.cart.products.map((product) => ({
      ...product,
      total: formatPrice((product.price * product.amount) / 100),
    }))
  );

  const total = useMemo(() => {
    const totalValue = products.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0);

    return formatPrice(totalValue / 100);
  }, [products]);

  function increment(product: IProduct) {
    dispatch(
      CartActions.updateAmountRequest({
        id: product.id,
        amount: product.amount + 1,
      })
    );
  }

  function decrement(product: IProduct) {
    dispatch(
      CartActions.updateAmountRequest({
        id: product.id,
        amount: product.amount - 1,
      })
    );
  }

  return (
    <Container>
      <span>Meu Carrinho</span>
      {products.length ? (
        <>
          <ProductHeader>
            <span>Produto</span>
            <span>Name</span>
            <span>Valor unitário</span>
            <span>Quantidade</span>
            <span>Total</span>
            <span>Remover</span>
          </ProductHeader>
          <ProductList>
            {products.map((product) => (
              <ProductItem>
                <img src={product.images?.[0].path} alt={product.title} />
                <span>{product.title}</span>
                <strong>{product.formattedPrice}</strong>
                <div>
                  <ProductAmountContainer>
                    <IoIosRemove size={16} onClick={() => decrement(product)} />
                    <p>{product.amount}</p>
                    <IoIosAdd size={16} onClick={() => increment(product)} />
                  </ProductAmountContainer>
                </div>
                <strong>{product.total}</strong>

                <div>
                  <TrashIcon
                    onClick={() =>
                      dispatch(CartActions.removeFromCart({ id: product.id }))
                    }
                  />
                </div>
              </ProductItem>
            ))}
          </ProductList>

          <CartDetail>
            <span>Total</span>
            <strong>{total}</strong>
          </CartDetail>
        </>
      ) : (
        <EmptyText>
          O carrinho está vazio! Adicione produtos para continuar.
        </EmptyText>
      )}
    </Container>
  );
};

export default Cart;
