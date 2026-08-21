import { FiCalendar, FiUserCheck, FiEdit3, FiPlayCircle } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { admissionSteps } from '../../data/siteContent'
import styles from './AdmissionProcess.module.css'

const ICONS = {
  trial: FiCalendar,
  meet: FiUserCheck,
  enroll: FiEdit3,
  start: FiPlayCircle,
}

export default function AdmissionProcess() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Getting Started"
          title="How Admission Works"
          description="From your first trial class to your first regular batch — here's exactly what happens."
          center
        />
        <div className={styles.steps}>
          {admissionSteps.map((step, index) => {
            const Icon = ICONS[step.icon]
            return (
              <Reveal key={step.title} delay={index * 0.08} className={styles.stepWrap}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <span className={styles.stepIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
