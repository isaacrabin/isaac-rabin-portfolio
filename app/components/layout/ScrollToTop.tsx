'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scroll}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-surface border border-border text-text2 hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
    >
      ↑
    </button>
  )
}
