import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"我的项目\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"学校\",\"details\":\"湖州师范学院\"},{\"title\":\"专业\",\"details\":\"电子信息工程\"},{\"title\":\"研究领域\",\"details\":\"自动控制，图形处理\"},{\"title\":\"奖学金\",\"details\":\"2021-2022 学年校一等奖学金,2022-2023 学年校特等奖学金\"},{\"title\":\"竞赛\",\"details\":\"2022 年全国大学生电子设计竞赛省三等奖，2023 年全国大学生电子设计竞赛国家二等奖，2024 年全国大学生电子设计竞赛科技前沿邀请赛（已入围国赛）\"},{\"title\":\"绩点（5分制）\",\"details\":\"平均绩点3.99，第一学期4.00，第二学期3.93，第三学期3.87，第四学期3.92，第五学期4.03，第六学期4.48\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
