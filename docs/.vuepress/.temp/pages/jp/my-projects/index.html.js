import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/jp/my-projects/\",\"title\":\"プロジェクト紹介\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"jp/my-projects/README.md\",\"excerpt\":\"\\n<hr>\\n<blockquote>\\n<p><a href=\\\"/jp/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html\\\" target=\\\"_blank\\\">運動目標制御と自動追跡システム</a></p>\\n<ul>\\n<li>NVIDIA Jetsonプラットフォーム、OpenCVコンピュータビジョンライブラリ、およびブラシレスモータを使用して構築された2次元プラットフォームで、運動目標のリアルタイム検出、追跡、制御を実現します。</li>\\n</ul>\\n</blockquote>\\n<hr>\"}")
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
