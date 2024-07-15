import comp from "G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/jp/index.html.vue"
const data = JSON.parse("{\"path\":\"/jp/\",\"title\":\"ホーム\",\"lang\":\"ja-JP\",\"frontmatter\":{\"home\":true,\"title\":\"ホーム\",\"heroImage\":\"/photo.png\",\"actions\":[{\"text\":\"私のプロジェクト\",\"link\":\"/ja/my-projects/\",\"type\":\"primary\"},{\"text\":\"履歴書\",\"link\":\"/ja/curriculum-vitae/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"学校\",\"details\":\"湖州師範学院\"},{\"title\":\"専攻\",\"details\":\"電子情報工学\"},{\"title\":\"研究分野\",\"details\":\"機械ビジョン、自動制御システム、組み込みシステム設計、デジタル/アナログ回路設計、フロントエンド/バックエンド開発、IoTシステム開発\"},{\"title\":\"奨学金\",\"details\":\"2021-2022年度校一等奨学金、2022-2023年度校特別奨学金\"},{\"title\":\"コンテスト\",\"details\":\"2022年度全国大学生電子設計コンテスト省三等賞、2023年度全国大学生電子設計コンテスト国家二等賞、2024年度全国大学生電子設計コンテスト科学技術最前線招待コンテスト省一等賞\"},{\"title\":\"成績点（5点満点）\",\"details\":\"平均成績点4.00、第一学期4.00、第二学期3.93、第三学期3.87、第四学期3.92、第五学期4.03、第六学期4.49\"}]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"jp/README.md\",\"excerpt\":\"\"}")
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
