import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-surface border border-border rounded-2xl p-6 transition-all duration-300
      ${hover ? 'hover:border-accent hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
