export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/golang/golang-first.html", { loader: () => import(/* webpackChunkName: "golang_golang-first.html" */"/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/golang/golang-first.html.js"), meta: {"title":"Golang-First"} }],
  ["/react/react-first.html", { loader: () => import(/* webpackChunkName: "react_react-first.html" */"/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/react/react-first.html.js"), meta: {"title":"React-First"} }],
  ["/vue/vue-first.html", { loader: () => import(/* webpackChunkName: "vue_vue-first.html" */"/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/vue/vue-first.html.js"), meta: {"title":"Vue-First"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
