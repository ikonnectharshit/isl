import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHero from '../components/SectionHero'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | ISL Wireless Private Limited</title>
        <meta property="og:title" content="Contact | ISL Wireless Private Limited" />
        <meta property="og:url" content="https://www.islwireless.com/contact" />
      </Helmet>

      <SectionHero
        eyebrow="Contact"
        title="Let's discuss your communication or monitoring requirement."
        text="Share your project scope, site environment, and deployment objectives. ISL Wireless can help shape a practical architecture for implementation."
      />

      <section className="section">
        <div className="container contact-grid">

          {/* Contact details card */}
          <div className="card contact-card">
            <h3>ISL Wireless Private Limited</h3>
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:info@islwireless.com">info@islwireless.com</a>
            </div>
            <div className="contact-item">
              <strong>Focus</strong>
              <span>Railway S&amp;T, wireless backhaul, redundancy, surveillance, smart monitoring, industrial integration</span>
            </div>
            <div className="contact-item">
              <strong>Engagement</strong>
              <span>Consultation, solution design, deployment planning, and technical coordination</span>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="card enquiry-card">
            <h3>Send an Enquiry</h3>

            {status === 'success' ? (
              <div className="form-success">
                <p>Thank you — your message has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your name"
                      value={fields.name} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      value={fields.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={fields.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject" name="subject" type="text"
                      placeholder="e.g. Railway connectivity solution"
                      value={fields.subject} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Describe your project scope, site environment, and key requirements…"
                    value={fields.message} onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  className="button button-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
