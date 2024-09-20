import card1 from '@/assets/about us sections/1.jpg'
import card2 from '@/assets/about us sections/2.jpg'
import card3 from '@/assets/about us sections/3.jpg'
import card4 from '@/assets/about us sections/4.jpg'
import card5 from '@/assets/about us sections/5.jpg'
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
    image: card1,
  },
  {
    title: 'aboutPage.section2.title',
    description:
      'aboutPage.section2.subtitle',
    image: card2,
  },
  {
    title: 'aboutPage.section3.title',
    description:
      'aboutPage.section3.subtitle',
    image: card3
  },
  {
    title: 'aboutPage.section4.title',
    description:
      'aboutPage.section4.subtitle',
    image: card4
  },
  {
    title: 'aboutPage.section5.title',
    description:
      'aboutPage.section5.subtitle',
    image: card5
  }
]

