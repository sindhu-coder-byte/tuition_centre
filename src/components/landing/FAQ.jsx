import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { faqs } from '../../data/siteContent'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className={`section sectionAlt ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Answers to what parents and students usually ask before enrolling. Still have a question? Reach out — we're happy to help."
          center
        />
        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div className={styles.item}>
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        className={styles.answer}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
