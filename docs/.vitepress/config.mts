import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/world.svg" }]],
  title: "Aurora Archives ",
  description: "My Knowledge collection",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/互联网.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {text:'back-end',link:'/后端/java'},
      {text:'front-end',link:'/front-end/react'}
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     collapsed: true,
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
   
    aside: "left", // 设置右侧侧边栏在左侧显示
    
    search: {
      provider: 'local',
      options:{
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search',
          },
          modal: {
            noResultsText: 'No results',
            resetButtonTitle: 'Reset',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
