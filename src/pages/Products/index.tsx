import React, { useEffect, useState } from 'react';
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsSearch,
} from 'react-icons/bs';
import { MdOutlineClear } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import api from '../../services/api';
import { ICategory, IProduct } from '../../store/modules/cart/types';
import { formatPrice } from '../../util/format';
import {
  Container,
  EmptyText,
  FilterOptions,
  PaginationContainer,
  ProductItem,
  ProductList,
} from './styles';

interface IProductResponse {
  count: number;
  products: IProduct[];
}

interface ICategoriesResponse {
  categories: ICategory[];
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<String>();
  const [loading, setLoading] = useState(false);
  const countPerPage = 10;
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [orderBy, setOrderBy] = useState<string>();
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get<ICategoriesResponse>('/categories');
        setCategories(data.categories);
      } catch (error) {
        toast.error('Erro ao carregar categorias. Tente novamente mais tarde.');
      }
    }

    loadCategories();
  }, []);

  async function loadProducts() {
    setLoading(true);
    try {
      const response = await api.get<IProductResponse>('/products', {
        params: {
          search,
          category: selectedCategory,
          orderBy,
        },
      });

      const data = response.data.products.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price / 100),
      }));

      setProducts(data);
      setCanNextPage(response.data.count > page * countPerPage);
      setCanPreviousPage(page > 1);
    } catch (error) {
      toast.error('Erro ao carregar produtos. Tente novamente mais tarde.');
    }
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, [search, page, orderBy, selectedCategory]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { value } = event.currentTarget[0] as HTMLInputElement;

    setSearch(value.trim());
    setPage(0);
  }

  function clear() {
    setSearch('');
    setPage(0);
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  const ProductsView = () => {
    if (products.length > 0) {
      return (
        <ProductList>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.images?.[0].path} alt={product.title} />
              <span>{product.title}</span>
              <strong>{product.formattedPrice}</strong>
            </ProductItem>
          ))}
        </ProductList>
      );
    }

    return <EmptyText>Nenhum produto encontrado</EmptyText>;
  };

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(e.target.value);
    setPage(0);
  }

  function handleOrderByChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setOrderBy(e.target.value);
    setPage(0);
  }

  return (
    <Container>
      <FilterOptions>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <BsSearch />
          </button>
          {search && (
            <button type="button" onClick={clear}>
              <MdOutlineClear />
              <span>{search}</span>
            </button>
          )}
        </form>

        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="" hidden>
            Categoria
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <select onChange={handleOrderByChange} value={orderBy}>
          <option value="" hidden>
            Ordenar por
          </option>
          <option value="minPrice">Menor preço</option>
          <option value="maxPrice">Maior preço</option>
          <option value="title">Nome</option>
        </select>
      </FilterOptions>
      {loading ? <Loading /> : <ProductsView />}
      <PaginationContainer>
        <button
          type="button"
          disabled={!canPreviousPage}
          onClick={handlePreviousPage}
        >
          <BsArrowLeftCircle />
        </button>
        <span>{page}</span>
        <button type="button" disabled={!canNextPage} onClick={handleNextPage}>
          <BsArrowRightCircle />
        </button>
      </PaginationContainer>
    </Container>
  );
};

export default Products;
