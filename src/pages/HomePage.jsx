import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const stats = [
  ['Hybrid Networks', 'Fiber + wireless resilience for critical operations'],
  ['Industrial Grade', 'Deployment-oriented architectures for harsh environments'],
  ['Integrated Visibility', 'Dashboards, surveillance, SNMP, and smart monitoring'],
]

const solutions = [
  {
    title: 'Railway S&T Connectivity',
    text: 'Mission-critical network design for signaling and telecom applications using fiber, radio, and auto-changeover logic.',
  },
  {
    title: 'Industrial & Mining Networks',
    text: 'Point-to-point and point-to-multipoint wireless architecture for mines, plants, campuses, and large field assets.',
  },
  {
    title: 'Smart Monitoring Platforms',
    text: 'Thermal surveillance, OHE/pantograph monitoring, CCTV integration, and centralized operator dashboards.',
  },
]

const sectors = ['Indian Railways', 'Metro & Transit', 'Mining', 'Power Utilities', 'Industrial Campuses', 'Public Infrastructure']

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>ISL Wireless Private Limited — Critical Connectivity &amp; Monitoring Solutions</title>
        <meta property="og:title" content="ISL Wireless Private Limited — Critical Connectivity & Monitoring Solutions" />
        <meta property="og:url" content="https://www.islwireless.com/" />
      </Helmet>

      <section className="hero hero-home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Critical Communication Infrastructure</div>
            <h1>Reliable wireless solutions for railways, industry, and mission-critical operations.</h1>
            <p className="hero-text">
              ISL Wireless Private Limited delivers engineered connectivity, redundancy, surveillance,
              and monitoring systems designed around uptime, operational clarity, and field execution.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">Request a Consultation</Link>
              <Link to="/solutions" className="button button-secondary">Explore Solutions</Link>
            </div>
          </div>

          <div className="hero-panel-grid">
            <div className="panel panel-large">
              <div className="panel-label">Core Focus</div>
              <h3>Communication resilience for high-availability environments</h3>
              <p>
                Hybrid fiber-radio networks, auto-changeover architectures, smart monitoring systems,
                and deployment-ready technical solutions.
              </p>
            </div>
            <div className="panel panel-dark">
              <div className="panel-label">Applications</div>
              <ul>
                <li>Railway S&amp;T circuits</li>
                <li>Station yard networks</li>
                <li>Thermal surveillance</li>
                <li>Industrial backhaul</li>
              </ul>
            </div>
            <div className="panel">
              <div className="panel-label">Delivery Model</div>
              <ul>
                <li>Requirement mapping</li>
                <li>Architecture & BOM</li>
                <li>Deployment planning</li>
                <li>Integration support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid three">
          {stats.map(([title, text]) => (
            <div key={title} className="card stat-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-head">
          <div>
            <div className="eyebrow">Solutions</div>
            <h2>Focused offerings for connectivity, redundancy, and monitoring.</h2>
          </div>
          <Link to="/solutions" className="text-link">View all solutions</Link>
        </div>
        <div className="container card-grid three">
          {solutions.map((item) => (
            <div key={item.title} className="card feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <div className="eyebrow">Industries</div>
            <h2>Built for sectors where communication failure is not an option.</h2>
            <p>
              Our solutions are adaptable across railway, industrial, utility, and infrastructure domains
              where ruggedness, visibility, and fault tolerance are essential.
            </p>
          </div>
          <div className="badge-grid">
            {sectors.map((sector) => (
              <div key={sector} className="badge-card">{sector}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-grid middle">
          <div>
            <div className="eyebrow light">Why ISL Wireless</div>
            <h2>From concept to deployment, with a sharp focus on reliability.</h2>
            <p>
              We structure solutions around uptime, deployment feasibility, integration clarity, and
              sector-specific field realities rather than generic product positioning.
            </p>
          </div>
          <div className="checklist">
            <div>Requirement assessment & use-case mapping</div>
            <div>Architecture, hardware, and solution planning</div>
            <div>Documentation, deployment support, and scaling</div>
            <div>Monitoring, control, and integration alignment</div>
          </div>
        </div>
      </section>
    </>
  )
}
