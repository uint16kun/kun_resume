import axios from 'axios';
import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to, from, next) => {
      // 在路由变化时发送 POST 请求
      console.log('to:', to);
      const logData = {
        page: to.fullPath,
        timestamp: new Date().toISOString()
      };

      axios.post('http://127.0.0.1:5000/api/log', logData)
        .then(response => {
          console.log('路径记录成功:', response.data);
        })
        .catch(error => {
          console.error('记录路径时出错:', error);
        });

      // 继续导航
      next();
    });
  },
  setup() {},
  rootComponents: [],
});