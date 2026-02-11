import { useState } from 'react'
import { authService } from './auth.service'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setLoading(true)
    setError(null)

    const { error } = await authService.login(email, password)

    setLoading(false)

    if (error) {
      setError(error.message)
      return false
    }

    return true
  }

  return { login, loading, error }
}
