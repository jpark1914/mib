import { Link } from 'react-router-dom';
import { ArrowLink } from '../components/ArrowLink';
import { Eyebrow } from '../components/Eyebrow';
import { usePageMeta } from '../components/usePageMeta';
import { contact, services } from '../siteData';

export function HomePage() {
  usePageMeta('Memphis Security Services', 'Site-specific armed and unarmed security services for Memphis organizations, events, schools, and communities.');

  return (
    <>
      <section className="hero">
        <div className="hero-media" role="img" aria-label="Modern multi-family residential building" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <Eyebrow>Local. Prepared. Professional.</Eyebrow>
          <h1>Protection tailored to your people and property.</h1>
          <p>Armed and unarmed security programs designed around the real needs of your site, event, school, or community.</p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/contact">Request a security consultation</Link>
            <ArrowLink to="/services" light>Explore our services</ArrowLink>
          </div>
        </div>
        <div className="shell hero-proof" aria-label="Key service information">
          <div><strong>Since 2002</strong><span>Locally established</span></div>
          <div><strong>Armed + unarmed</strong><span>Options matched to the assignment</span></div>
          <div><strong>Site-specific</strong><span>Security built around your operation</span></div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell intro-grid">
          <div><Eyebrow dark>A better kind of security partner</Eyebrow><h2>Visible protection. Thoughtful service.</h2></div>
          <div className="intro-copy">
            <p className="lead">Men in Blue Security is a locally based company serving organizations ranging from neighborhood businesses to restaurants, hotels, schools, events, and residential communities.</p>
            <p>Our role goes beyond filling a post. We aim to become an extension of each client—learning the environment, matching the right officers to the assignment, and building a program that protects life and property with professionalism.</p>
            <ArrowLink to="/about">Learn about Men in Blue</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="shell">
          <div className="section-heading section-heading--dark">
            <div><Eyebrow>What we protect</Eyebrow><h2>Security services built for the setting.</h2></div>
            <p>One-size-fits-all security misses the point. Each program should reflect the risks, routines, and people unique to the property.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className={`service-card${index > 2 ? ' service-card--wide' : ''}`} key={service.id}>
                <img src={service.image} alt={service.imageAlt} loading={index > 1 ? 'lazy' : 'eager'} />
                <div className="service-card__body">
                  <span>{service.number}</span><h3>{service.name}</h3><p>{service.summary}</p>
                  <Link to={`/services#${service.id}`}>View service <b aria-hidden="true">↗</b></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="button button--outline" to="/services">View all service details</Link></div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell approach-grid">
          <div className="approach-photo">
            <img src="/assets/memphis.jpg" alt="Memphis bridge and residential community at night" loading="lazy" />
            <div><strong>Memphis-based</strong><span>Local perspective. Direct accountability.</span></div>
          </div>
          <div>
            <Eyebrow dark>How partnership works</Eyebrow>
            <h2>A security plan should start by listening.</h2>
            <div className="steps">
              {[
                ['01', 'Understand the site', 'Clarify risks, routines, priorities, and the people the program serves.'],
                ['02', 'Shape the assignment', 'Recommend coverage, officer profile, post expectations, and supervision.'],
                ['03', 'Deploy with purpose', 'Place qualified professionals who understand the setting and the client.'],
                ['04', 'Stay engaged', 'Use ongoing communication to keep service aligned as conditions change.'],
              ].map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="career-band">
        <div className="career-image" role="img" aria-label="Two professionals in conversation" />
        <div className="career-panel">
          <Eyebrow>Build a career with purpose</Eyebrow>
          <h2>Professional presence starts with professional people.</h2>
          <p>We’re interested in dependable security professionals who value service, teamwork, and doing the job with care.</p>
          <Link className="button button--outline" to="/careers">Explore career opportunities</Link>
        </div>
      </section>

      <section className="contact-preview">
        <div className="shell contact-grid">
          <div><Eyebrow>Start a conversation</Eyebrow><h2>Let’s talk about what security needs to look like for you.</h2></div>
          <div className="contact-card">
            <div><span>Call</span><a href={contact.phoneHref}>{contact.phoneDisplay}</a></div>
            <div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            <div><span>Visit</span><address>{contact.addressLines[0]}<br />{contact.addressLines[1]}</address></div>
            <a className="button button--gold" href={contact.calendly}>Schedule a consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}
