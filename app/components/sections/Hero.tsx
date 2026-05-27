'use client'

import Reveal from '@/app/components/animations/Reveal'
import profilePic from '@/public/profile.png'
import Image from 'next/image'
import { useState } from 'react'
import { X, Wrench, FolderKanban } from 'lucide-react'
import { getAssetPath } from '@/app/utils/path'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  const handleResume = () => {
    window.open(getAssetPath('/Isaac_Rabin_Resume.pdf'), '_blank')
  }

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <Reveal>
                <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                  <span className="text-text">Hello,</span>
                  <br />
                  <span className="text-text">This is </span>
                  <span className="text-accent">ISAAC</span>
                  <span className="text-text">, I&apos;m a</span>
                  <br />
                  <span className="text-text">Professional </span>
                  <span className="bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent">
                    Software
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent">
                    Engineer.
                  </span>
                </h1>
              </Reveal>

              {/* Intro paragraph */}
              <Reveal delay={200}>
                <div className="mb-8">
                  <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                    About Me
                  </p>
                  <p className="text-text2 leading-relaxed text-sm line-clamp-4">
                    Software Engineer with 6+ years of experience designing and delivering enterprise-grade applications across backend development, frontend development, and system integration. Proficient in Java (Spring Boot), C# (.NET), Angular, React and Next.js, with strong expertise in RESTful API integration, workflow automation, and building scalable end-to-end solutions across application, data, and reporting layers.
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-3 cursor-pointer text-accent text-sm font-medium hover:underline hover:text-accent/80 transition-colors"
                  >
                    Read more →
                  </button>
                </div>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 cursor-pointer rounded-full border border-accent text-text font-semibold text-sm
                      hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
                  >
                    CONTACT ME
                    <span>👤</span>
                  </a>
                  <button
                    onClick={handleResume}
                    className="px-6 py-3 cursor-pointer rounded-full bg-accent2 text-white font-semibold text-sm
                      hover:bg-accent2/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                      transition-all duration-300 flex items-center gap-2"
                  >
                    GET RESUME
                    <span>⬇</span>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Photo */}
            <Reveal direction="right" delay={200}>
              <div className="flex flex-col items-center gap-4">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20 animate-morph">
                  <Image
                    src={profilePic}
                    alt="Isaac Rabin"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/isaac-rabin-9584643a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border
                      text-text2 text-sm hover:border-accent hover:text-accent
                      hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]
                      transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>

                  {/* <a
                    href="https://github.com/isaacrabin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border
                      text-text2 text-sm hover:border-accent hover:text-accent
                      hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]
                      transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    GitHub
                  </a> */}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8
              shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            style={{ borderLeft: '4px solid #2dd4bf' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center
                text-text2 hover:text-accent hover:border-accent transition-all duration-200"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <h2 className="text-3xl font-extrabold text-text mb-1">Isaac Rabin</h2>
            <p className="text-accent font-semibold text-base mb-1">Senior Full-Stack Engineer</p>
            <p className="text-text3 text-sm mb-6">Java · C# · Angular · React · Next.js · Microservices · API Integration</p>

            {/* Overview */}
            <h3 className="text-accent font-bold text-lg mb-3">Overview</h3>
            <p className="text-text2 text-sm leading-relaxed mb-6">
              Software Engineer with 6+ years of experience delivering enterprise-grade solutions across system integration, backend and frontend development, and API-driven architectures. Proficient in Java (Spring Boot), Angular, React, Next.js and C# (.NET), with strong expertise in designing RESTful APIs, integrating distributed systems, and developing scalable end-to-end workflows across application, data, and reporting layers. Experienced in integrating third-party platforms, streamlining interoperability workflows, and supporting complex reporting and data exchange pipelines. Demonstrated ability to diagnose and resolve cross-system issues, support iterative UAT and deployment cycles, and work effectively within agile, cross-functional teams across fast-paced, multi-country delivery environments.
            </p>

            {/* Technologies */}
            <h3 className="text-text font-bold text-lg mb-3 flex items-center gap-2">
              <Wrench size={18} className="text-accent" />
              Technologies &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Java', 'Spring Boot', 'Angular', 'React', 'Next.js', 'C#', '.NET', 'TypeScript',
                'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'REST API', 'FHIR', 'DHIS2',
                'CI/CD', 'GitHub Actions', 'Jenkins'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-border text-text2 text-xs
                    hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Projects */}
            <h3 className="text-text font-bold text-lg mb-3 flex items-center gap-2">
              <FolderKanban size={18} className="text-accent" />
              Key Project Achievements
            </h3>
            <div className="flex flex-col gap-3">
              {[
                {
                  name: 'eBiller Platform',
                  desc: 'End-to-end e-billing solution handling bill presentment, payment orchestration, and reconciliation for thousands of daily transactions.',
                },
                {
                  name: 'Remote Bank Account Opening',
                  desc: 'Customer onboarding workflows across multiple African markets with real-time KYC queue management and role-based access control.',
                },
                {
                  name: 'Customer Self-Service Portal',
                  desc: 'Next.js SSR portal integrated with banking core APIs via Node.js gateway — account management, transfers, and statements.',
                },
              ].map(project => (
                <div key={project.name} className="bg-bg2 border border-border rounded-xl p-4">
                  <p className="text-accent font-semibold text-sm mb-1">{project.name}</p>
                  <p className="text-text2 text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}