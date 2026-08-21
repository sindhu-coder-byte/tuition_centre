import { FiClipboard, FiHelpCircle, FiBriefcase, FiMic, FiUsers, FiMap, FiLifeBuoy } from 'react-icons/fi'
import { MdSportsSoccer } from 'react-icons/md'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { activities } from '../../data/siteContent'
import styles from './Activities.module.css'

const ICONS = {
  test: FiClipboard,
  quiz: FiHelpCircle,
  workshop: FiBriefcase,
  guest: FiMic,
  sports: MdSportsSoccer,
  meet: FiUsers,
  trip: FiMap,
  camp: FiLifeBuoy,
}

export default function Activities() {
  return (
    <section id="activities" className={`section bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Beyond the Syllabus"
          title="Classes, Assessments & Activities"
          description="Learning at Vidhyashram goes beyond the textbook — regular assessments, workshops, and events keep students engaged all year round."
          center
        />
        <div className={styles.grid}>
          {activities.map((activity, index) => {
            const Icon = ICONS[activity.icon]
            return (
              <Reveal key={activity.title} delay={index * 0.04}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.iconBadge}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span className={styles.freqBadge}>{activity.frequency}</span>
                  </div>
                  <h3 className={styles.title}>{activity.title}</h3>
                  <p className={styles.text}>{activity.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
