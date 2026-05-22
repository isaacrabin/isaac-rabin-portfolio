'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface RevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }: RevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${inView ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directions[direction]}`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
