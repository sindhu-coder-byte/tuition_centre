import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, description, center }) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
