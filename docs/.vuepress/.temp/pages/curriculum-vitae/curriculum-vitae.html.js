import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/curriculum-vitae/curriculum-vitae.html.vue"
const data = JSON.parse("{\"path\":\"/curriculum-vitae/curriculum-vitae.html\",\"title\":\"Hankun Xu\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Scholarship\",\"slug\":\"scholarship\",\"link\":\"#scholarship\",\"children\":[]},{\"level\":2,\"title\":\"Subject competition\",\"slug\":\"subject-competition\",\"link\":\"#subject-competition\",\"children\":[]},{\"level\":2,\"title\":\"Programming Language:\",\"slug\":\"programming-language\",\"link\":\"#programming-language\",\"children\":[]},{\"level\":2,\"title\":\"Software:\",\"slug\":\"software\",\"link\":\"#software\",\"children\":[]},{\"level\":2,\"title\":\"Language:\",\"slug\":\"language\",\"link\":\"#language\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"curriculum-vitae/curriculum-vitae.md\"}")
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
