export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"repo\":\"https://github.com/uint16-kun/\",\"locales\":{\"/\":{\"editLink\":false,\"navbar\":[\"/\",{\"text\":\"My Projects\",\"link\":\"/my-projects/\"}],\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\"},\"/zh/\":{\"editLink\":false,\"navbar\":[\"/zh/\",{\"text\":\"我的项目\",\"link\":\"/zh/my-projects/\"}],\"sidebar\":{\"/zh/my-projects/\":[{\"text\":\"我的项目\",\"children\":[\"\",\"Moving target control and automatic tracking system\",\"Plant growth monitoring system\",\"Brushless motor drive circuit and FOC control algorithm design\",\"Smart medicine delivery vehicle\",\"Rolling ball control system\",\"Car following driving system\",\"Non-contact object size and shape measurement\"]}]},\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"语言\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
