import { FiStar } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import InitialsAvatar from '../common/InitialsAvatar'
import { testimonials } from '../../data/siteContent'
import styles from './Testimonials.module.css'

function TestimonialCard({ item, index }) {
  return (
    <figure className={styles.card}>
      <div className={styles.cardTop}>
        <InitialsAvatar name={item.name} variant={index} size={44} />
        <figcaption className={styles.caption}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.role}>{item.role}</span>
        </figcaption>
      </div>

      <div className={styles.stars} aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} className={i < item.rating ? styles.starFilled : styles.starEmpty} aria-hidden="true" />
        ))}
      </div>

      <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>

      <span className={styles.chip}>{item.course}</span>
    </figure>
  )
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className={`section sectionAlt bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Community Says"
          center
        />
      </div>

      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {loop.map((item, i) => (
            <div className={styles.marqueeItem} key={`${item.name}-${i}`}>
              <TestimonialCard item={item} index={i % testimonials.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
