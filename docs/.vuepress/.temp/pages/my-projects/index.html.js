import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/my-projects/\",\"title\":\"Project Overview\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721203226000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":4}]},\"filePathRelative\":\"my-projects/README.md\",\"excerpt\":\"\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html\\\" target=\\\"_blank\\\">Moving Target Control and Automatic Tracking System</a></p>\\n<ul>\\n<li>A two-dimensional platform built using NVIDIA Jetson platform, OpenCV computer vision library, and brushless motors to achieve real-time detection, tracking, and control of moving targets.</li>\\n</ul>\\n</blockquote>\"}")
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
