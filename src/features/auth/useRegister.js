import { useState } from 'react'
import { authService } from './auth.service'

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const register = async (data) => {
    setLoading(true)
    setError(null)

    const { error } = await authService.register(data)

    setLoading(false)

    if (error) {
      setError(error.message)
      return false
    }

    return true
  }

  return { register, loading, error }
}
