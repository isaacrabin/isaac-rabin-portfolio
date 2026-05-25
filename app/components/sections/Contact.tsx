'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

import Button from '@/app/components/ui/Button'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Reveal from '@/app/components/animations/Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus('sending')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatus('success')

      setFormData({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (error) {
      console.error(error)

      setStatus('error')

      setTimeout(() => {
        setStatus('idle')
      }, 3000)
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
              <h3 className="text-2xl font-bold mb-4">
                Let's Connect
              </h3>

              <p className="text-text2 mb-8">
                Based in Nairobi, available for remote work
                worldwide.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:0729176560"
                  className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">
                    📞
                  </span>

                  <span>0729-176-560</span>
                </a>

                <a
                  href="mailto:isaacmrongo@gmail.com"
                  className="flex items-center gap-3 text-text2 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">
                    ✉️
                  </span>

                  <span>isaacmrongo@gmail.com</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                disabled={status === 'sending'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors"
              />

              <input
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                disabled={status === 'sending'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors"
              />

              <textarea
                rows={5}
                placeholder="Tell me about the role or project..."
                required
                value={formData.message}
                disabled={status === 'sending'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder-text3 focus:outline-none focus:border-accent transition-colors resize-none"
              />

              <Button
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="text-sm text-green-500">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-500">
                  Failed to send message.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
