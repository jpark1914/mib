import { CallToAction } from '../components/CallToAction';
import { Eyebrow } from '../components/Eyebrow';
import { PageHero } from '../components/PageHero';
import { usePageMeta } from '../components/usePageMeta';

export function AboutPage() {
  usePageMeta('About Us', 'Learn about Men in Blue Security, a Memphis-based armed and unarmed security company founded in 2002.');

  return (
    <>
      <PageHero eyebrow="Our story" title="A local security partner since 2002." copy="Men in Blue Security was built around a simple principle: effective protection begins with understanding the client and the people they serve." image="/assets/partnership.jpg" imageAlt="Two professionals shaking hands" />
      <section className="section section--light">
        <div className="shell story-grid">
          <div><Eyebrow dark>Where we started</Eyebrow><h2>Experience across the work, not just above it.</h2></div>
          <div className="prose">
            <p className="lead">Founded in 2002, Men in Blue Security has focused on the individual needs of every customer we serve.</p>
            <p>The company’s foundation draws on experience across multiple positions in the security industry. That perspective shaped a belief that officers should become a trusted extension of the client—not simply another vendor on the property.</p>
            <p>Over time, Men in Blue Security has served customers ranging from neighborhood businesses to nationally franchised restaurants and hotels, along with multifamily housing, educational institutions, religious organizations, and event operators.</p>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="shell">
          <div className="section-heading section-heading--dark"><div><Eyebrow>What guides the work</Eyebrow><h2>Presence backed by responsibility.</h2></div><p>Protection is a human service. It depends on judgment, consistency, communication, and respect for the environment being served.</p></div>
          <div className="value-grid">
            <article><span>01</span><h3>Client-specific thinking</h3><p>Programs should reflect the setting, risks, routines, and people unique to the organization.</p></article>
            <article><span>02</span><h3>Professional representation</h3><p>Officers represent both Men in Blue Security and the client whose property they protect.</p></article>
            <article><span>03</span><h3>Proactive partnership</h3><p>Ongoing communication helps the program adapt instead of waiting for problems to define it.</p></article>
            <article><span>04</span><h3>Life and property</h3><p>The work is grounded in helping protect people, reduce risk, and preserve the client’s operation.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--light local-section">
        <div className="shell local-grid">
          <img src="/assets/memphis.jpg" alt="Memphis bridge illuminated at night" loading="lazy" />
          <div><Eyebrow dark>Rooted in Memphis</Eyebrow><h2>Local perspective creates direct accountability.</h2><p>Being locally based helps Men in Blue Security stay close to the organizations, neighborhoods, and communities it serves. The objective is long-term partnership—not one-time coverage.</p></div>
        </div>
      </section>
      <CallToAction title="Security works better when the relationship is built to last." />
    </>
  );
}
