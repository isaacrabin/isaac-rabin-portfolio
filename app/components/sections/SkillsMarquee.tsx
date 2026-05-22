'use client'

import { skills } from '@/app/data/skills'
import Reveal from '@/app/components/animations/Reveal'
import { useRef } from 'react'

export default function SkillsMarquee() {
  const duplicatedSkills = [...skills, ...skills, ...skills]
  const row1Ref = useRef<HTMLDivElement>(null)
  const row1CloneRef = useRef<HTMLDivElement>(null)

  const pauseMarquee = () => {
    row1Ref.current?.style.setProperty('animation-play-state', 'paused')
    row1CloneRef.current?.style.setProperty('animation-play-state', 'paused')
  }

  const resumeMarquee = () => {
    row1Ref.current?.style.setProperty('animation-play-state', 'running')
    row1CloneRef.current?.style.setProperty('animation-play-state', 'running')
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container-custom mb-12">
        <Reveal>
          <div className="text-center">
            <p className="text-accent uppercase tracking-[3px] text-sm font-semibold mb-3">Tech Arsenal</p>
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4">
              Tools & Technologies I Master
            </h2>
            <p className="text-text3 max-w-2xl mx-auto">
              Constantly learning and adapting to the latest technologies to deliver cutting-edge solutions
            </p>
          </div>
        </Reveal>
      </div>

      {/* Single marquee row */}
      <div className="relative flex overflow-x-hidden py-4">
        <div
          ref={row1Ref}
          className="animate-marquee whitespace-nowrap flex gap-6"
        >
          {duplicatedSkills.map((skill, idx) => (
            <SkillCard
              key={`r1a-${idx}`}
              skill={skill}
              onMouseEnter={pauseMarquee}
              onMouseLeave={resumeMarquee}
            />
          ))}
        </div>
        <div
          ref={row1CloneRef}
          className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6"
        >
          {duplicatedSkills.map((skill, idx) => (
            <SkillCard
              key={`r1b-${idx}`}
              skill={skill}
              onMouseEnter={pauseMarquee}
              onMouseLeave={resumeMarquee}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  skill,
  onMouseEnter,
  onMouseLeave,
}: {
  skill: { name: string; icon: string }
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="inline-flex flex-col items-center justify-center gap-4 w-40 h-40 flex-shrink-0
        bg-surface border border-border rounded-2xl
        hover:border-accent hover:shadow-[0_0_24px_rgba(59,130,246,0.15)] hover:scale-105
        transition-all duration-300 cursor-default group"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        width={52}
        height={52}
        className="group-hover:scale-110 transition-transform duration-300 object-contain"
      />
      <span className="text-text text-base font-semibold text-center px-2 leading-tight">
        {skill.name}
      </span>
    </div>
  )
}
