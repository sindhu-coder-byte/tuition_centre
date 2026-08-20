import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { friendlyAuthError } from '../../utils/authErrors'
import { DASHBOARD_PATH, ROLES } from '../../utils/constants'
import Button from '../common/Button'
import RoleSelect from './RoleSelect'
import styles from './AuthForm.module.css'

export default function SignupForm() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState(ROLES.STUDENT)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const profile = await signup(email, password, role, name)
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

      <label className={styles.fieldLabel}>I am a</label>
      <RoleSelect value={role} onChange={setRole} />

      <label className={styles.field}>
        <span>Full Name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
        />
      </label>

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
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 6 characters"
        />
      </label>

      <Button type="submit" variant="primary" fullWidth disabled={submitting}>
        {submitting ? 'Creating Account…' : 'Create Account'}
      </Button>
    </form>
  )
}
