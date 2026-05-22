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
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-bg2">
      <div className="container-custom">
        <SectionHeader
          tag="What I Do"
          title="Full-Stack, End-to-End."
          subtitle="I bridge frontend experience and backend infrastructure — delivering complete, production-ready solutions."
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Card>
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
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
