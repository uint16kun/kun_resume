import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/my-projects/Car following driving system copy.html.vue"
const data = JSON.parse("{\"path\":\"/my-projects/Car%20following%20driving%20system%20copy.html\",\"title\":\"小车跟随行驶系统\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"小车跟随行驶系统\"},\"headers\":[{\"level\":2,\"title\":\"项目要求\",\"slug\":\"项目要求\",\"link\":\"#项目要求\",\"children\":[{\"level\":3,\"title\":\"任务\",\"slug\":\"任务\",\"link\":\"#任务\",\"children\":[]},{\"level\":3,\"title\":\"要求\",\"slug\":\"要求\",\"link\":\"#要求\",\"children\":[]},{\"level\":3,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]}]},{\"level\":2,\"title\":\"实现方案\",\"slug\":\"实现方案\",\"link\":\"#实现方案\",\"children\":[{\"level\":3,\"title\":\"摘要\",\"slug\":\"摘要\",\"link\":\"#摘要\",\"children\":[]},{\"level\":3,\"title\":\"方案论证\",\"slug\":\"方案论证\",\"link\":\"#方案论证\",\"children\":[]},{\"level\":3,\"title\":\"理论分析与计算\",\"slug\":\"理论分析与计算\",\"link\":\"#理论分析与计算\",\"children\":[]},{\"level\":3,\"title\":\"电路与程序设计\",\"slug\":\"电路与程序设计\",\"link\":\"#电路与程序设计\",\"children\":[]},{\"level\":3,\"title\":\"测试方案与测试结果\",\"slug\":\"测试方案与测试结果\",\"link\":\"#测试方案与测试结果\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"my-projects/Car following driving system copy.md\",\"excerpt\":\"<h2><strong>项目要求</strong></h2>\\n<h3><strong>任务</strong></h3>\\n<p> 设计一套小车跟随行驶系统，采用 TI 的 MCU，由一辆领头小车和一辆跟随\\n小车组成，要求小车具有循迹功能，且速度在 0.3 ~ 1m/s 可调，能在指定路径上\\n完成行驶操作，行驶场地的路径如图 1 所示。其中，路径上的 A 点为领头小车\\n每次行驶的起始点和终点。当小车完成一次行驶到达终点，领头小车和跟随小车\\n要发出声音提示。领头小车和跟随小车既可以沿着 ABFDE 圆角矩形（ 简称为\\n内圈 ）路径行驶，也可以沿着 ABCDE 的圆角矩形（ 简称为外圈 ）路径行驶。\\n当行驶在内圈 BFD 段时，小车要发出灯光指示。此外，在测试过程中，可以在\\n路径上 E 点所在边的直线区域，由测试专家指定位置放上“等停指示”标识（见图\\n1 左侧），指示领头小车在此处须停车，等待 5 秒后再继续行驶。</p>\"}")
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
