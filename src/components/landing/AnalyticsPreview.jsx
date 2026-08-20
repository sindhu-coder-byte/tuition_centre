import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import RadialProgress from '../common/RadialProgress'
import { analyticsPreview, sectionPhotos } from '../../data/siteContent'
import styles from './AnalyticsPreview.module.css'

const ATTENDANCE_LOG = [true, true, true, false, true, true, true, true, true, false, true, true, true, true]

export default function AnalyticsPreview() {
  return (
    <section className={`section bg-ambient ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <Reveal className={styles.introPhotoWrap}>
            <img src={sectionPhotos.analytics} alt="A family reviewing a student's progress dashboard together" className={styles.introPhoto} />
          </Reveal>
          <SectionHeading
            eyebrow="See It In Action"
            title="Real-Time Progress, For Parents and Students"
            description="Every enrolled family gets a live dashboard like this — test performance, attendance, and overall progress, always up to date."
          />
        </div>

        <Reveal>
          <div className={`${styles.dashboard} bg-dotgrid`}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardDots}>
                <span /><span /><span />
              </div>
              <span className={styles.dashboardTitle}>Student Progress Dashboard</span>
            </div>

            <div className={styles.dashboardBody}>
              <div className={styles.ringsCol}>
                <div className={styles.ringBlock}>
                  <RadialProgress value={analyticsPreview.overallProgress} size={110} strokeWidth={9} color="var(--color-primary)" trackColor="var(--color-border)" labelColor="var(--color-heading)" />
                  <span className={styles.ringLabel}>Overall Progress</span>
                </div>
                <div className={styles.ringBlock}>
                  <RadialProgress value={analyticsPreview.attendance} size={110} strokeWidth={9} color="var(--color-accent)" trackColor="var(--color-border)" labelColor="var(--color-heading)" />
                  <span className={styles.ringLabel}>Attendance</span>
                </div>
              </div>

              <div className={styles.chartsCol}>
                <div className={styles.chartBlock}>
                  <span className={styles.blockLabel}>Test Performance</span>
                  <div className={styles.testBars}>
                    {analyticsPreview.testScores.map((entry) => (
                      <div key={entry.test} className={styles.testBarCol}>
                        <span className={styles.testBarValue}>{entry.score}%</span>
                        <div className={styles.testBarTrack}>
                          <div className={styles.testBarFill} style={{ height: `${entry.score}%` }} />
                        </div>
                        <span className={styles.testBarLabel}>{entry.test}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.chartBlock}>
                  <span className={styles.blockLabel}>Attendance Log — Last 14 Sessions</span>
                  <div className={styles.attendanceLog}>
                    {ATTENDANCE_LOG.map((present, i) => (
                      <span
                        key={i}
                        className={`${styles.logCell} ${present ? styles.logCellPresent : styles.logCellAbsent}`}
                        data-tip={`Session ${i + 1}: ${present ? 'Present' : 'Absent'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
