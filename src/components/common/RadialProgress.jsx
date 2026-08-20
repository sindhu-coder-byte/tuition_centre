import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from './CountUp'
import styles from './RadialProgress.module.css'

export default function RadialProgress({
  value,
  size = 88,
  strokeWidth = 8,
  color = 'var(--color-accent)',
  trackColor = 'rgba(255, 255, 255, 0.14)',
  label,
  labelColor,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div ref={ref} className={styles.wrap} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={strokeWidth} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference * (1 - value / 100) : circumference }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        />
      </svg>
      <div className={styles.center} style={{ color: labelColor }}>
        <strong>{inView ? <CountUp value={value} suffix="%" /> : '0%'}</strong>
        {label && <span>{label}</span>}
      </div>
    </div>
  )
}
