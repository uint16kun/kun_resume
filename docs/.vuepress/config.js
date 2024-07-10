import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  // base: '/kun_resume/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Xu HanKun',
      description: 'Xu HanKun 的简历',
    },
  },

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: 'https://github.com/uint16kun/',
    locales: {
      '/': {
        editLink: false,
        navbar: ['/',
          {
            text: 'My Projects',
            link: '/my-projects/',
          },
          {
            text: 'Curriculum Vitae',
            link: '/curriculum-vitae/',
          }],
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
      },
      '/zh/': {
        editLink: false,
        navbar: ['/zh/',
          {
            text: '我的项目',
            link: '/zh/my-projects/',
          },
          {
            text: '简历',
            link: '/zh/curriculum-vitae/',
          }],
        sidebar: {
          '/zh/my-projects/': [
            {
              text: '我的项目',
              children: ['',
                'Moving target control and automatic tracking system',
                'Plant growth monitoring system',
                'Smart medicine delivery car',
                'Brushless motor drive circuit and FOC control algorithm design',
                'Rolling ball control system',
                'Car following driving system',
                'Non-contact object size and shape measurement']
            },
          ],
        },
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
      },
    },
  }),
  plugins: [
    ["vuepress-plugin-tags"],
    ["img-lazy"],
    ["@vuepress/medium-zoom"],
    [
      "vuepress-plugin-code-copy", {
        successText: "代码已复制",
      },
    ],
    ["searchPlugin", {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }]
  ],
  bundler: viteBundler(),
})
