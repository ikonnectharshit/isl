import { Helmet } from 'react-helmet-async'
import SectionHero from '../components/SectionHero'

const industries = [
  {
    title: 'Railways & Metro',
    text: 'Signal & telecom connectivity, field resilience, surveillance backbone, and operator visibility for rail infrastructure.',
  },
  {
    title: 'Mining',
    text: 'Rugged communications for dispersed assets, operational zones, and harsh environmental conditions.',
  },
  {
    title: 'Power & Utilities',
    text: 'Network and monitoring architecture for substations, electrical assets, and infrastructure requiring high visibility.',
  },
  {
    title: 'Industrial Campuses',
    text: 'Wireless backbone, CCTV transport, and central monitoring for large sites and manufacturing environments.',
  },
  {
    title: 'Transport Infrastructure',
    text: 'Connectivity support for corridors, yards, depots, and remote operational nodes.',
  },
  {
    title: 'Public Sector Projects',
    text: 'Solution packs and implementation-oriented concepts for government and institutional infrastructure programs.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries | ISL Wireless Private Limited</title>
        <meta property="og:title" content="Industries | ISL Wireless Private Limited" />
        <meta property="og:url" content="https://www.islwireless.com/industries" />
      </Helmet>

      <SectionHero
        eyebrow="Industries"
        title="Sector-aligned solutions for infrastructure-heavy environments."
        text="We focus on domains where communication, visibility, and continuity directly affect operations, safety, and response capability."
      />

      <section className="section">
        <div className="container card-grid three">
          {industries.map((item) => (
            <div key={item.title} className="card feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
