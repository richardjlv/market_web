import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { CartCount, Container } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Market</h1>
      <div onClick={() => navigate('/cart')}>
        <BsCart2 />
        <CartCount>2</CartCount>
      </div>
    </Container>
  );
};

export default Header;
