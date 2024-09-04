export default {
  titleTemplate: 'Центр науки',
  title: 'Центр науки',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'НАУКА, ВЕДУЩАЯ К ПРОГРЕССУ'
    },

    {
      itemprop: 'og:image:width',
      content: `1350`
    },
    {
      itemprop: 'og:image:height',
      content: `1000`
    },
    { name: 'theme-color', content: '#16ab65' },
    { name: 'msapplication-navbutton-color', content: '#16ab65' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#16ab65' },
    { name: 'msapplication-TileColor', content: '#da532c' },
    {
      name: 'application-name',
      content: 'Центер науки'
    },
    {
      name: 'msapplication-tooltip',
      content: 'Центер науки'
    },
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Центер науки'
    },
    { name: 'apple-mobile-web-app-capable', content: 'yes' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: `${process.env.SITE_URL}/favicon.ico`
    },

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${process.env.SITE_URL}/favicons/favicon-32x32.png`
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${process.env.SITE_URL}/favicons/favicon-16x16.png`
    },
    {
      rel: 'manifest',
      href: `${process.env.SITE_URL}/favicons/site.webmanifest`
    },
    {
      rel: 'mask-icon',
      type: 'image/png',
      color: '#5bbad5',
      href: `${process.env.SITE_URL}/favicons/safari-pinned-tab.svg`
    }
  ]
}
