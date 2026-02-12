import { supabase } from '../../lib/supabase'

export const authService = {

  async login(email, password) {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  },

  async register({ email, password, fullName, studentId }) {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          student_id: studentId
        }
      }
    })
  },
}
