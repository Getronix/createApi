import { configureStore, Middleware } from '@reduxjs/toolkit';
import api from '../services/api';
import graphqlApi from '../services/graphqlApi';
import websocketApi from '../services/websocketApi';

const store = configureStore({
  reducer: {
    rest: api.reducer,
    graphql: graphqlApi.reducer,
    websocket: websocketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    api.middleware as Middleware,
    graphqlApi.middleware as Middleware,
    websocketApi.middleware as Middleware
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;