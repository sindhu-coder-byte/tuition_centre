import DashboardLayout from '../components/layout/DashboardLayout'
import styles from './Dashboard.module.css'

export default function StudentDashboard() {
  return (
    <DashboardLayout roleLabel="Student">
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>My Courses</h2>
          <p>You are not enrolled in any courses yet. Enrolled subjects will appear here.</p>
        </div>
        <div className={styles.card}>
          <h2>Assignments</h2>
          <p>Upcoming and past assignments will be listed here once available.</p>
        </div>
        <div className={styles.card}>
          <h2>Progress Report</h2>
          <p>Your grades and progress overview will show up here.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
