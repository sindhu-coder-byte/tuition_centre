import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { friendlyAuthError } from '../../utils/authErrors'
import { DASHBOARD_PATH } from '../../utils/constants'
import Button from '../common/Button'
import styles from './AuthForm.module.css'

export default function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const profile = await login(email, password)
      if (!profile) {
        setError('We could not find your profile. Please contact support.')
        return
      }
      navigate(DASHBOARD_PATH[profile.role])
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}

      <label className={styles.field}>
        <span>Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label className={styles.field}>
        <span>Password</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </label>

      <Button type="submit" variant="primary" fullWidth disabled={submitting}>
        {submitting ? 'Logging In…' : 'Log In'}
      </Button>
    </form>
  )
}
