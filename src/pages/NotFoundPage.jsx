import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | ISL Wireless Private Limited</title>
      </Helmet>
      <section className="section">
        <div className="container narrow" style={{ textAlign: 'center', paddingTop: '40px' }}>
          <div className="eyebrow">404</div>
          <h1 style={{ marginTop: '20px' }}>Page not found</h1>
          <p className="hero-text" style={{ marginTop: '16px' }}>
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/" className="button button-primary">Back to Home</Link>
            <Link to="/contact" className="button button-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
