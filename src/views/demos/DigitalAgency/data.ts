

import blogImg1 from '@/assets/Fine Fragrance.jpg'
import blogImg2 from '@/assets/Personal Care.png'
import blogImg3 from '@/assets/Air Care.png'
import blogImg4 from '@/assets/home care.png'

import icon1 from '@/assets/icons/incense_3006063.png'
import icon2 from '@/assets/icons/gel_10786358.png'
import icon3 from '@/assets/icons/air-refreshener_2797076.png'
import icon4 from '@/assets/icons/greenhouse_5563132.png'



import avatar4 from '@/assets/Customer photos/Young woman.jpeg'
import avatar5 from '@/assets/Customer photos/young man.png'
import avatar6 from '@/assets/Customer photos/Young woman2.png'


import type {
  BlogType,
  TestimonialType
} from '@/types'



export const testimonials: TestimonialType[] = [
  {
  
    comment:
      'Our company has been sourcing essential oils in bulk for over a decade, and we’ve never encountered a supplier as reliable as Oranje Fragrance.Their oils are consistently high-quality, and they offer a fantastic range of fragrances that align perfectly with our personal care products. The purity of the oils and their commitment to sustainable sourcing have made them a vital part of our supply chain.',
    rating: 4.5,
    user: {
      firstName: 'Sarah L.,',
      role: 'Senior Product Development Manager.',
      avatar: avatar4
    }
  },
  {
    
    comment:
      'Finding a trustworthy supplier for essential oils in bulk was a challenge until we Oranje Fragrance. Their oils have consistently high potency and quality, which is crucial for our care line. Their customer service team is always available to provide advice and ensure timely delivery. Since partnering with Oranje Fragrance, our production process has become more efficient, and we’ve seen improved product performance.',
    rating: 4.5,
    user: {
      firstName: 'David R.,',
      role: 'Head of Procurement',
      avatar: avatar5
    }
  },
  {
   
    comment:
      'We specialize in luxury candles and air fresheners, and the fragrance oils from Oranje Fragrance have been a game-changer for us. The depth and complexity of their scents allow us to create signature products that stand out in a competitive market. The consistency and reliability of their oils give us confidence that every batch will meet our high standards. Our collaboration has been seamless, and we look forward to continuing our partnership',
    rating: 4.5,
    user: {
      firstName: 'Emma K.,',
      
      role: 'Product Director',
      avatar: avatar6
    }
  }
]

export const blogs: BlogType[] = [
  {
    title: 'categories.fineFragrance.title',
    category: 'categories.fineFragrance.category',
    icon:icon1,
    image: blogImg1,
    route: { name: 'portfolio.fine-fragrance' }
  },
  {
    title: 'categories.personalCare.title',
    category: 'categories.personalCare.category',
    icon:icon2,
    image: blogImg2,
    route: { name: 'portfolio.personal-care' }
  },
  {
    title: 'categories.airCare.title',
    category: 'categories.airCare.category',
    icon:icon3,
    // publishedAt: {
    //   date: 8,
    //   month: 'April',
    //   year: 2024
    // },
    // publishedBy: {
    //   avatar: avatar9,
    //   firstName: 'Allen',
    //   lastName: 'Smith'
    // },
    image: blogImg3,
    route: { name: 'portfolio.air-care' }
  },
  {
    title: 'categories.homeCare.title',
    category: 'categories.homeCare.category',
    icon:icon4,
    image: blogImg4,
    route: { name: 'portfolio.home-care' }
  }
]
