'use client'

import { useState } from 'react'
import Button from '@/app/components/ui/Button'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Reveal from '@/app/components/animations/Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Using FormSubmit.co or similar free service for static sites
    // You can replace with your preferred service
    try {
      const response = await fetch('https://formsubmit.co/ajax/isaacmrongo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false'
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Build Something."
          subtitle="Open to senior full-stack roles, consulting engagements, and exciting collaborations."
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-text2 mb-8">
                Based in Nairobi, available for remote work worldwide. I'm always interested in hearing about new opportunities and challenging projects.
              </p>
              
              <div className="space-y-4">
                <a href="tel:0729176560" className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200">
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">📞</span>
                  <span>0729-176-560</span>
                </a>
                <a href="mailto:isaacmrongo@gmail.com" className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200">
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">✉️</span>
                  <span>isaacmrongo@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/isaac-rabin-588131400" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200">
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">💼</span>
                  <span>linkedin.com/in/isaac-rabin</span>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200">
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">🐙</span>
                  <span>github.com/yourusername</span>
                </a>
                <div className="flex items-center gap-3 text-text2">
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">📍</span>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'sending'}
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'sending'}
              />
              <textarea
                rows={5}
                placeholder="Tell me about the role or project..."
                required
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'sending'}
              />
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
              
              {status === 'success' && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm">Failed to send. Please email me directly.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
