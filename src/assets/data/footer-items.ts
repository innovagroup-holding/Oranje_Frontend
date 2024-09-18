import type { BSIconType } from '@/types'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {
  BIconBoxArrowUpRight,
  BIconFileEarmarkTextFill,
  BIconPuzzleFill,
  BIconStickiesFill
} from 'bootstrap-icons-vue'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: BSIconType
}

export const quickLinks: FooterLinkType[] = [
  {
    name: 'footer.links.link1',
    link: ''
  },
  {
    name: 'footer.links.link2',
    link: 'about-us'
  },
  {
    name: 'footer.links.link3',
    link: 'contact.v1'
  },
  {
    name: 'footer.links.link4',
    link: 'portfolio.fine-fragrance',
  },
  {
    name: 'footer.links.link5',
    link: ''
  },
  {
    name: 'footer.links.link6',
    link: ''
  },
 
]

export const communityLinks: FooterLinkType[] = [
  {
    name: 'Documents'
  },
  {
    name: 'Supports',
    icon: BIconBoxArrowUpRight
  },
 
  {
    name: 'Privacy Policy'
  },
  
  {
    name: 'Terms & condition',
    link: 'about-us'
  }
]

export const followOnIcons = [
  { icon: faFacebookF, variant: 'bg-facebook' },
  { icon: faInstagram, variant: 'bg-instagram' },
  // { icon: faTwitter, variant: 'bg-twitter' },
  { icon: faLinkedinIn, variant: 'bg-linkedin' },
  { icon: faYoutube, variant: 'bg-youtube' }
]

export const contactDetails = {
  address: '1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.',
  number: '(251) 854-6308',
  email: 'help@example.com',
  open: 'Mon - Fri: 09:00 - 21:00',
  close: 'Sat - Sun: Closed'
}

export const footerQuickLinks3: FooterLinkType[] = [
  {
    name: 'About us',
    link: 'about-us'
  },
  {
    name: 'Contact us',
    link: 'contact.v1'
  },
  {
    name: 'Services',
    link: 'contact.v1'
  },
  {
    name: 'Case studies',
    link: 'contact.v1'
  },
  {
    name: 'Team',
    link: 'contact.v1'
  }
]

export const footerCommunityLinks3 = [
  {
    title: 'Documentation',
    icon: BIconFileEarmarkTextFill,
    variant: 'bg-warning'
  },
  {
    title: 'Snippets',
    icon: BIconStickiesFill,
    variant: 'bg-success'
  },
  {
    title: 'Components',
    icon: BIconPuzzleFill,
    variant: 'bg-info'
  }
]

export const quickLinks6: FooterLinkType[] = [
  {
    name: 'About us',
    link: 'about-us'
  },
  {
    name: 'Contact us',
    link: 'contact.v1'
  },
 

  {
    name: 'Become a partner',
    link: 'contact.v1'
  },
  
]
