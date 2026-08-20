import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '../../utils/constants'
import Button from '../common/Button'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand}>
          {SITE_NAME}
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
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
