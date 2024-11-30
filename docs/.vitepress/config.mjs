import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rhyme",
  description: "An Expressive Data-Centric Query Language",
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/150201258?s=400&u=c165a8a5fc98d1ddc149652fcdb818e4222f3094&v=4",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/overview' },
        ],
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rhyme-lang' }
    ]
  }
})
