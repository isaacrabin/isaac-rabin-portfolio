import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Isaac Rabin | Full-Stack Engineer',
  description: 'Full-Stack Software Engineer specializing in React, Angular, Next.js, Node.js, Java Spring Boot, and .NET C#',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
