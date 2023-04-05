import React from 'react';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;
