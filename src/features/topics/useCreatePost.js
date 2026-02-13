import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../features/auth/useAuth'

export function useCreatePost() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createPost = async ({ topicId, content }) => {
    if (!user) {
      throw new Error('User not authenticated')
    }

    setLoading(true)
    setError(null)

    const { data, error } = await supabase
      .from('posts')
      .insert({
        topic_id: topicId,
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

  return { createPost, loading, error }
}
