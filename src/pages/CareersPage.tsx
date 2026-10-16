import { CallToAction } from '../components/CallToAction';
import { Eyebrow } from '../components/Eyebrow';
import { PageHero } from '../components/PageHero';
import { usePageMeta } from '../components/usePageMeta';
import { contact } from '../siteData';

export function CareersPage() {
  usePageMeta('Careers', 'Explore security career opportunities with Men in Blue Security in Memphis, Tennessee.');
  const careerMail = `mailto:${contact.email}?subject=${encodeURIComponent('Career interest — Men in Blue Security')}&body=${encodeURIComponent('Hello Men in Blue Security,\n\nI am interested in career opportunities. Please let me know the next steps.\n\nName:\nPhone:\nRelevant experience:\n')}`;

  return (
    <>
      <PageHero eyebrow="Careers" title="Do work that calls for presence, judgment, and care." copy="We’re continually interested in security professionals who value teamwork, reliability, and excellent service." image="/assets/careers.jpg" imageAlt="Two professionals talking across a table" />
      <section className="section section--light">
        <div className="shell career-intro-grid">
          <div><Eyebrow dark>Why Men in Blue</Eyebrow><h2>Bring your experience. Keep building your career.</h2></div>
          <div className="prose"><p className="lead">Working in security can be challenging, dynamic, and meaningful. Strong officers make an immediate contribution to the clients and communities they serve.</p><p>Men in Blue Security looks for enthusiastic, talented, and loyal people who want their professionalism to be recognized. Based on the assignment and opportunity, team members may contribute their experience while preparing for new responsibilities.</p></div>
        </div>
      </section>
      <section className="career-expectations">
        <div className="shell">
          <div className="section-heading section-heading--dark"><div><Eyebrow>What matters here</Eyebrow><h2>Professionalism is more than a uniform.</h2></div><p>Every assignment is different, but the qualities that build trust remain consistent.</p></div>
          <div className="expectation-grid">
            <article><span>01</span><h3>Dependability</h3><p>Show up prepared, communicate clearly, and follow through on the responsibilities of the post.</p></article>
            <article><span>02</span><h3>Sound judgment</h3><p>Stay observant, composed, and ready to respond appropriately to changing conditions.</p></article>
            <article><span>03</span><h3>Service mindset</h3><p>Treat clients, residents, guests, students, and coworkers with professionalism and respect.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--light application-section">
        <div className="shell application-grid">
          <div><Eyebrow dark>Express your interest</Eyebrow><h2>Interested in joining the team?</h2><p>Email Men in Blue Security with a brief introduction and your résumé or CV. The company can then confirm current opportunities and next steps.</p></div>
          <div className="application-card"><span>Career inquiries</span><a href={careerMail}>{contact.email}</a><p>Include your name, phone number, relevant experience, and résumé or CV.</p><a className="button button--gold" href={careerMail}>Email your application</a></div>
        </div>
      </section>
      <CallToAction title="Looking for security coverage instead?" copy="Our client-services team can help you start a conversation about your site or event." />
    </>
  );
}
