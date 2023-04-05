import { Route, Routes as RoutesWrapper } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/DefaultLayout';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';

const Layout = (children: JSX.Element) => (
  <DefaultLayout>{children}</DefaultLayout>
);

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/">
        <Route index element={Layout(<Products />)} />
        <Route path="/product" element={Layout(<ProductDetail />)} />
        <Route path="/cart" element={Layout(<Cart />)} />
      </Route>
    </RoutesWrapper>
  );
}
