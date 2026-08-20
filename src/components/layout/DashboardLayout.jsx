import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { SITE_NAME } from '../../utils/constants'
import Button from '../common/Button'
import styles from './DashboardLayout.module.css'

export default function DashboardLayout({ roleLabel, children }) {
  const { userProfile, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <span className={styles.brand}>{SITE_NAME}</span>
          <div className={styles.right}>
            <span className={styles.badge}>{roleLabel}</span>
            <Button variant="ghost" onClick={handleLogout}>Log Out</Button>
          </div>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <p className={styles.welcome}>
          Welcome back, <strong>{userProfile?.displayName || userProfile?.email}</strong>
        </p>
        {children}
      </main>
    </div>
  )
}
