import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_NAME, SITE_NAME_MAIN, SITE_NAME_SUFFIX } from '../../utils/constants'
import { contactInfo } from '../../data/siteContent'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

const LINK_GROUPS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Courses', href: '#courses' },
      { label: 'About Us', href: '#about' },
      { label: 'Mentors', href: '#mentors' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Get Started',
    links: [
      { label: 'Book a Free Trial', href: '#trial' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Download Brochure', href: '#contact' },
      { label: 'Sign Up', href: '/signup' },
      { label: 'Log In', href: '/login' },
    ],
  },
]

export default function Footer() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to know more about Vidhyashram Tuition Centre.")}`

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <span className={styles.brand}>
            <img src={logo} alt="" className={styles.brandMark} />
            <span className={styles.brandText}>
              <span className={styles.brandName}>{SITE_NAME_MAIN}</span>
              <span className={styles.brandSuffix}>{SITE_NAME_SUFFIX}</span>
            </span>
          </span>
          <p className={styles.tagline}>
            Expert educators, small batch sizes, and transparent progress tracking —
            helping students learn with confidence.
          </p>
          <a className={styles.whatsappChip} href={whatsappHref} target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" />
            Chat with us on WhatsApp
          </a>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.heading} className={styles.linkCol}>
            <h4>{group.heading}</h4>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href}>{link.label}</Link>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.linkCol}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <FiMapPin aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
      </div>
    </footer>
  )
}
