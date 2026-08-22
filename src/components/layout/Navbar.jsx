import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE_NAME_MAIN, SITE_NAME_SUFFIX } from '../../utils/constants'
import Button from '../common/Button'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

const LINKS = [
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(null)

  useEffect(() => {
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="" className={styles.brandMark} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{SITE_NAME_MAIN}</span>
            <span className={styles.brandSuffix}>{SITE_NAME_SUFFIX}</span>
          </span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.href === activeHref ? styles.linkActive : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <Button to="/login" variant="ghost">Log In</Button>
            <Button to="/signup" variant="primary" glow>Sign Up</Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <Button to="/login" variant="ghost">Log In</Button>
          <Button to="/signup" variant="primary">Sign Up</Button>
        </div>

        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
