import { ROLES } from '../../utils/constants'
import styles from './AuthForm.module.css'

export default function RoleSelect({ value, onChange }) {
  return (
    <div className={styles.roleGroup}>
      {[
        { role: ROLES.STUDENT, label: 'Student' },
        { role: ROLES.TEACHER, label: 'Teacher' },
      ].map((option) => (
        <button
          key={option.role}
          type="button"
          className={`${styles.roleOption} ${value === option.role ? styles.roleOptionActive : ''}`}
          onClick={() => onChange(option.role)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
