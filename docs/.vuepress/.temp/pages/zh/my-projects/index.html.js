import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/my-projects/\",\"title\":\"项目简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720618698000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":3},{\"name\":\"no\",\"email\":\"no@no.com\",\"commits\":1}]},\"filePathRelative\":\"zh/my-projects/README.md\",\"excerpt\":\"\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/zh/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html\\\" target=\\\"_blank\\\">运动目标控制与自动追踪系统</a></p>\\n<ul>\\n<li>设计制作一个运动目标控制与自动追踪系统，系统包括模拟目标运动的红色光斑位置控制系统和指示自动追踪的绿色光斑位置控制系统，通过摄像头和二维云台实现精确控制。</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/zh/my-projects/High-throughput%20phenotyping%20monitoring%20system%20for%20potted%20plants.html\\\" target=\\\"_blank\\\">盆栽植物高通量表型监测系统</a></p>\\n<ul>\\n<li>设计制作一个植物生长监测系统，对土壤环境进行监测，使用单点激光对植物进行3D建模并且在云端显示。</li>\\n</ul>\\n</blockquote>\"}")
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
