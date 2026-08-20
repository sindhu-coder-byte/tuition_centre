import styles from './GlowBadge.module.css'

export default function GlowBadge({ icon, children, tone = 'accent', className = '' }) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
