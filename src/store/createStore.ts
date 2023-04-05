import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, Reducer, Middleware, Store } from 'redux';

import { IApplicationState } from './types';

export default (
  reducers: Reducer,
  middlewares: Middleware[]
): Store<IApplicationState> => {
  const enhancer = applyMiddleware(...middlewares);

  return configureStore({
    reducer: reducers,
    enhancers: [enhancer],
  });
};
