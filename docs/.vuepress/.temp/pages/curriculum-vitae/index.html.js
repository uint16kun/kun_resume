import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/curriculum-vitae/index.html.vue"
const data = JSON.parse("{\"path\":\"/curriculum-vitae/\",\"title\":\"Hankun Xu\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Scholarship\",\"slug\":\"scholarship\",\"link\":\"#scholarship\",\"children\":[]},{\"level\":2,\"title\":\"Subject competition\",\"slug\":\"subject-competition\",\"link\":\"#subject-competition\",\"children\":[]},{\"level\":2,\"title\":\"Programming Language:\",\"slug\":\"programming-language\",\"link\":\"#programming-language\",\"children\":[]},{\"level\":2,\"title\":\"Software:\",\"slug\":\"software\",\"link\":\"#software\",\"children\":[]},{\"level\":2,\"title\":\"Language:\",\"slug\":\"language\",\"link\":\"#language\",\"children\":[]}],\"git\":{\"updatedTime\":1721905807000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":5},{\"name\":\"no\",\"email\":\"no@no.com\",\"commits\":3}]},\"filePathRelative\":\"curriculum-vitae/README.md\",\"excerpt\":\"\\n\\n<h1>Education</h1>\\n<hr>\\n<div><span><b>Sixian Mlddie School</b>，Zhengzhou，China</span><span style=\\\"float:right\\\"><b>2015.9 - 2018.6</b></span></div> \\n<div><span><b>Zhengzhou Experimental High School</b>，Zhengzhou，China</span><span style=\\\"float:right\\\"><b>2018.9 - 2021.6</b></span></div> \\n<div><span><b>Huzhou University</b>，Huzhou，China</span><span style=\\\"float:right\\\"><b>2021.9 - 2025.6</b></span></div>\"}")
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
