'use client'

import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import ScrollToTop from '@/app/components/layout/ScrollToTop'
import Hero from '@/app/components/sections/Hero'
import Expertise from '@/app/components/sections/Expertise'
import SkillsMarquee from '@/app/components/sections/SkillsMarquee'
import Projects from '@/app/components/sections/Projects'
import Experience from '@/app/components/sections/Experience'
import Contact from '@/app/components/sections/Contact'
import GradientBackground from '@/app/components/ui/GradientBackground'

export default function Home() {
  return (
    <main className="relative">
      <GradientBackground />
      <Navbar />
      <Hero />
      <Expertise />
      <SkillsMarquee />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
