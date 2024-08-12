import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: 'Vue', link: '/vue/vue-first.html' },
      { text: 'React', link: '/react/react-first.html' },
      { text: 'Golang', link: '/golang/golang-first.html' },
      { text: '百度', link: 'https://baidu.com' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
  }),
  title: 'Blog',
  description: '我的个人网站',
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/img/惠租.png' }],
    ['link', { rel: 'manifest', href: '/img/惠租.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/惠租.png' }],
  ],
  serviceWorker: true, // 是否开启 PWA
})