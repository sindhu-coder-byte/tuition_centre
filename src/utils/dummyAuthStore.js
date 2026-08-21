const USERS_KEY = 'vidhyashram_users'
const SESSION_KEY = 'vidhyashram_session_uid'

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function sanitize(user) {
  if (!user) return null
  const { password: _password, ...profile } = user
  return profile
}

export function getSessionProfile() {
  const uid = localStorage.getItem(SESSION_KEY)
  if (!uid) return null
  const user = getUsers().find((u) => u.uid === uid)
  return sanitize(user)
}

export function signupDummyUser(email, password, role, displayName) {
  const users = getUsers()
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('An account with this email already exists. Try logging in instead.')
  }

  const user = {
    uid: crypto.randomUUID(),
    email,
    password,
    displayName,
    role,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  saveUsers(users)
  localStorage.setItem(SESSION_KEY, user.uid)
  return sanitize(user)
}

export function loginDummyUser(email, password) {
  const users = getUsers()
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (!user) throw new Error('No account found with this email.')
  if (user.password !== password) throw new Error('Incorrect password. Please try again.')

  localStorage.setItem(SESSION_KEY, user.uid)
  return sanitize(user)
}

export function logoutDummyUser() {
  localStorage.removeItem(SESSION_KEY)
}
