import axios from 'axios';
import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to, from, next) => {
      // 在路由变化时发送 POST 请求
      const logData = {
        page: to.fullPath,
        timestamp: new Date().toISOString()
      };

      axios.post('https://8.149.241.87:5000/api/resume/log', logData)
        .then(response => {
          // 请求成功时的处理逻辑
        })
        .catch(error => {
          // 请求失败时的处理逻辑
          // 这里可以选择不输出任何错误信息
        });

      // 继续导航
      next();
    });
  },
  setup() {},
  rootComponents: [],
});