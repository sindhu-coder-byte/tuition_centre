import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import { contactInfo } from '../../data/siteContent'
import { saveInquiry } from '../../utils/dummyLeadStore'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    saveInquiry(data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Have Questions? Let's Talk."
                description="Reach out for admissions, batch timings, or a free counselling session."
              />
              <ul className={styles.info}>
                <li><strong>Address</strong><span>{contactInfo.address}</span></li>
                <li><strong>Phone</strong><span>{contactInfo.phone}</span></li>
                <li><strong>Email</strong><span>{contactInfo.email}</span></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@example.com" />
              </label>
              <label className={styles.field}>
                <span>Message</span>
                <textarea name="message" rows={4} required placeholder="How can we help?" />
              </label>
              <Button type="submit" variant="primary" fullWidth>
                {submitted ? 'Message Sent' : 'Send Message'}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
