import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  disabled,
  fullWidth,
  glow,
  onClick,
}) {
  const className = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${glow ? styles.glow : ''}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
