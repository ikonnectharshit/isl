import { Helmet } from 'react-helmet-async'
import SectionHero from '../components/SectionHero'

const pillars = [
  {
    title: 'Engineering-led approach',
    text: 'We align communication technologies with operational requirements, environmental conditions, and integration realities.',
  },
  {
    title: 'Deployment awareness',
    text: 'Our solution design is intended to be executable in the field, with practical attention to topology, rollout, and maintainability.',
  },
  {
    title: 'Critical infrastructure mindset',
    text: 'We work on applications where uptime, redundancy, visibility, and safety are central to system acceptance.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | ISL Wireless Private Limited</title>
        <meta property="og:title" content="About | ISL Wireless Private Limited" />
        <meta property="og:url" content="https://www.islwireless.com/about" />
      </Helmet>

      <SectionHero
        eyebrow="About ISL Wireless"
        title="Practical engineering for high-availability communication systems."
        text="ISL Wireless Private Limited focuses on wireless connectivity, hybrid network resilience, surveillance integration, and smart monitoring solutions for demanding operational environments."
        ctaLabel="Talk to our team"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container split-grid">
          <div>
            <h2>What we do</h2>
            <p>
              We design and position communication solutions for railway signaling and telecom applications,
              industrial wireless deployments, field surveillance, utility infrastructure, and centralized monitoring systems.
            </p>
            <p>
              Our work spans hybrid fiber-radio architecture, auto-changeover concepts, industrial-grade site connectivity,
              SNMP/NMS visibility, and solution packs intended to support technical evaluation and implementation.
            </p>
          </div>
          <div className="card emphasis-card">
            <h3>Operating principle</h3>
            <p>
              Build solutions that are technically sound, deployment-aware, and commercially presentable for real infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-head">
          <div>
            <div className="eyebrow">Core Pillars</div>
            <h2>How we approach projects</h2>
          </div>
        </div>
        <div className="container card-grid three">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card feature-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
