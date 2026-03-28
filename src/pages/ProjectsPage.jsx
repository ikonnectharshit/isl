import { Helmet } from 'react-helmet-async'
import SectionHero from '../components/SectionHero'

const projects = [
  {
    title: 'Auto-Changeover for Railway S&T Circuits',
    text: 'Hybrid OFC and wireless communication design for continuity across operational railway sections and station environments.',
  },
  {
    title: 'Mining Connectivity Architecture',
    text: 'PtP and PtMP network concepts for wide-area industrial and mining environments requiring rugged backhaul and distributed access.',
  },
  {
    title: 'Thermal Surveillance Platform',
    text: 'Integrated thermal monitoring and field visibility with centralized dashboard-led supervision.',
  },
  {
    title: 'Substation and Corridor Monitoring',
    text: 'Surveillance and connectivity concepts for electrical infrastructure, traction systems, and linear assets.',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | ISL Wireless Private Limited</title>
        <meta property="og:title" content="Projects | ISL Wireless Private Limited" />
        <meta property="og:url" content="https://www.islwireless.com/projects" />
      </Helmet>

      <SectionHero
        eyebrow="Representative Work"
        title="Solution concepts aligned to real operational requirements."
        text="The portfolio below reflects the types of infrastructure-oriented solution packs and technical concepts ISL Wireless can support."
        ctaLabel="Contact ISL Wireless"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container card-grid two">
          {projects.map((project) => (
            <div key={project.title} className="card project-card">
              <div className="eyebrow">Case Study</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
