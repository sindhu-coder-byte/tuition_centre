const GRADIENTS = [
  ['#4b2e83', '#8a5cd6'],
  ['#caa02e', '#e8c25f'],
  ['#35205e', '#7c4fc7'],
  ['#a67a1e', '#caa02e'],
]

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function InitialsAvatar({ name, size = 88, variant = 0 }) {
  const [from, to] = GRADIENTS[variant % GRADIENTS.length]
  const id = `mentor-avatar-${variant}-${size}`

  return (
    <svg width={size} height={size} viewBox="0 0 88 88" role="img" aria-label={name}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="44" cy="44" r="44" fill={`url(#${id})`} />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Sora, system-ui, sans-serif"
        fontWeight="600"
        fontSize="28"
      >
        {getInitials(name)}
      </text>
    </svg>
  )
}
