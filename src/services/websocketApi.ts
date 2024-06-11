import { createApi } from '@reduxjs/toolkit/query/react';
import websocketBaseQuery from './websocketBaseQuery';

const websocketApi = createApi({
  reducerPath: 'websocket',
  baseQuery: websocketBaseQuery,
  endpoints: (builder) => ({
    getMessages: builder.query<string, void>({
      query: () => ({ query: 'getMessages' }),
    }),
    sendMessage: builder.mutation<void, string>({
      query: (message) => ({ query: 'sendMessage', data: message }),
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = websocketApi;
export default websocketApi;