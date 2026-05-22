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
                    Software Engineer with 6+ years of experience in system integration, backend development,
                    and API-driven data exchange across enterprise and digital health platforms. Skilled in
                    Java (Spring Boot), Angular, and C# (.NET), with hands-on experience designing and
                    integrating RESTful APIs and building end-to-end workflows across application, data,
                    and reporting layers.
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
              <div className="flex justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20 animate-morph">
                  <Image
                    src={profilePic}
                    alt="Isaac Rabin"
                    className="w-full h-full object-cover object-top"
                  />
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
            <p className="text-text3 text-sm mb-6">(Feb 2023 – Present · Griffin Global Technologies)</p>

            {/* Overview */}
            <h3 className="text-accent font-bold text-lg mb-3">Overview</h3>
            <p className="text-text2 text-sm leading-relaxed mb-6">
              Software Engineer with 6+ years of experience in system integration, backend development,
              and API-driven data exchange across enterprise and digital health platforms. Skilled in
              Java (Spring Boot), Angular, and C# (.NET), with hands-on experience designing and
              integrating RESTful APIs and building end-to-end workflows across application, data,
              and reporting layers. Familiar with FHIR-based interoperability standards and experienced
              configuring and integrating health information systems including DHIS2-connected reporting
              pipelines. Proven ability to troubleshoot complex multi-layer issues, support iterative UAT
              releases, and collaborate effectively in agile delivery teams operating in fast-paced,
              multi-country implementation contexts.
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
              Key Projects
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