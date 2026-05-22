import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-block text-center cursor-pointer'
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    outline: 'border border-border2 text-text hover:border-accent hover:text-accent hover:-translate-y-1 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
