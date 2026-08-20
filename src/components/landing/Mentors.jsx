import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import InitialsAvatar from '../common/InitialsAvatar'
import Reveal from '../common/Reveal'
import { mentors } from '../../data/siteContent'
import styles from './Mentors.module.css'

export default function Mentors() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="mentors" className={`section bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Learn From Experienced Mentors"
          description="Every mentor at Zenith brings years of classroom and exam-coaching experience, hand-picked for subject mastery and the ability to teach it well."
          center
        />
        <div className={styles.grid}>
          {mentors.map((mentor, index) => {
            const isOpen = expanded === mentor.name
            return (
              <Reveal key={mentor.name} delay={index * 0.05}>
                <button
                  className={styles.card}
                  onClick={() => setExpanded(isOpen ? null : mentor.name)}
                  aria-expanded={isOpen}
                >
                  {mentor.photo ? (
                    <img src={mentor.photo} alt={mentor.name} className={styles.photo} />
                  ) : (
                    <InitialsAvatar name={mentor.name} variant={index} size={88} />
                  )}
                  <h3 className={styles.name}>{mentor.name}</h3>
                  <span className={styles.subject}>{mentor.subject}</span>
                  <span className={styles.experience}>{mentor.experience}</span>
                  <p className={styles.bio}>{mentor.bio}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        className={styles.fullBio}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        {mentor.fullBio}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <span className={styles.expandHint}>
                    {isOpen ? 'Show less' : 'Read more'}
                    <FiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
