import comp from "/Users/hz/Desktop/project/testDemo/docs/.vuepress/.temp/pages/vue copy/vue-first.html.vue"
const data = JSON.parse("{\"path\":\"/vue%20copy/vue-first.html\",\"title\":\"Vue-First\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"vue copy/vue-first.md\"}")
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
