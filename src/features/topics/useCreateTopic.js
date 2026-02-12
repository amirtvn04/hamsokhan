import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../features/auth/useAuth'

export function useCreateTopic() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createTopic = async ({ forumId, title, content }) => {
    if (!user) {
      throw new Error('User not authenticated')
    }

    setLoading(true)
    setError(null)

    const { data, error } = await supabase
      .from('topics')
      .insert({
        forum_id: forumId,
        title,
        content,
        author_id: user.id
      })
      .select()
      .single()

    setLoading(false)

    if (error) {
      setError(error.message)
      throw error
    }

    return data
  }

  return { createTopic, loading, error }
}
