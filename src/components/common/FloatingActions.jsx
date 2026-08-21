import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { contactInfo } from '../../data/siteContent'
import styles from './FloatingActions.module.css'

export default function FloatingActions({ onOpenInquiry }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hi! I\'d like to know more about Vidhyashram Tuition Centre.')}`

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className={styles.desktopCluster}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button className={styles.inquiryBtn} onClick={onOpenInquiry} aria-label="Quick inquiry">
              <FiMail aria-hidden="true" />
            </button>
            <a
              className={styles.whatsappBtn}
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <Link to="/signup" className={styles.enrollBtn}>
              Enroll Now
              <FiArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.mobileBar}>
        <a className={styles.mobileWhatsapp} href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <FaWhatsapp aria-hidden="true" />
        </a>
        <Link to="/signup" className={styles.mobileEnroll}>
          Enroll Now
        </Link>
      </div>
    </>
  )
}
