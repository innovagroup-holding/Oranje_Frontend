import portfolio1 from '@/assets/images/portfolio/list/01.jpg'
import portfolio2 from '@/assets/images/portfolio/list/02.jpg'
import portfolio3 from '@/assets/images/portfolio/list/03.jpg'
import portfolio4 from '@/assets/images/portfolio/list/04.jpg'

export type CardCaseType = {
  title: string
  description: string
  image: string
 
}

export const cardCases: CardCaseType[] = [
  {
    title: 'aboutPage.section1.title',
    description:
      'aboutPage.section1.subtitle',
    image: portfolio2,
  },
  {
    title: 'aboutPage.section2.title',
    description:
      'aboutPage.section2.subtitle',
    image: portfolio1,
  },
  {
    title: 'aboutPage.section3.title',
    description:
      'aboutPage.section3.subtitle',
    image: portfolio3
  },
  {
    title: 'aboutPage.section4.title',
    description:
      'aboutPage.section4.subtitle',
    image: portfolio4
  },
  {
    title: 'aboutPage.section5.title',
    description:
      'aboutPage.section5.subtitle',
    image: portfolio4
  }
]

