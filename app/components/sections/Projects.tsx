import Card from '@/app/components/ui/Card'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Reveal from '@/app/components/animations/Reveal'
import { projects } from '@/app/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <SectionHeader
          tag="Selected Work"
          title="Notable Project Achievements"
          subtitle="Production systems I've collaborated in requirements gathering, designing, building, and deployment in the fintech and banking space."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Card className="h-full flex flex-col">
                <div className="h-32 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center text-5xl mb-4">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text2 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs text-text3">#{tech}</span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
