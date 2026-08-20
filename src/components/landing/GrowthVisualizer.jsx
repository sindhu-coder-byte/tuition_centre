import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { growthTrajectory } from '../../data/siteContent'
import styles from './GrowthVisualizer.module.css'

export default function GrowthVisualizer() {
  const [index, setIndex] = useState(growthTrajectory.length - 1)
  const current = growthTrajectory[index]
  const start = growthTrajectory[0].score

  return (
    <section className={`section sectionAlt bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Real Growth"
          title="See the Trajectory, Not Just a Quote"
          description="Drag the slider to see how a typical Zenith student's average score moves over their first six months."
          center
        />

        <Reveal>
          <div className={styles.card}>
            <div className={styles.readout}>
              <div className={styles.readoutBlock}>
                <span className={styles.readoutLabel}>Before</span>
                <span className={styles.readoutValue}>{start}%</span>
              </div>
              <div className={styles.readoutArrow}>→</div>
              <div className={styles.readoutBlock}>
                <span className={styles.readoutLabel}>{current.month}</span>
                <motion.span
                  key={current.score}
                  className={`${styles.readoutValue} ${styles.readoutValueAccent}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {current.score}%
                </motion.span>
              </div>
            </div>

            <div className={styles.chart}>
              {growthTrajectory.map((point, i) => (
                <div key={point.month} className={styles.barCol}>
                  <motion.div
                    className={`${styles.bar} ${i <= index ? styles.barActive : ''}`}
                    data-tip={`${point.month}: ${point.score}%`}
                    initial={false}
                    animate={{ height: `${point.score}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onClick={() => setIndex(i)}
                  />
                  <span className={styles.barLabel}>{point.month.replace('Month ', 'M')}</span>
                </div>
              ))}
            </div>

            <input
              type="range"
              min={0}
              max={growthTrajectory.length - 1}
              step={1}
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className={styles.slider}
              aria-label="Select month"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
