import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/my-projects/\",\"title\":\"项目简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721203226000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":6},{\"name\":\"no\",\"email\":\"no@no.com\",\"commits\":1}]},\"filePathRelative\":\"zh/my-projects/README.md\",\"excerpt\":\"\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/zh/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html\\\" target=\\\"_blank\\\">运动目标控制与自动追踪系统</a></p>\\n<ul>\\n<li>使用NVIDIA Jetson平台、OpenCV计算机视觉库以及无刷电机搭建的二维平台，实现对运动目标的实时检测、跟踪与控制。</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/zh/my-projects/High-throughput%20phenotype%20monitoring%20system%20for%20potted%20plants.html\\\" target=\\\"_blank\\\">盆栽植物高通量表型监测系统</a></p>\\n<ul>\\n<li>使用步进电机搭建的二维旋转平台，以及单点激光测距模块对植物进行3D建模，通过光谱分析植物生长状况。并将数据展示在使用Vue框架开发的网页上。</li>\\n</ul>\\n</blockquote>\"}")
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
