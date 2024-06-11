import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

const websocketBaseQuery: BaseQueryFn = ({ query }) => {
  let socket: WebSocket;

  return new Promise((resolve, reject) => {
    socket = new WebSocket('wss://echo.websocket.org');

    socket.onopen = () => {
        console.log('WebSocket connection is live');
      socket.send(JSON.stringify(query));
    };

    socket.onmessage = ({data}) => {
     
      resolve({ data });
    };

    socket.onerror = (event) => {
      reject({ error: event });
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  });
};

export default websocketBaseQuery;