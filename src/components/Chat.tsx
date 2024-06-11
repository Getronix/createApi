import React, { useEffect } from 'react';
import { useGetMessagesQuery, useSendMessageMutation } from '../services/websocketApi';

const Chat: React.FC = () => {
  const { data, error, isLoading } = useGetMessagesQuery();
  const [sendMessage] = useSendMessageMutation();

  const handleSendMessage = () => {
    sendMessage( 'Hello, world!' );
  };

  useEffect(() => {
    if (error) console.error('WebSocket error:', error);
  }, [error]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h2>Latest Chat Message</h2>
      <div>{data && data}</div>
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default Chat;
