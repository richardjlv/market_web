import produce from 'immer';
import { Reducer } from 'redux';

import { CartActionTypes } from './actions';
import { ICartState, CartTypes, IProduct } from './types';

const INITIAL_STATE: ICartState = {
  products: [],
  count: 0,
  loading: false,
};

const reducer: Reducer<ICartState, CartActionTypes> = (
  // eslint-disable-next-line default-param-last
  state = INITIAL_STATE,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CartTypes.ADD_REQUEST: {
        draft.loading = true;

        break;
      }

      case CartTypes.UPDATE_AMOUNT_REQUEST: {
        draft.loading = true;

        break;
      }

      case CartTypes.ADD_SUCCESS: {
        const { product } = action.payload;
        draft.products.push(product);
        draft.count += 1;
        draft.loading = false;

        break;
      }

      case CartTypes.REMOVE: {
        const productIndex = draft.products.findIndex(
          (p: IProduct) => p.id === action.payload.id
        );
        if (productIndex >= 0) {
          draft.count -= draft.products[productIndex].amount;
          draft.products.splice(productIndex, 1);
        }
        draft.loading = false;

        break;
      }
      case CartTypes.UPDATE_AMOUNT_SUCCESS: {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.payload.id
        );

        if (productIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          draft.products[productIndex].amount = Number(action.payload.amount);
          draft.count = draft.products.reduce(
            (total, product) => total + product.amount,
            0
          );
        }
        draft.loading = false;

        break;
      }
      default:
    }
  });

export default reducer;
