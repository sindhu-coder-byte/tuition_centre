import { motion } from 'framer-motion'
import { FiZap } from 'react-icons/fi'
import Button from '../common/Button'
import CountUp from '../common/CountUp'
import GlowBadge from '../common/GlowBadge'
import { stats } from '../../data/siteContent'
import heroImage from '../../assets/hero-image.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <GlowBadge icon={<FiZap aria-hidden="true" />} tone="accent" className={styles.eyebrow}>
            Premium coaching, personal attention
          </GlowBadge>
          <h1 className={styles.title}>
            Where Ambitious Students Become <span className="gradient-text">Top Performers</span>
          </h1>
          <p className={styles.subtitle}>
            Zenith Tuition Centre pairs expert educators with small batch sizes
            and personalised progress tracking — for every subject, every grade, every goal.
          </p>
          <div className={styles.ctas}>
            <Button to="/signup" variant="accent" glow>Enroll Now</Button>
            <Button href="#courses" variant="secondary">Explore Courses</Button>
          </div>

          <dl className={`${styles.stats} bg-dotgrid`}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt><CountUp value={stat.value} suffix={stat.suffix} /></dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className={styles.visualStage}>
            <div className={styles.glowBlob} aria-hidden="true" />
            <img
              src={heroImage}
              alt="Happy students learning together, with progress-tracking and achievement highlights from Zenith Tuition Centre"
              className={styles.heroImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
