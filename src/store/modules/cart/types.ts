/**
 * Actions types
 */

export enum CartTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  REMOVE = '@cart/REMOVE',
  UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS',
}

/**
 * Data types
 */

export interface ICategory {
  id: number;
  name: string;
}

export interface IImage {
  id: number;
  path: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  formattedPrice?: string;
  description: string;
  images: IImage[];
  amount: number;
  unitsInStock: number;
  category: ICategory;
}

export interface IStock {
  id: number;
  amount: number;
}

export interface IChangeAmount {
  id: number;
  amount: number;
}

export interface IAddOrRemoveToCart {
  id: number;
}

/**
 * State types
 */

export interface ICartState {
  readonly products: IProduct[];
  readonly count: number;
  readonly loading: boolean;
}
