import { motion } from 'framer-motion'
import { FiZap } from 'react-icons/fi'
import Button from '../common/Button'
import CountUp from '../common/CountUp'
import GlowBadge from '../common/GlowBadge'
import { stats } from '../../data/siteContent'
import heroImage from '../../assets/hero-classroom.jpg'
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
            Coaching Excellence Since 2014
          </GlowBadge>
          <h1 className={styles.title}>
            Where Ambitious Students Become <span className="gradient-text">Top Performers</span>
          </h1>
          <p className={styles.subtitle}>
            After-school tuition for Grades 8–12 — Math, Science, English, and Computer Science,
            taught in small batches by expert educators with structured tests and doubt support.
          </p>
          <div className={styles.ctas}>
            <Button to="/signup" variant="accent" glow>Enroll Now</Button>
            <Button href="#courses" variant="secondary">Explore Courses</Button>
          </div>
          <a href="#trial" className={styles.trialLink}>Not sure yet? Book a free 30-minute trial class →</a>

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
              alt="A Vidhyashram classroom of students learning together"
              className={styles.heroImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
