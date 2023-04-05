import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { Container, FilterOptions, ProductItem, ProductList } from './styles';

const Products: React.FC = () => {
  const navigate = useNavigate();
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
    {
      id: 5,
      name: 'Embalagem',
      price: 'R$ 999,99',
      available: true,
    },
    {
      id: 6,
      name: 'Porta talher',
      price: 'R$ 999,99',
      available: true,
    },
    {
      id: 7,
      name: 'Porta absorvente',
      price: 'R$ 999,99',
      available: true,
    },
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container>
      <FilterOptions>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <BsSearch />
          </button>
        </form>

        <select>
          <option value="">Categoria</option>
          <option value="min_price">Menor preço</option>
          <option value="max_price">Maior preço</option>
          <option value="name">Nome</option>
        </select>

        <select>
          <option value="">Ordenar por</option>
          <option value="min_price">Menor preço</option>
          <option value="max_price">Maior preço</option>
          <option value="name">Nome</option>
        </select>
      </FilterOptions>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id} onClick={() => navigate('/product')}>
            <img
              src="https://images.tcdn.com.br/img/img_prod/991451/touca_gorro_estilo_beanie_estilosa_frio_pratica_de_esportes_249_1_10367008fba56e4ec7160331eaea6adb.jpg"
              alt={product.name}
            />
            <span>{product.name}</span>
            <strong>{product.price}</strong>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
};

export default Products;
