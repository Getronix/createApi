
import React from 'react';
import { useGetGraphQLPostsQuery, useAddGraphQLPostMutation } from '../services/graphqlApi';

const GraphQLPosts: React.FC = () => {
  const { data, error, isLoading } = useGetGraphQLPostsQuery();
  const [addPost] = useAddGraphQLPostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h2>GraphQL Posts</h2>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => addPost({ title: 'New Post', body: 'This is a new post' })}>
        Add Post
      </button>
    </div>
  );
};

export default GraphQLPosts;
