import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { DASHBOARD_PATH } from '../utils/constants'
import Spinner from '../components/common/Spinner'

export default function ProtectedRoute({ allowedRole, children }) {
  const { currentUser, userProfile, loading } = useAuth()

  if (loading) return <Spinner fullPage />

  if (!currentUser || !userProfile) {
    return <Navigate to="/login" replace />
  }

  if (userProfile.role !== allowedRole) {
    return <Navigate to={DASHBOARD_PATH[userProfile.role]} replace />
  }

  return children
}
