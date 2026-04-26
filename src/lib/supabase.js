import { createClient } from '@supabase/supabase-js'

// These are your specific credentials
const supabaseUrl = 'https://hepcunoxttdgcbjwvqpl.supabase.co'
const supabaseAnonKey = 'sb_publishable_paZa_WykQGNSPR4q94gu_w_PeNH8HV7'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)