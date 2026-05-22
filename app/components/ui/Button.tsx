import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, href, className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-block text-center'
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1',
    outline: 'border border-border2 text-text hover:border-accent hover:text-accent hover:-translate-y-1 bg-transparent'
  }

  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}
