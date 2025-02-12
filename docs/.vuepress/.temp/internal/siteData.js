export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Hankun Xu\",\"description\":\"Hankun Xu's resume\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"徐瀚鲲\",\"description\":\"徐瀚鲲的简历\"},\"/jp/\":{\"lang\":\"ja-JP\",\"title\":\"徐瀚鲲\",\"description\":\"徐瀚鲲の履歴書\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
