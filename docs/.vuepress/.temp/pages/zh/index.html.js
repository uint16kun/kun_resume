import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/photo.png\",\"actions\":[{\"text\":\"我的项目\",\"link\":\"/zh/my-projects/\",\"type\":\"primary\"},{\"text\":\"简历\",\"link\":\"/zh/curriculum-vitae/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"学校\",\"details\":\"湖州师范学院\"},{\"title\":\"专业\",\"details\":\"电子信息工程\"},{\"title\":\"研究领域\",\"details\":\"机器视觉，自动控制系统，嵌入式系统设计，数字/模拟电路设计，前端/后端开发，物联网系统开发\"},{\"title\":\"奖学金\",\"details\":\"2021-2022 学年校一等奖学金，2022-2023 学年校特等奖学金\"},{\"title\":\"竞赛\",\"details\":\"2022 年全国大学生电子设计竞赛省三等奖，2023 年全国大学生电子设计竞赛国家二等奖，2024 年全国大学生电子设计竞赛科技前沿邀请赛省一等奖\"},{\"title\":\"绩点（5分制）\",\"details\":\"平均绩点4.00，第一学期4.00，第二学期3.93，第三学期3.87，第四学期3.92，第五学期4.03，第六学期4.49\"}]},\"headers\":[],\"git\":{\"updatedTime\":1721040109000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":6},{\"name\":\"no\",\"email\":\"no@no.com\",\"commits\":1}]},\"filePathRelative\":\"zh/README.md\",\"excerpt\":\"\"}")
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
