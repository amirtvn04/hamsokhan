import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export function AuthGuard({ children }) {
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user) return <Navigate to="/login" />

  return children
}
