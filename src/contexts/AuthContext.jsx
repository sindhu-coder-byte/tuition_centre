import { createContext, useContext, useState } from 'react'
import {
  getSessionProfile,
  signupDummyUser,
  loginDummyUser,
  logoutDummyUser,
} from '../utils/dummyAuthStore'

const AuthContext = createContext(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}

export function AuthProvider({ children }) {
  const [userProfile, setUserProfile] = useState(() => getSessionProfile())
  const loading = false

  function signup(email, password, role, displayName) {
    const profile = signupDummyUser(email, password, role, displayName)
    setUserProfile(profile)
    return profile
  }

  function login(email, password) {
    const profile = loginDummyUser(email, password)
    setUserProfile(profile)
    return profile
  }

  function logout() {
    logoutDummyUser()
    setUserProfile(null)
  }

  const value = {
    currentUser: userProfile,
    userProfile,
    loading,
    signup,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
