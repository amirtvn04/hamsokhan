import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { AuthContext } from '../../context/AuthContext'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) return null
    return data
  }

  const refreshUser = async () => {
    setLoading(true)

    const { data: { session } } = await supabase.auth.getSession()

    if (!session?.user) {
      setUser(null)
      setProfile(null)
      setLoading(false)
      return
    }

    const profileData = await fetchProfile(session.user.id)

    setUser(session.user)
    setProfile(profileData)
    setLoading(false)
  }

  useEffect(() => {
    refreshUser()
  }, [])

  const logout = async () => {
    await supabase.auth.signOut()
    await refreshUser()
  }

  return (
    <AuthContext.Provider value={{user, profile, loading, refreshUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
