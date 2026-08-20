import { Link } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import { SITE_NAME } from '../utils/constants'
import styles from './AuthPage.module.css'

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.brand}>{SITE_NAME}</Link>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Log in to continue to your dashboard.</p>
        <LoginForm />
        <p className={styles.switch}>
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
