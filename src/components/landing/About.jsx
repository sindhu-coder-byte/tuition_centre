import { FiClipboard, FiUsers, FiAward } from 'react-icons/fi'
import { MdSchool } from 'react-icons/md'
import Reveal from '../common/Reveal'
import { whyChooseUs } from '../../data/siteContent'
import styles from './About.module.css'

const ICONS = {
  faculty: MdSchool,
  batch: FiUsers,
  support: FiClipboard,
  results: FiAward,
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Why Vidhyashram</span>
          <h2 className={styles.title}>Built Around Every Student's Progress</h2>
          <p className={styles.description}>
            We combine experienced faculty, small batches, and structured learning support so
            students, parents, and teachers all stay on the same page.
          </p>
        </div>

        <div className={styles.grid}>
          {whyChooseUs.map((item, index) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} className={styles.cardWrap} delay={index * 0.05}>
                <div className={styles.card}>
                  <span className={`${styles.iconBadge} ${index % 2 === 0 ? styles.iconBadgeAccent : styles.iconBadgePrimary}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
