import { Eyebrow } from './Eyebrow';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={imageAlt} />
      <div className="page-hero__shade" />
      <div className="shell page-hero__content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
