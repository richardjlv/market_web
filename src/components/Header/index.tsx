import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IApplicationState } from '../../store/types';
import { CartCount, Container } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const count = useSelector((state: IApplicationState) => state.cart.count);

  return (
    <Container>
      <h1 onClick={() => navigate('/')}>Market</h1>
      <div onClick={() => navigate('/cart')}>
        <BsCart2 />
        {count > 0 && <CartCount>{count}</CartCount>}
      </div>
    </Container>
  );
};

export default Header;
