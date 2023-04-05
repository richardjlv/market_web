import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import api from '../../services/api';
import { addToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import { IApplicationState } from '../../store/types';
import { formatPrice } from '../../util/format';
import {
  Container,
  EmptyText,
  LoadingContainer,
  ProductDetails,
} from './styles';

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const cartLoading = useSelector(
    (state: IApplicationState) => state.cart.loading
  );

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  function handleAddToCart() {
    if (product) {
      dispatch(addToCartRequest(product));
    }
  }

  useMemo(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const { data } = await api.get<IProduct>(`/products/${id}`, {});

        setProduct({
          ...data,
          formattedPrice: formatPrice(data.price / 100),
        });
      } catch (error) {
        toast.error('Erro ao carregar produto. Tente novamente mais tarde.');
      }
      setLoading(false);
    }
    loadProduct();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          {product ? (
            <>
              <img src={product?.images?.[0].path} alt={product?.title} />

              <ProductDetails>
                <span>{product?.category.name}</span>
                <h1>{product?.title}</h1>
                <strong>{product?.formattedPrice}</strong>
                <button
                  type="button"
                  onClick={!cartLoading ? handleAddToCart : undefined}
                >
                  {cartLoading ? 'Adicionando ...' : 'Adicionar ao carrinho'}
                </button>
                <p>{product?.description}</p>
              </ProductDetails>
            </>
          ) : (
            <EmptyText>
              Erro ao carregar produto. Tente novamente mais tarde.
            </EmptyText>
          )}
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
