import { usePageMeta } from '../components/usePageMeta';

export function AccessibilityPage() {
  usePageMeta('Accessibility', 'Accessibility statement for the Men in Blue Security website.');
  return (
    <section className="legal-page"><div className="shell legal-content"><p className="kicker">Accessibility</p><h1>Accessibility statement</h1><p className="lead">Men in Blue Security is committed to providing a website that is usable by as many people as possible.</p><h2>Our approach</h2><p>This website is designed with semantic page structure, keyboard-accessible navigation, visible focus states, responsive layouts, readable typography, meaningful image descriptions, reduced-motion support, and color contrast intended to meet WCAG 2.2 Level AA.</p><h2>Feedback</h2><p>If you encounter an accessibility barrier or need information in another format, please call <a href="tel:+19015902924">(901) 590-2924</a> or email <a href="mailto:meninbluellc@gmail.com">meninbluellc@gmail.com</a>. Please describe the page and the assistance you need.</p><h2>Ongoing improvement</h2><p>Accessibility should be reviewed again when third-party forms, analytics, scheduling tools, or new content are added.</p></div></section>
  );
}
