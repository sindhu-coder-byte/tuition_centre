import { Link } from 'react-router-dom'
import SignupForm from '../components/auth/SignupForm'
import { SITE_NAME } from '../utils/constants'
import styles from './AuthPage.module.css'

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.brand}>{SITE_NAME}</Link>
        <h1 className={styles.title}>Create Your Account</h1>
        <p className={styles.subtitle}>Join as a student or teacher to get started.</p>
        <SignupForm />
        <p className={styles.switch}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}
