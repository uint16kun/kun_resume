import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import mathjax3 from 'markdown-it-mathjax3'
export default defineUserConfig({
  enhanceAppFiles: ['./enhanceApp.js'],
  extendsMarkdown: md => {
    md.use(mathjax3)
    md.linkify.set({ fuzzyEmail: false })
  },

  // base: '/kun_resume/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'Hankun Xu',
      description: 'Hankun Xu\'s resume',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '徐瀚鲲',
      description: '徐瀚鲲的简历',
    },
    '/jp/': {
      lang: 'ja-JP',
      title: '徐瀚鲲',
      description: '徐瀚鲲の履歴書',
    }
  },

  theme: defaultTheme({
    logo: '/logo.jpg',
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
          },
          {
            text: 'transcript',
            link: '/transcript/',
          }],
        sidebar: {
          '/my-projects/': [
            {
              text: 'My Projects',
              link: '/my-projects/',
              children: [
                'Moving target control and automatic tracking system',
                'High-throughput phenotype monitoring system for potted plants',
                // 'Smart medicine delivery car',
                // 'Rolling ball control system',
                'Car following driving system',
                'Non-contact object size and shape measurement',
                'Brushless motor drive circuit and FOC control algorithm design'
              ]
            },
          ],
          '/curriculum-vitae/': [],
          '/transcript/': [],
        },
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
          },
          {
            text: '成绩单',
            link: '/zh/transcript/',
          }],
        sidebar: {
          '/zh/my-projects/': [
            {
              text: '我的项目',
              link: '/zh/my-projects/',
              children: [
                'Moving target control and automatic tracking system',
                'High-throughput phenotype monitoring system for potted plants',
                // 'Smart medicine delivery car',
                // 'Rolling ball control system',
                'Car following driving system',
                'Non-contact object size and shape measurement',
                'Brushless motor drive circuit and FOC control algorithm design'
              ]
            },
          ],
          '/zh/curriculum-vitae/': [],
          '/zh/transcript/': [],
        },
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
      },
      '/jp/': {
        editLink: false,
        navbar: ['/jp/',
          {
            text: '私のプロジェクト',
            link: '/jp/my-projects/',
          },
          {
            text: '履歴書',
            link: '/jp/curriculum-vitae/',
          },
          {
            text: '成績表',
            link: '/jp/transcript/',
          }],
        sidebar: {
          '/jp/my-projects/': [
            {
              text: '私のプロジェクト',
              link: '/jp/my-projects/',
              children: [
                'Moving target control and automatic tracking system',
                'High-throughput phenotype monitoring system for potted plants',
                // 'Smart medicine delivery car',
                // 'Rolling ball control system',
                'Car following driving system',
                'Non-contact object size and shape measurement',
                'Brushless motor drive circuit and FOC control algorithm design'
              ]
            },
          ],
          '/jp/curriculum-vitae/': [],
          '/jp/transcript/': [],
        },
        selectLanguageName: '日本語',
        selectLanguageText: '言語',
      }
    },
  }),

  plugins: [
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    searchProPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
        '/jp/': {
          placeholder: '検索',
        }
      },
    },),
  ],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3"],
  },
  bundler: viteBundler(),
})
