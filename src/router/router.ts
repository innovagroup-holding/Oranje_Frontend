const setTitle = (pageName?: string) => {
  return pageName
    ? `${pageName} | Oranje`
    : 'Oranje'
}

const demoRoutes = [
  {
    path: '/',
    redirect: { name: 'home' },
    name: 'index'
  },

  {
    path: '/',
    name: 'home',
    meta: {
      title: setTitle('Home')
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
    path: '/contact',
    name: 'contact',
    meta: {
      title: setTitle('Contact')
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
    path: '/fine-fragrance',
    name: 'fine-fragrance',
    meta: {
      title: setTitle('Fine Fragrance')
    },
    component: () => import('@/views/portfolio/FineFragrance/index.vue')
  },
  {
    path: '/personal-care',
    name: 'personal-care',
    meta: {
      title: setTitle('Personal Care')
    },
    component: () => import('@/views/portfolio/PersonalCare/index.vue')
  },
  {
    path: '/air-care',
    name: 'air-care',
    meta: {
      title: setTitle('Air Care')
    },
    component: () => import('@/views/portfolio/AirCare/index.vue')
  },
  {
    path: '/home-care',
    name: 'home-care',
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
