import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/my-projects/\",\"title\":\"项目简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目简介\"},\"headers\":[],\"git\":{\"updatedTime\":1720522911000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":1}]},\"filePathRelative\":\"zh/my-projects/README.md\"}")
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
