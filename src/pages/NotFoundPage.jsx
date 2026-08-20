import Button from '../components/common/Button'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>This page doesn't exist.</p>
      <Button to="/" variant="primary">Back to Home</Button>
    </div>
  )
}
