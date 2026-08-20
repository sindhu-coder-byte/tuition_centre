import DashboardLayout from '../components/layout/DashboardLayout'
import styles from './Dashboard.module.css'

export default function TeacherDashboard() {
  return (
    <DashboardLayout roleLabel="Teacher">
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>My Classes</h2>
          <p>You have no classes assigned yet. New batches will appear here.</p>
        </div>
        <div className={styles.card}>
          <h2>Student Progress</h2>
          <p>Track assignments, test scores, and attendance once batches are set up.</p>
        </div>
        <div className={styles.card}>
          <h2>Schedule</h2>
          <p>Your upcoming classes and sessions will be listed here.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
