const setTitle = (pageName?: string) => {
  return pageName
    ? `${pageName} | Oranje`
    : 'Oranje'
}

const demoRoutes = [
  {
    path: '/',
    redirect: { name: 'demos.agency.digital' },
    name: 'index'
  },

  {
    path: '/',
    name: 'demos.agency.digital',
    meta: {
      title: setTitle('Digital Agency')
    },
    component: () => import('@/views/demos/DigitalAgency/index.vue')
  },
  
]

const pagesRoutes = [
  {
       path: '/about-us',
       name: 'about-us',
       meta: {
       title: setTitle('About Us')
       },
       component: () => import('@/views/pages/about/About/index.vue')
     },
  {
    path: '/contact/v1',
    name: 'contact.v1',
    meta: {
      title: setTitle('ContactV1')
    },
    component: () => import('@/views/pages/contact/ContactV1/index.vue')
  },
  {
    path: '/contact/v2',
    name: 'contact.v2',
    meta: {
      title: setTitle('ContactV2')
    },
    component: () => import('@/views/pages/contact/ContactV2/index.vue')
  }
]


const portfolioRoutes = [

  {
    path: '/portfolio/fine-fragrance',
    name: 'portfolio.fine-fragrance',
    meta: {
      title: setTitle('Fine Fragrance')
    },
    component: () => import('@/views/portfolio/FineFragrance/index.vue')
  },
  {
    path: '/portfolio/personal-care',
    name: 'portfolio.personal-care',
    meta: {
      title: setTitle('Personal Care')
    },
    component: () => import('@/views/portfolio/PersonalCare/index.vue')
  },
  {
    path: '/portfolio/air-care',
    name: 'portfolio.air-care',
    meta: {
      title: setTitle('Air Care')
    },
    component: () => import('@/views/portfolio/AirCare/index.vue')
  },
  {
    path: '/portfolio/home-care',
    name: 'portfolio.home-care',
    meta: {
      title: setTitle('Home Care')
    },
    component: () => import('@/views/portfolio/HomeCare/index.vue')
  }
]


export const allRoutes = [
  ...demoRoutes,
  ...pagesRoutes,
  ...portfolioRoutes,

]
