import React from 'react';
import { useGetPostsQuery, useAddPostMutation } from '../services/api';

const RestPosts: React.FC = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h2>REST Posts</h2>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => addPost({ title: 'New Post' })}>
        Add Post
      </button>
    </div>
  );
};

export default RestPosts;
