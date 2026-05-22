import SectionHeader from '@/app/components/ui/SectionHeader'
import Reveal from '@/app/components/animations/Reveal'
import { experiences } from '@/app/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg2">
      <div className="container-custom">
        <SectionHeader
          tag="Career"
          title="Experience"
          subtitle="A track record of delivering in high-stakes, high-scale environments."
        />
        
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent">
          {experiences.map((exp, index) => (
            <Reveal key={exp.role} delay={index * 150}>
              <div className="relative mb-12 last:mb-0">
                <div className="absolute -left-[2.15rem] top-1 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/30" />
                <div className="text-accent text-xs font-semibold mb-1 tracking-wider">{exp.period}</div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="text-text2 text-sm mb-3">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-text2 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-bg/50 border border-border text-text3">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
