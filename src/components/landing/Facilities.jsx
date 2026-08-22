import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { facilities } from '../../data/siteContent'
import styles from './Facilities.module.css'

export default function Facilities() {
  return (
    <section id="facilities" className={`section sectionAlt bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Campus"
          title="Facilities Built for Focused Learning"
          description="A campus designed to keep students comfortable, engaged, and ready to learn — inside and outside the classroom."
          center
        />
        <div className={styles.grid}>
          {facilities.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.05}>
              <div className={styles.card}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.body}>
                  <h3 className={styles.title}>{facility.title}</h3>
                  <p className={styles.text}>{facility.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
