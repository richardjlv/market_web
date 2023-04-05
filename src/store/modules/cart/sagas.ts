import { toast } from 'react-toastify';
import { call, select, put, takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { IApplicationState } from '../../types';
import * as Actions from './actions';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { CartTypes, IProduct } from './types';

function* addToCart({ payload }: Actions.AddToCartRequest) {
  const { id } = payload;
  const productExists: IProduct = yield select((state: IApplicationState) =>
    state.cart.products.find((product: IProduct) => product.id === id)
  );

  const { data: product }: { data: IProduct } = yield call(
    api.get,
    `/products/${id}`
  );

  const stockAmount = product.unitsInStock;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess({ id, amount }));
    toast.success('Quantidade do produto alterada no carrinho.');
  } else {
    const response: { data: IProduct } = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price / 100),
    };

    yield put(addToCartSuccess(data));
    toast.success('Produto adicionado ao carrinho.');
  }
}

function* updateAmount({ payload }: Actions.UpdateAmountRequest) {
  const { id, amount } = payload;
  if (amount <= 0) return;

  const { data: product }: { data: IProduct } = yield call(
    api.get,
    `/products/${id}`
  );
  const stockAmount = product.unitsInStock;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess({ id, amount }));
  toast.success('Quantidade do produto alterada no carrinho.');
}

export default all([
  takeLatest(CartTypes.ADD_REQUEST, addToCart),
  takeLatest(CartTypes.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
