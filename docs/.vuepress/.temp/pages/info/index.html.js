import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/info/index.html.vue"
const data = JSON.parse("{\"path\":\"/info/\",\"title\":\"信息\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"信息\"},\"headers\":[{\"level\":2,\"title\":\"横滨国立大学\",\"slug\":\"横滨国立大学\",\"link\":\"#横滨国立大学\",\"children\":[]},{\"level\":2,\"title\":\"横滨市立大学\",\"slug\":\"横滨市立大学\",\"link\":\"#横滨市立大学\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"info/README.md\"}")
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
