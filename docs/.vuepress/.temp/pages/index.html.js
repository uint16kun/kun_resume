import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"My projects\",\"link\":\"/my-projects/\",\"type\":\"primary\"},{\"text\":\"Curriculum Vitae\",\"link\":\"/curriculum-vitae/\",\"type\":\"secondary\"}],\"features\":[{\"title\":null,\"details\":null},{\"title\":null,\"details\":null},{\"title\":null,\"details\":null},{\"title\":null,\"details\":null},{\"title\":null,\"details\":null},{\"title\":null,\"details\":null}]},\"headers\":[],\"git\":{\"updatedTime\":1720611633000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":3}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
