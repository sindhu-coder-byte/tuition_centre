import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Button from './Button'
import { saveInquiry } from '../../utils/dummyLeadStore'
import styles from './InquiryDrawer.module.css'

export default function InquiryDrawer({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    saveInquiry(form)
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', interest: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Quick inquiry"
          >
            <div className={styles.header}>
              <h3>Quick Inquiry</h3>
              <button className={styles.close} onClick={handleClose} aria-label="Close">
                <FiX />
              </button>
            </div>

            {submitted ? (
              <div className={styles.success}>
                <p>Thanks, {form.name || 'there'}! We'll get back to you shortly.</p>
                <Button variant="secondary" fullWidth onClick={handleClose}>Close</Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.subtitle}>Leave your details and a counsellor will call you back.</p>
                <label className={styles.field}>
                  <span>Name</span>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </label>
                <label className={styles.field}>
                  <span>Phone</span>
                  <input name="phone" required value={form.phone} onChange={handleChange} placeholder="Your phone number" />
                </label>
                <label className={styles.field}>
                  <span>Interested In</span>
                  <input name="interest" value={form.interest} onChange={handleChange} placeholder="e.g. Grade 10 Mathematics" />
                </label>
                <Button type="submit" variant="primary" fullWidth>Request a Callback</Button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
