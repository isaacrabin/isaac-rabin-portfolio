'use client'

import { useState, useEffect } from 'react'
import Card from '@/app/components/ui/Card'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Reveal from '@/app/components/animations/Reveal'

const expertiseData = [
  {
    icon: '🖥️',
    title: 'Frontend Engineering',
    description: 'Pixel-perfect, performant UIs built for scale. I translate complex UX designs into maintainable, tested component architectures.',
    tech: ['React 18', 'Angular 17', 'Next.js 14', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    description: 'Resilient, scalable APIs and microservices. I design systems that handle real-world load with clean domain boundaries.',
    tech: ['Java 17/Spring Boot', '.NET 8/C#', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Architecture',
    description: 'From Dockerfile to production. I set up pipelines, monitoring, and infrastructure that keep teams shipping with confidence.',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS/Azure', 'Terraform', 'System Design'],
  },
  {
    icon: '🔗',
    title: 'System Integration',
    description: 'API-driven data exchange across enterprise and digital health platforms. FHIR interoperability and DHIS2-connected reporting pipelines.',
    tech: ['REST APIs', 'GraphQL', 'FHIR', 'DHIS2', 'RabbitMQ', 'Redis'],
  },
]

function ExpertiseCardContent({ item }: { item: typeof expertiseData[0] }) {
  return (
    <>
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-text2 text-sm mb-4">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs rounded-md bg-bg/50 border border-border text-text3">
            {tech}
          </span>
        ))}
      </div>
    </>
  )
}

function DeckCard() {
  const deckItems = expertiseData.slice(2)
  const [stack, setStack] = useState(deckItems.map((_, i) => i))
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaving(true)
      setTimeout(() => {
        setStack(prev => {
          const next = [...prev]
          const top = next.shift()!
          next.push(top)
          return next
        })
        setLeaving(false)
      }, 500)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const getCardStyle = (position: number, isLeaving: boolean): React.CSSProperties => {
    if (position === 0 && isLeaving) {
      return {
        transform: 'translateX(-130%) rotate(-12deg) scale(0.9)',
        opacity: 0,
        zIndex: 10,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
    switch (position) {
      case 0:
        return {
          transform: 'translateX(0px) translateY(0px) scale(1)',
          opacity: 1,
          zIndex: 10,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }
      case 1:
        return {
          transform: 'translateX(12px) translateY(-12px) scale(0.96)',
          opacity: 1,
          zIndex: 9,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }
      default:
        return {
          transform: 'translateX(24px) translateY(-24px) scale(0.92)',
          opacity: 0,
          zIndex: 8,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }
    }
  }

  return (
    <div className="relative w-full h-full overflow-visible">
      {stack.map((cardIndex, position) => {
        const item = deckItems[cardIndex]
        const isTopLeaving = position === 0 && leaving

        return (
          <div
            key={cardIndex}
            className="absolute inset-0 rounded-2xl bg-surface border border-border p-6 flex flex-col"
            style={getCardStyle(position, isTopLeaving)}
          >
            <ExpertiseCardContent item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-bg2">
      <div className="container-custom">
        <SectionHeader
          tag="What I Do"
          title="Full-Stack, End-to-End."
          subtitle="I bridge frontend experience and backend infrastructure — delivering complete, production-ready solutions."
        />


        {/* grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* Cards 1 & 2 — static, full height */}
          {expertiseData.slice(0, 2).map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <Card className="h-full">
                <ExpertiseCardContent item={item} />
              </Card>
            </Reveal>
          ))}

          {/* Card 3 — deck, full height */}
          <Reveal delay={200} className="h-full">
            <div className="relative h-full">
              <DeckCard />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
