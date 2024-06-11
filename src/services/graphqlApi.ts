import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlBaseQuery } from './graphqlBaseQuery';

interface GraphQLPost {
  id: string;
  title: string;
}

const graphqlApi = createApi({
  reducerPath: 'graphql',
  baseQuery: graphqlBaseQuery({ baseUrl: 'https://graphqlzero.almansi.me/api' }),
  tagTypes: ['gqlPosts'],
  endpoints: (builder) => ({
    getGraphQLPosts: builder.query<GraphQLPost[], void>({
      query: () => ({
        document: gql`
          query {
            posts {
              data {
                id
                title
              }
            }
          }
        `,
      }),
      transformResponse: (response: { posts: { data: GraphQLPost[] } }) => response.posts.data,
      providesTags: ['gqlPosts']
    }),
    addGraphQLPost: builder.mutation<GraphQLPost, { title: string; body: string }>({
      query: (newPost) => ({
        document: gql`
          mutation($title: String!, $body: String!) {
            createPost(input: { title: $title, body: $body }) {
              id
              title
            }
          }
        `,
        variables: newPost,
      }),
      invalidatesTags: ['gqlPosts']
    }),
  }),
});

export const { useGetGraphQLPostsQuery, useAddGraphQLPostMutation } = graphqlApi;
export default graphqlApi;