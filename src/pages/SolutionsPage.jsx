import { Helmet } from 'react-helmet-async'
import SectionHero from '../components/SectionHero'

const solutions = [
  {
    title: 'Railway S&T Connectivity',
    items: [
      'Hybrid OFC + wireless communication architecture',
      'Station yard deployment concepts',
      'Auto-changeover and redundancy logic',
      'Backhaul design for operational continuity',
    ],
  },
  {
    title: 'Industrial & Mining Wireless Networks',
    items: [
      'Point-to-point and point-to-multipoint networks',
      'Harsh-environment field deployment support',
      'Remote site connectivity and last-mile integration',
      'Scalable backbone concepts for large facilities',
    ],
  },
  {
    title: 'Surveillance & Smart Monitoring',
    items: [
      'Thermal camera surveillance',
      'Pantograph / OHE / traction-side monitoring concepts',
      'CCTV backbone connectivity',
      'Centralized dashboard architecture',
    ],
  },
  {
    title: 'NMS / SNMP / IoT Integration',
    items: [
      'Device monitoring and visibility planning',
      'MIB-oriented integration approach',
      'Client-branded dashboard concepts',
      'Alerting and operational support workflows',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Solutions | ISL Wireless Private Limited</title>
        <meta property="og:title" content="Solutions | ISL Wireless Private Limited" />
        <meta property="og:url" content="https://www.islwireless.com/solutions" />
      </Helmet>

      <SectionHero
        eyebrow="Solutions"
        title="Connectivity, redundancy, and operational visibility tailored to infrastructure use cases."
        text="Our offerings are structured around uptime-sensitive environments requiring rugged hardware, resilient topology, and centralized monitoring."
        ctaLabel="Discuss your requirement"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container card-grid two">
          {solutions.map((solution) => (
            <div key={solution.title} className="card solution-card">
              <h3>{solution.title}</h3>
              <ul className="clean-list">
                {solution.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
