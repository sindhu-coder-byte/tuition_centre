import { FiAward, FiStar } from 'react-icons/fi'
import { MdEmojiEvents, MdWorkspacePremium } from 'react-icons/md'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { achievements } from '../../data/siteContent'
import styles from './Achievements.module.css'

const ICONS = {
  trophy: FiAward,
  medal: MdEmojiEvents,
  star: FiStar,
  award: MdWorkspacePremium,
}

export default function Achievements() {
  return (
    <section id="achievements" className={`section sectionAlt bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Track Record"
          title="Achievements We're Proud Of"
          description="Over the years, our students and faculty have earned recognition that reflects the quality of teaching at Vidhyashram."
          center
        />
        <div className={styles.grid}>
          {achievements.map((item, index) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className={styles.card}>
                  <span className={styles.iconBadge}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
