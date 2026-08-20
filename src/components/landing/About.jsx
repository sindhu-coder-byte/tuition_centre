import { FiBarChart2, FiUsers, FiAward } from 'react-icons/fi'
import { MdSchool } from 'react-icons/md'
import Reveal from '../common/Reveal'
import RadialProgress from '../common/RadialProgress'
import InitialsAvatar from '../common/InitialsAvatar'
import { mentors, analyticsPreview } from '../../data/siteContent'
import styles from './About.module.css'

const BATCH_SIZE = 8
const FILLED_SEATS = 5

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Why Zenith</span>
          <h2 className={styles.title}>Built Around Every Student's Progress</h2>
          <p className={styles.description}>
            We combine experienced faculty, small batches, and transparent tracking so
            students, parents, and teachers all stay on the same page.
          </p>
        </div>

        <div className={styles.grid}>
          <Reveal className={`${styles.cardWrap} ${styles.large}`}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`${styles.iconBadge} ${styles.iconBadgeAccent}`}>
                  <FiBarChart2 aria-hidden="true" />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Personalised Progress Tracking</h3>
                  <p className={styles.cardText}>
                    Teachers and students both get a live dashboard for assignments, tests, and growth.
                  </p>
                </div>
              </div>

              <div className={styles.dashboardPreview}>
                <div className={styles.miniChart}>
                  <span className={styles.miniChartLabel}>Score trend</span>
                  <div className={styles.miniBars}>
                    {analyticsPreview.testScores.map((entry) => (
                      <span
                        key={entry.test}
                        className={styles.miniBarTip}
                        data-tip={`${entry.test}: ${entry.score}%`}
                        style={{ height: `${entry.score}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.dashboardSide}>
                  <RadialProgress
                    value={analyticsPreview.attendance}
                    size={68}
                    strokeWidth={6}
                    color="var(--color-accent)"
                    trackColor="var(--color-border)"
                    label="Attendance"
                    labelColor="var(--color-heading)"
                  />
                  <div className={styles.upcomingChip}>
                    <span className={styles.upcomingDot} />
                    Physics — Fri, 3:00 PM
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className={`${styles.cardWrap} ${styles.tall}`} delay={0.05}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`${styles.iconBadge} ${styles.iconBadgePrimary}`}>
                  <MdSchool aria-hidden="true" />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Experienced Faculty</h3>
                  <p className={styles.cardText}>Hand-picked for subject mastery and the ability to teach it well.</p>
                </div>
              </div>

              <div className={styles.facultyList}>
                {mentors.map((mentor, index) => (
                  <div key={mentor.name} className={styles.facultyRow}>
                    <InitialsAvatar name={mentor.name} size={40} variant={index} />
                    <div className={styles.facultyInfo}>
                      <span className={styles.facultyName}>{mentor.name}</span>
                      <span className={styles.facultyPill}>{mentor.subject}</span>
                    </div>
                    <span className={styles.facultyYears}>{mentor.experience.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.cardWrap} delay={0.1}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`${styles.iconBadge} ${styles.iconBadgeAccent}`}>
                  <FiUsers aria-hidden="true" />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Small Batch Sizes</h3>
                  <p className={styles.cardText}>Max {BATCH_SIZE} students per batch — no one left behind.</p>
                </div>
              </div>

              <div className={styles.seatGrid}>
                {Array.from({ length: BATCH_SIZE }).map((_, i) => (
                  <span key={i} className={`${styles.seat} ${i < FILLED_SEATS ? styles.seatFilled : ''}`} />
                ))}
              </div>
              <span className={styles.seatCaption}>{FILLED_SEATS}/{BATCH_SIZE} seats filled — {BATCH_SIZE - FILLED_SEATS} spots open</span>
            </div>
          </Reveal>

          <Reveal className={styles.cardWrap} delay={0.15}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`${styles.iconBadge} ${styles.iconBadgePrimary}`}>
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Proven Results</h3>
                  <p className={styles.cardText}>Average grade improvement across every batch.</p>
                </div>
              </div>

              <div className={styles.resultRing}>
                <RadialProgress
                  value={95}
                  size={96}
                  strokeWidth={8}
                  color="var(--color-accent)"
                  trackColor="var(--color-border)"
                  labelColor="var(--color-heading)"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
