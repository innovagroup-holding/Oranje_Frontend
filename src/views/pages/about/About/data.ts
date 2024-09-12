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
    title: 'Our Expertise:',
    description:
      'At Oranje Fragrance & Flavor, we pride ourselves on our expertise in developing distinctive scents and flavors. Our creations are carefully crafted to ensure they not only meet but exceed the highest standards of quality. We employ advanced techniques and industry best practices to deliver exceptional fragrance and flavor solutions tailored to your needs.',
    image: portfolio2,
  },
  {
    title: 'Our Expansion:',
    description:
      'In November 2022, Oranje Fragrance & Flavor expanded its reach to become a key distributor in the Netherlands, Saudi Arabia, and Turkey. This strategic move has allowed us to bring our unique products and innovative solutions to new markets, strengthening our commitment to serving a global clientele with excellence and reliability.',
    image: portfolio1,
  },
  {
    title: 'Our Commitment:',
    description:
      'We are dedicated to contributing to the success of our clients by providing top-tier fragrance and flavor solutions. Understanding that each product requires a unique approach, we offer tailored solutions that align with market demands and client needs. Whether developing a signature scent for fine fragrances or crafting a distinctive flavor for food products, our team is committed to achieving excellence in every project.',
    image: portfolio3
  },
  {
    title: 'Innovation and Trends:',
    description:
      'Staying ahead of industry trends is crucial to our success. At Oranje Fragrance & Flavor, we continuously explore new advancements in fragrance and flavor technology to ensure our offerings remain at the cutting edge. We are committed to providing solutions that reflect the latest trends and meet the evolving needs of our clients.',
    image: portfolio4
  },
  {
    title: 'Vision and Values:',
    description:
      'Our vision is to be a global leader in the fragrance and flavor industry, known for our creativity, quality, and commitment to excellence. We value integrity, collaboration, and customer satisfaction, and we strive to build long-lasting relationships with our clients based on trust and mutual success.',
    image: portfolio4
  }
]

