import { action } from 'typesafe-actions';

import {
  CartTypes,
  IAddOrRemoveToCart,
  IChangeAmount,
  IProduct,
} from './types';

export const addToCartRequest = ({ id }: IAddOrRemoveToCart) =>
  action(CartTypes.ADD_REQUEST, { id });

export const addToCartSuccess = (product: IProduct) =>
  action(CartTypes.ADD_SUCCESS, { product });

export const removeFromCart = ({ id }: IAddOrRemoveToCart) =>
  action(CartTypes.REMOVE, { id });

export const updateAmountRequest = ({ id, amount }: IChangeAmount) =>
  action(CartTypes.UPDATE_AMOUNT_REQUEST, { id, amount });

export const updateAmountSuccess = ({ id, amount }: IChangeAmount) =>
  action(CartTypes.UPDATE_AMOUNT_SUCCESS, { id, amount });

export type AddToCartRequest = ReturnType<typeof addToCartRequest>;
export type AddToCartSuccess = ReturnType<typeof addToCartSuccess>;
export type RemoveFromCart = ReturnType<typeof removeFromCart>;
export type UpdateAmountRequest = ReturnType<typeof updateAmountRequest>;
export type UpdateAmountSuccess = ReturnType<typeof updateAmountSuccess>;

export type CartActionTypes =
  | AddToCartRequest
  | AddToCartSuccess
  | RemoveFromCart
  | UpdateAmountRequest
  | UpdateAmountSuccess;
