import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://jmjblfimcydkvmlntdzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptamJsZmltY3lka3ZtbG50ZHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyODI2NzksImV4cCI6MjA5Mzg1ODY3OX0.I7SeDPnsyTVNosb6ViMrYD6gaCsAyclLUDmiNVlJEBQ'
)
