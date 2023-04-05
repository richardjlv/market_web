import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';
import { formatPrice } from '../../util/format';
import {
  Container,
  EmptyText,
  LoadingContainer,
  ProductDetails,
} from './styles';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

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
              <img src={product?.images?.[0].path} alt="product" />

              <ProductDetails>
                <span>{product?.category.name}</span>
                <h1>{product?.title}</h1>
                <strong>{product?.formattedPrice}</strong>
                <button type="button">Adicionar ao carrinho</button>
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
