import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiGift } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { offer } from '../../data/siteContent'
import styles from './OfferPopup.module.css'

const DISMISS_KEY = 'vidhyashram_offer_dismissed'

export default function OfferPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return
    const timer = setTimeout(() => setOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setOpen(false)
    sessionStorage.setItem(DISMISS_KEY, '1')
  }

  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={dismiss}
        >
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={offer.title}
          >
            <button className={styles.close} onClick={dismiss} aria-label="Close offer">
              <FiX />
            </button>

            <div className={styles.icon}>
              <FiGift aria-hidden="true" />
            </div>

            <span className={styles.eyebrow}>{offer.eyebrow}</span>
            <h3 className={styles.title}>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>

            <Link to="/signup" className={styles.cta} onClick={dismiss}>
              {offer.cta}
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
