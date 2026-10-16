import { Link } from 'react-router-dom';
import { CallToAction } from '../components/CallToAction';
import { Eyebrow } from '../components/Eyebrow';
import { PageHero } from '../components/PageHero';
import { usePageMeta } from '../components/usePageMeta';
import { services } from '../siteData';

export function ServicesPage() {
  usePageMeta('Security Services', 'Explore security officers, campus security, special events, multi-family living, and loss-prevention services.');

  return (
    <>
      <PageHero eyebrow="Services" title="Coverage shaped around the assignment." copy="Different environments call for different kinds of presence, preparation, and communication. Our service programs begin with the realities of your site." image="/assets/security-officer.jpg" imageAlt="Security officer at a building entrance" />
      <section className="section section--light">
        <div className="shell services-intro">
          <Eyebrow dark>Five areas of focus</Eyebrow>
          <h2>Start with the setting. Build from there.</h2>
          <p className="lead">Men in Blue Security serves organizations with needs ranging from everyday site coverage to high-attendance events. We work to match the assignment, the environment, and the officer.</p>
        </div>
      </section>
      <section className="service-details">
        {services.map((service, index) => (
          <article className={`service-detail${index % 2 ? ' service-detail--reverse' : ''}`} id={service.id} key={service.id}>
            <div className="service-detail__image"><img src={service.image} alt={service.imageAlt} loading={index ? 'lazy' : 'eager'} /></div>
            <div className="service-detail__content">
              <span className="service-number">{service.number}</span>
              <h2>{service.name}</h2>
              <p className="service-detail__lead">{service.summary}</p>
              <p>{service.detail}</p>
              <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <Link className="text-link" to="/contact">Discuss this service <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </section>
      <CallToAction />
    </>
  );
}
