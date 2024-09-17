import type { MegaMenuType, MenuItemType, ResourceMenuType } from '@/helpers/menu'
import {
  BIconBasket,
  BIconBell,
  BIconBlockquoteRight,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCalendar3Week,
  BIconChatLeft,
  BIconEmojiSunglasses,
  BIconEnvelope,
  BIconFileEarmarkText,
  BIconFileText,
  BIconHeart,
  BIconLock,
  BIconMask,
  BIconPerson,
  BIconQuestionCircle,
  BIconRocket,
  BIconShieldLock,
  BIconStar,
  BIconStickies,
  BIconTrash,
  BIconWallet
} from 'bootstrap-icons-vue'

import slackImg from '@/assets/images/elements/slack.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'
import mailchimpImg from '@/assets/images/elements/mailchimp.svg'
import redditImg from '@/assets/images/elements/reddit.svg'
import blogImg2 from '@/assets/images/blog/4by4/02.jpg'
import blogImg1 from '@/assets/images/blog/4by4/01.jpg'
import blogImg3 from '@/assets/images/blog/4by4/03.jpg'
import blog2 from '@/assets/images/blog/02.jpg'

export const ACCOUNT_VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'account-profile',
    label: 'My Profile',
    route: { name: 'account.profile' },
    parentKey: 'pages-account',
    icon: BIconPerson
  },
  {
    key: 'account-security',
    label: 'Security',
    route: { name: 'account.security' },
    parentKey: 'pages-account',
    icon: BIconShieldLock
  },
  {
    key: 'account-notifications',
    label: 'Notifications',
    route: { name: 'account.notifications' },
    parentKey: 'pages-account',
    icon: BIconBell
  },
  {
    key: 'account-projects',
    label: 'Projects',
    route: { name: 'account.projects' },
    parentKey: 'pages-account',
    icon: BIconBriefcase
  },
  {
    key: 'account-payment-details',
    label: 'Payment Details',
    route: { name: 'account.payment-details' },
    parentKey: 'pages-account',
    icon: BIconWallet
  },
  {
    key: 'account-order-history',
    label: 'Order History',
    route: { name: 'account.order-history' },
    parentKey: 'pages-account',
    icon: BIconBasket
  },
  {
    key: 'account-wishlist',
    label: 'Wishlist',
    route: { name: 'account.wishlist' },
    parentKey: 'pages-account',
    icon: BIconHeart
  },
  {
    key: 'account-delete-profile',
    label: 'Delete Profile',
    route: { name: 'account.delete-profile' },
    parentKey: 'pages-account',
    icon: BIconTrash
  }
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'Demos',
    // children: [
    //   {
    //     key: 'demo-classic-default',
    //     label: 'Classic Default',
    //     route: { name: 'demos.classic' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-creative-agency',
    //     label: 'Creative Agency',
    //     route: { name: 'demos.agency.creative' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-digital-agency',
    //     label: 'Digital Agency',
    //     route: { name: 'demos.agency.digital' },
    //     parentKey: 'demos',
    //     badge: 'New'
    //   },
    //   {
    //     key: 'demo-design-agency',
    //     label: 'Design Agency',
    //     route: { name: 'demos.agency.design' },
    //     parentKey: 'demos',
    //     badge: 'New'
    //   },
    //   {
    //     key: 'demo-seo-agency',
    //     label: 'SEO Agency',
    //     route: { name: 'demos.agency.seo' },
    //     parentKey: 'demos',
    //     badge: 'New'
    //   },
    //   {
    //     key: 'demo-product-landing',
    //     label: 'Product Landing',
    //     route: { name: 'demos.product-landing' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-mobile-app',
    //     label: 'Mobile App Showcase',
    //     route: { name: 'demos.mobile-app' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-saas-v1',
    //     label: 'SaaS v.1',
    //     route: { name: 'saas.v1' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-saas-v2',
    //     label: 'SaaS v.2',
    //     route: { name: 'saas.v2' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-saas-v3',
    //     label: 'SaaS v.3',
    //     route: { name: 'saas.v3' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-saas-v4',
    //     label: 'SaaS v.4',
    //     route: { name: 'saas.v4' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-saas-v5',
    //     label: 'SaaS v.5',
    //     route: { name: 'saas.v5' },
    //     parentKey: 'demos'
    //   },
    //   {
    //     key: 'demo-finance-consulting',
    //     label: 'Finance Consulting',
    //     route: { name: 'demos.finance-consulting' },
    //     parentKey: 'demos',
    //     badge: 'New'
    //   },
    //   {
    //     key: 'demo-shop-index',
    //     label: 'Index Shop',
    //     route: { name: 'shop.index' },
    //     parentKey: 'demos'
    //   }
    // ]
  },
  {
    key: 'pages',
    label: 'Pages',
  
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    children: [
      {
        key: 'portfolio-fine-fragrance',
        label: 'Fine Fragrance',
        route: { name: 'portfolio.fine-fragrance' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-personal-care',
        label: 'Personal Care',
        route: { name: 'portfolio.personal-care' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-air-care',
        label: 'Air Care',
        route: { name: 'portfolio.air-care' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-home-care',
        label: 'Home Care',
        route: { name: 'portfolio.home-care' },
        parentKey: 'portfolio'
      },
     
     
     
    ]
  },
  {
    key: 'contact',
    label: 'contact',
    children: [
      {
        key: 'contact-1',
        label: 'Contact v.1',
        route: { name: 'contact.v1' },
        parentKey: 'contact'
      }
    ]
    },
    {
      key: 'about',
      label: 'about',
      children: [
        {
          key: 'about',
          label: 'About',
          route: { name: 'about-us' },
          parentKey: 'about'
        }
      ]
      }
]

export const MEGA_MENU_ITEMS: MegaMenuType = {
  usefulLinks: [
    'Market Research',
    'Advertising',
    'Consumer behavior',
    'Digital marketing',
    'Marketing ethics',
    'Social media marketing'
  ],
  company: [
    {
      icon: BIconBoxes,
      title: 'About us',
      description: 'Learn about our story, our mission statement and roadmap.'
    },
    {
      icon: BIconRocket,
      title: 'Career',
      badge: '3 Jobs',
      description: "We're always looking for talented people. Join our team!"
    },
    {
      icon: BIconEmojiSunglasses,
      title: 'Customer stories',
      description: 'Learn how our customer are making big changes to their tech stack'
    }
  ],
  integration: [
    {
      logo: slackImg,
      name: 'Slack'
    },
    {
      logo: webflowImg,
      name: 'Webflow'
    },
    {
      logo: mailchimpImg,
      name: 'Mailchimp'
    },
    {
      logo: redditImg,
      name: 'Reddit'
    }
  ],
  recentBlogs: [
    {
      image: blogImg2,
      title: '10 things you need to know about Mizzle',
      link: '/blog/single/v1'
    },
    {
      image: blogImg1,
      title: 'The Power of Gratitude: Cultivating Joy and Abundance',
      link: '/blog/single/v2'
    },
    {
      image: blogImg3,
      title: 'Effortless Web Development with Mizzle',
      link: '/blog/single/v1'
    }
  ]
}

export const RESOURCES_MENU_ITEMS: ResourceMenuType = {
  usefulLinks: [
    { icon: BIconFileText, name: 'Guides' },
    { icon: BIconChatLeft, name: 'Supports' },
    { icon: BIconCalendar3Week, name: 'Community & events' },
    { icon: BIconBlockquoteRight, name: 'Blogs' },
    { icon: BIconLock, name: 'Security' },
    { icon: BIconStar, name: 'Tutorials' },
    { icon: BIconQuestionCircle, name: 'Help center' },
    { icon: BIconEnvelope, name: 'Developer newsletter' }
  ],
  keyFeatures: [
    {
      title: 'Documentation',
      description: 'Using documentation you can easily develop projects',
      icon: BIconFileEarmarkText
    },
    {
      title: 'Snippets',
      description: 'Development guides for building projects with Mizzle',
      icon: BIconStickies
    },
    {
      title: 'Changelog',
      description: 'Recent feature release and announcement. See how changes are made.',
      icon: BIconBullseye
    },
    {
      title: 'Playwright tips',
      description: 'Tips and In-depth guide for headless browser automation',
      icon: BIconMask
    }
  ],
  featureResource: {
    title: 'Featured title here',
    description: 'Departure defective arranging rapturous did believe him all had supported.',
    image: blog2
  }
}
