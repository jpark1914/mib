import { FormEvent, useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { PageHero } from '../components/PageHero';
import { usePageMeta } from '../components/usePageMeta';
import { contact } from '../siteData';

export function ContactPage() {
  usePageMeta('Contact', 'Contact Men in Blue Security in Memphis for security services, scheduling, and general inquiries.');
  const [notice, setNotice] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const phone = String(form.get('phone') ?? '');
    const email = String(form.get('email') ?? '');
    const interest = String(form.get('interest') ?? 'Security services');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`${interest} inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`);
    setNotice('Your email application will open with the inquiry prefilled. Review it before sending.');
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Start with a conversation about the site." copy="Tell us what you’re protecting, what concerns you, and what successful coverage needs to accomplish." image="/assets/memphis.jpg" imageAlt="Memphis skyline and bridge at night" />
      <section className="section section--light contact-page-section">
        <div className="shell contact-page-grid">
          <div>
            <Eyebrow dark>Contact Men in Blue</Eyebrow>
            <h2>Direct answers from a local team.</h2>
            <p className="lead">For service questions, scheduling, and general inquiries, contact the team using the information below or prepare an email with the inquiry form.</p>
            <div className="contact-list">
              <div><span>Phone</span><a href={contact.phoneHref}>{contact.phoneDisplay}</a></div>
              <div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
              <div><span>Office</span><address>{contact.addressLines[0]}<br />{contact.addressLines[1]}</address></div>
              <div><span>Schedule</span><a href={contact.calendly}>Book a consultation ↗</a></div>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>Service inquiry</span><h3>What can we help you protect?</h3><p>This static-site form prepares an email in your default mail application.</p></div>
            <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
            <div className="form-row"><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label></div>
            <label>What are you interested in?<select name="interest" defaultValue="Security services"><option>Security services</option><option>Special-event coverage</option><option>Campus security</option><option>Multi-family security</option><option>Loss prevention</option><option>Career opportunities</option><option>General question</option></select></label>
            <label>Tell us about the need<textarea name="message" rows={6} required /></label>
            <button className="button button--gold" type="submit">Prepare email inquiry</button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
