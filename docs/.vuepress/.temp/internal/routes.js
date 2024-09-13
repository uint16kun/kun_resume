export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/info/", { loader: () => import(/* webpackChunkName: "info_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/info/index.html.js"), meta: {"title":"信息"} }],
  ["/curriculum-vitae/", { loader: () => import(/* webpackChunkName: "curriculum-vitae_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/curriculum-vitae/index.html.js"), meta: {"title":"Hankun Xu"} }],
  ["/jp/", { loader: () => import(/* webpackChunkName: "jp_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/index.html.js"), meta: {"title":"ホーム"} }],
  ["/my-projects/Brushless%20motor%20drive%20circuit%20and%20FOC%20control%20algorithm%20design.html", { loader: () => import(/* webpackChunkName: "my-projects_Brushless motor drive circuit and FOC control algorithm design.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Brushless motor drive circuit and FOC control algorithm design.html.js"), meta: {"title":"Brushless Motor Drive Circuit and FOC Control Algorithm Design"} }],
  ["/my-projects/Car%20following%20driving%20system.html", { loader: () => import(/* webpackChunkName: "my-projects_Car following driving system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Car following driving system.html.js"), meta: {"title":"Car Following Driving System"} }],
  ["/my-projects/High-throughput%20phenotype%20monitoring%20system%20for%20potted%20plants.html", { loader: () => import(/* webpackChunkName: "my-projects_High-throughput phenotype monitoring system for potted plants.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/High-throughput phenotype monitoring system for potted plants.html.js"), meta: {"title":"High-Throughput Phenotyping Monitoring System for Potted Plants"} }],
  ["/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html", { loader: () => import(/* webpackChunkName: "my-projects_Moving target control and automatic tracking system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Moving target control and automatic tracking system.html.js"), meta: {"title":"Moving Target Control and Automatic Tracking System"} }],
  ["/my-projects/Non-contact%20object%20size%20and%20shape%20measurement.html", { loader: () => import(/* webpackChunkName: "my-projects_Non-contact object size and shape measurement.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Non-contact object size and shape measurement.html.js"), meta: {"title":"Non-Contact Object Size and Shape Measurement"} }],
  ["/my-projects/", { loader: () => import(/* webpackChunkName: "my-projects_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/index.html.js"), meta: {"title":"Project Overview"} }],
  ["/my-projects/Rolling%20ball%20control%20system.html", { loader: () => import(/* webpackChunkName: "my-projects_Rolling ball control system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Rolling ball control system.html.js"), meta: {"title":"滚球控制系统"} }],
  ["/my-projects/Smart%20medicine%20delivery%20car.html", { loader: () => import(/* webpackChunkName: "my-projects_Smart medicine delivery car.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/my-projects/Smart medicine delivery car.html.js"), meta: {"title":"智能送药小车"} }],
  ["/transcript/", { loader: () => import(/* webpackChunkName: "transcript_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/transcript/index.html.js"), meta: {"title":""} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"首页"} }],
  ["/jp/curriculum-vitae/", { loader: () => import(/* webpackChunkName: "jp_curriculum-vitae_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/curriculum-vitae/index.html.js"), meta: {"title":"徐瀚鲲"} }],
  ["/jp/my-projects/Brushless%20motor%20drive%20circuit%20and%20FOC%20control%20algorithm%20design.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Brushless motor drive circuit and FOC control algorithm design.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Brushless motor drive circuit and FOC control algorithm design.html.js"), meta: {"title":"ブラシレスモーター駆動回路及びFOC制御アルゴリズム設計"} }],
  ["/jp/my-projects/Car%20following%20driving%20system.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Car following driving system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Car following driving system.html.js"), meta: {"title":"車両追従走行システム"} }],
  ["/jp/my-projects/High-throughput%20phenotype%20monitoring%20system%20for%20potted%20plants.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_High-throughput phenotype monitoring system for potted plants.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/High-throughput phenotype monitoring system for potted plants.html.js"), meta: {"title":"盆栽植物高通量表型監視システム"} }],
  ["/jp/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Moving target control and automatic tracking system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Moving target control and automatic tracking system.html.js"), meta: {"title":"運動目標制御と自動追跡システム"} }],
  ["/jp/my-projects/Non-contact%20object%20size%20and%20shape%20measurement.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Non-contact object size and shape measurement.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Non-contact object size and shape measurement.html.js"), meta: {"title":"非接触物体の寸法と形状の測定"} }],
  ["/jp/my-projects/", { loader: () => import(/* webpackChunkName: "jp_my-projects_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/index.html.js"), meta: {"title":"プロジェクト紹介"} }],
  ["/jp/my-projects/Rolling%20ball%20control%20system.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Rolling ball control system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Rolling ball control system.html.js"), meta: {"title":"滚球控制系统"} }],
  ["/jp/my-projects/Smart%20medicine%20delivery%20car.html", { loader: () => import(/* webpackChunkName: "jp_my-projects_Smart medicine delivery car.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/my-projects/Smart medicine delivery car.html.js"), meta: {"title":"智能送药小车"} }],
  ["/jp/transcript/", { loader: () => import(/* webpackChunkName: "jp_transcript_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/jp/transcript/index.html.js"), meta: {"title":""} }],
  ["/zh/curriculum-vitae/", { loader: () => import(/* webpackChunkName: "zh_curriculum-vitae_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/curriculum-vitae/index.html.js"), meta: {"title":"徐瀚鲲"} }],
  ["/zh/my-projects/Brushless%20motor%20drive%20circuit%20and%20FOC%20control%20algorithm%20design.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Brushless motor drive circuit and FOC control algorithm design.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Brushless motor drive circuit and FOC control algorithm design.html.js"), meta: {"title":"无刷电机驱动电路及FOC控制算法设计"} }],
  ["/zh/my-projects/Car%20following%20driving%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Car following driving system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Car following driving system.html.js"), meta: {"title":"小车跟随行驶系统"} }],
  ["/zh/my-projects/High-throughput%20phenotype%20monitoring%20system%20for%20potted%20plants.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_High-throughput phenotype monitoring system for potted plants.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/High-throughput phenotype monitoring system for potted plants.html.js"), meta: {"title":"盆栽植物高通量表型监测系统"} }],
  ["/zh/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Moving target control and automatic tracking system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Moving target control and automatic tracking system.html.js"), meta: {"title":"运动目标控制与自动追踪系统"} }],
  ["/zh/my-projects/Non-contact%20object%20size%20and%20shape%20measurement.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Non-contact object size and shape measurement.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Non-contact object size and shape measurement.html.js"), meta: {"title":"非接触物体尺寸形态测量"} }],
  ["/zh/my-projects/", { loader: () => import(/* webpackChunkName: "zh_my-projects_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/index.html.js"), meta: {"title":"项目简介"} }],
  ["/zh/my-projects/Rolling%20ball%20control%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Rolling ball control system.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Rolling ball control system.html.js"), meta: {"title":"滚球控制系统"} }],
  ["/zh/my-projects/Smart%20medicine%20delivery%20car.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Smart medicine delivery car.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Smart medicine delivery car.html.js"), meta: {"title":"智能送药小车"} }],
  ["/zh/transcript/", { loader: () => import(/* webpackChunkName: "zh_transcript_index.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/zh/transcript/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/Vscode/vue/kun_resume/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
