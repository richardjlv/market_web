import React from 'react';
import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import Products from '../pages/Products';

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/">
        <Route index element={<Products />} />
      </Route>
    </RoutesWrapper>
  );
}
