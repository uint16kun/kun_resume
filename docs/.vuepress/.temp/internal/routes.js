export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/curriculum-vitae/", { loader: () => import(/* webpackChunkName: "curriculum-vitae_index.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/curriculum-vitae/index.html.js"), meta: {"title":""} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"首页"} }],
  ["/zh/curriculum-vitae/", { loader: () => import(/* webpackChunkName: "zh_curriculum-vitae_index.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/curriculum-vitae/index.html.js"), meta: {"title":""} }],
  ["/zh/my-projects/Brushless%20motor%20drive%20circuit%20and%20FOC%20control%20algorithm%20design.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Brushless motor drive circuit and FOC control algorithm design.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Brushless motor drive circuit and FOC control algorithm design.html.js"), meta: {"title":"无刷电机驱动电路及FOC控制算法设计"} }],
  ["/zh/my-projects/Car%20following%20driving%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Car following driving system.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Car following driving system.html.js"), meta: {"title":"小车跟随行驶系统"} }],
  ["/zh/my-projects/Moving%20target%20control%20and%20automatic%20tracking%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Moving target control and automatic tracking system.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Moving target control and automatic tracking system.html.js"), meta: {"title":"运动目标控制与自动追踪系统"} }],
  ["/zh/my-projects/Non-contact%20object%20size%20and%20shape%20measurement.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Non-contact object size and shape measurement.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Non-contact object size and shape measurement.html.js"), meta: {"title":"非接触物体尺寸形态测量"} }],
  ["/zh/my-projects/Plant%20growth%20monitoring%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Plant growth monitoring system.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Plant growth monitoring system.html.js"), meta: {"title":"植物生长监测系统"} }],
  ["/zh/my-projects/", { loader: () => import(/* webpackChunkName: "zh_my-projects_index.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/index.html.js"), meta: {"title":"项目简介"} }],
  ["/zh/my-projects/Rolling%20ball%20control%20system.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Rolling ball control system.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Rolling ball control system.html.js"), meta: {"title":"滚球控制系统"} }],
  ["/zh/my-projects/Smart%20medicine%20delivery%20car.html", { loader: () => import(/* webpackChunkName: "zh_my-projects_Smart medicine delivery car.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/zh/my-projects/Smart medicine delivery car.html.js"), meta: {"title":"智能送药小车"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/study abroad Japan/kun_resume/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
