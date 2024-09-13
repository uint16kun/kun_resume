import comp from "G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Car following driving system.html.vue"
const data = JSON.parse("{\"path\":\"/jp/my-projects/Car%20following%20driving%20system.html\",\"title\":\"車両追従走行システム\",\"lang\":\"ja-JP\",\"frontmatter\":{\"title\":\"車両追従走行システム\"},\"headers\":[{\"level\":2,\"title\":\"プロジェクト要件\",\"slug\":\"プロジェクト要件\",\"link\":\"#プロジェクト要件\",\"children\":[{\"level\":3,\"title\":\"タスク\",\"slug\":\"タスク\",\"link\":\"#タスク\",\"children\":[]},{\"level\":3,\"title\":\"要件\",\"slug\":\"要件\",\"link\":\"#要件\",\"children\":[]},{\"level\":3,\"title\":\"説明\",\"slug\":\"説明\",\"link\":\"#説明\",\"children\":[]}]},{\"level\":2,\"title\":\"実現案\",\"slug\":\"実現案\",\"link\":\"#実現案\",\"children\":[{\"level\":3,\"title\":\"要約\",\"slug\":\"要約\",\"link\":\"#要約\",\"children\":[]},{\"level\":3,\"title\":\"方案论证\",\"slug\":\"方案论证\",\"link\":\"#方案论证\",\"children\":[]},{\"level\":3,\"title\":\"理论分析与计算\",\"slug\":\"理论分析与计算\",\"link\":\"#理论分析与计算\",\"children\":[]},{\"level\":3,\"title\":\"电路与程序设计\",\"slug\":\"电路与程序设计\",\"link\":\"#电路与程序设计\",\"children\":[]},{\"level\":3,\"title\":\"测试方案与测试结果\",\"slug\":\"测试方案与测试结果\",\"link\":\"#测试方案与测试结果\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721633641000,\"contributors\":[{\"name\":\"uint16kun\",\"email\":\"uint16kun\",\"commits\":2},{\"name\":\"no\",\"email\":\"no@no.com\",\"commits\":1}]},\"filePathRelative\":\"jp/my-projects/Car following driving system.md\",\"excerpt\":\"<h2><strong>プロジェクト要件</strong></h2>\\n<h3><strong>タスク</strong></h3>\\n<p> TIのMCUを使用して、車両追従走行システムを設計する。このシステムは、1台のリーダー車と1台の追従車で構成され、車両にはトレース機能があり、速度は0.3～1m/sで調整可能で、指定された経路で走行操作を完了する必要がある。走行場所の経路は図1に示されている。経路のA点は、リーダー車の走行の開始点と終了点である。車両が1回の走行で終点に到達すると、リーダー車と追従車は音声で通知する。リーダー車と追従車は、ABFDEの角丸矩形（内側のサークルと呼ぶ）経路またはABCDEの角丸矩形（外側のサークルと呼ぶ）経路に沿って走行できる。内側のサークルのBFD区間で走行する際、車両はライトを点灯する。さらに、テスト中に経路のE点の直線領域に、テスト専門家が指定した位置に「停止指示」のマーカーを置くことができる（図1左側参照）。リーダー車はこの位置で停止し、5秒間待機してから再び走行を続ける。</p>\"}")
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
