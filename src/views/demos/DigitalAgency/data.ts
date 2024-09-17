import serviceImg1 from '@/assets/images/services/4by3/01.jpg'
import serviceImg2 from '@/assets/images/services/4by3/02.jpg'
import serviceImg3 from '@/assets/images/services/4by3/03.jpg'
import serviceImg4 from '@/assets/images/services/4by3/04.jpg'
import serviceImg5 from '@/assets/images/services/4by3/05.jpg'
import serviceImg6 from '@/assets/images/services/4by3/06.jpg'

import blogImg1 from '@/assets/Fine Fragrance.jpg'
import blogImg2 from '@/assets/Personal Care.png'
import blogImg3 from '@/assets/Air Care.png'
import blogImg4 from '@/assets/home care.png'

import icon1 from '@/assets/icons/incense_3006063.png'
import icon2 from '@/assets/icons/gel_10786358.png'
import icon3 from '@/assets/icons/air-refreshener_2797076.png'
import icon4 from '@/assets/icons/greenhouse_5563132.png'

import project1 from '@/assets/images/portfolio/list/02.jpg'
import project2 from '@/assets/images/portfolio/list/03.jpg'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

import { BIconBullseye, BIconHeadset, BIconRocketTakeoff, BIconSearch } from 'bootstrap-icons-vue'
import type {
  BlogType,
  ProjectType,
  ServiceType,
  StatisticType,
  StepType,
  TestimonialType
} from '@/types'

export const services: ServiceType[] = [
  {
    title: 'Custom Software Development',
    description: 'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    route: { name: 'services.single' }
  },
  {
    title: 'Web Design and Development',
    description: 'From responsive websites to e-commerce platforms.',
    image: serviceImg2,
    route: { name: 'services.single' }
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    route: { name: 'services.single' }
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats with our cybersecurity solutions.',
    image: serviceImg4,
    route: { name: 'services.single' }
  },
  {
    title: 'IT Consulting and Support',
    description: 'Leverage our expertise to optimize your IT infrastructure and operations.',
    image: serviceImg5,
    route: { name: 'services.single' }
  },
  {
    title: 'UI/UX Design Services',
    description: 'Enhance user satisfaction and engagement with our services.',
    image: serviceImg6,
    route: { name: 'services.single' }
  }
]

export const steps: StepType[] = [
  {
    title: 'Discovery and Consultation',
    description: 'We begin by getting to know your unique requirements, goals, and challenges.',
    icon: BIconSearch
  },
  {
    title: 'Planning and Strategy',
    description: 'We define project milestones and deliverables to keep the process on track.',
    icon: BIconBullseye
  },
  {
    title: 'Deployment and Launch',
    description:
      'We ensure a smooth transition to the live, providing support every step of the way.',
    icon: BIconRocketTakeoff
  },
  {
    title: 'Support and Maintenance',
    description: 'We offer ongoing support and maintenance services to keep your software running.',
    icon: BIconHeadset
  }
]

export const projects: ProjectType[] = [
  {
    name: 'Website optimization for techWave',
    category: 'Graphic design',
    image: project1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Transforming ideas into reality',
    category: 'UI/UX design',
    image: project2,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const statData: StatisticType[] = [
  {
    title: 'Worldwide client',
    number: 30,
    prefix: '>',
    suffix: 'K'
  },
  {
    title: 'Analyze business reports',
    number: 99,
    suffix: '%'
  },
  {
    title: 'Worldwide projects',
    number: 350,
    suffix: '+'
  }
]

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
