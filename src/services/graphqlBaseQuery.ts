import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { request, ClientError } from 'graphql-request';

const graphqlBaseQuery = ({ baseUrl }: { baseUrl: string }): BaseQueryFn => async ({ document, variables }) => {
  try {
    const result = await request(baseUrl, document, variables);
    return { data: result };
  } catch (error) {
    if (error instanceof ClientError) {
      return { error: { status: error.response.status, data: error.response.errors } };
    }
    return { error: { status: 'CUSTOM_ERROR', data: error } };
  }
};

export { graphqlBaseQuery };