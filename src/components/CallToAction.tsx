import { Link } from 'react-router-dom';

export function CallToAction({
  title = 'Let’s talk about what security needs to look like for you.',
  copy = 'Tell us about your site, event, or community. We’ll start with the needs of the environment and the people in it.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner">
        <div><span>Start a conversation</span><h2>{title}</h2><p>{copy}</p></div>
        <Link className="button button--gold" to="/contact">Request a consultation</Link>
      </div>
    </section>
  );
}
