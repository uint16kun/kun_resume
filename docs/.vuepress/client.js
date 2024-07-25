import { defineClientConfig } from 'vuepress/client';
import { io } from 'socket.io-client';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const socket = io('ws://8.149.241.87:5000');

    socket.on('connect', () => {
      console.log('Socket.IO connection established');
    });

    socket.on('log_response', (data) => {
      console.log('Received log response from server:', data);
    });

    socket.on('disconnect', () => {
      console.log('Socket.IO connection disconnected');
    });

    socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error);
    });

    router.beforeEach((to, from, next) => {
      // 在路由变化时发送 Socket.IO 消息
      const logData = {
        page: to.fullPath,
        timestamp: new Date().toISOString()
      };

      socket.emit('log_event', logData);

      // 继续导航
      next();
    });
  },
  setup() {},
  rootComponents: [],
});