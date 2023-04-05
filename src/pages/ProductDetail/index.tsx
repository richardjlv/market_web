import React from 'react';

import { Container } from './styles';

const ProductDetail: React.FC = () => (
  <Container>
    <img
      src="https://images.tcdn.com.br/img/img_prod/991451/touca_gorro_estilo_beanie_estilosa_frio_pratica_de_esportes_249_1_10367008fba56e4ec7160331eaea6adb.jpg"
      alt="product"
    />

    <div>
      <span>Categoria</span>
      <h1>Touca</h1>
      <strong>R$ 99.99</strong>
      <button type="button">Adicionar ao carrinho</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat
        maximus, mollis mauris congue, luctus quam. Nunc et iaculis erat. Nulla
        ullamcorper nisi ac turpis molestie, vitae ultricies leo consectetur.
        Nam sed ex id arcu scelerisque viverra. Aenean vestibulum libero vel
        tortor elementum, eu malesuada libero vehicula. Maecenas accumsan
        sagittis cursus. Nam nisi quam, posuere eu porta semper, convallis eget
        nisl. Duis sit amet tincidunt felis. Fusce ullamcorper lacus metus. In
        aliquam consectetur fringilla. Fusce varius quam enim, id venenatis
        risus imperdiet sed. Suspendisse nec sapien aliquam, vehicula urna id,
        consectetur sapien. Aenean vulputate lobortis molestie. Praesent sed
        interdum nibh.
      </p>
    </div>
  </Container>
);

export default ProductDetail;
