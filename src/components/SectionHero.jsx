import { Link } from 'react-router-dom'

export default function SectionHero({ eyebrow, title, text, ctaLabel, ctaHref }) {
  return (
    <section className="section-hero">
      <div className="container narrow">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="section-hero-text">{text}</p>
        {ctaLabel && ctaHref ? (
          <Link className="button button-primary" to={ctaHref}>{ctaLabel}</Link>
        ) : null}
      </div>
    </section>
  )
}
