import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/usePageMeta';

export function NotFoundPage() {
  usePageMeta('Page not found', 'The requested page could not be found.');
  return <section className="not-found"><div className="shell"><span>404</span><h1>That page isn’t here.</h1><p>The address may have changed, or the page may no longer exist.</p><Link className="button button--gold" to="/">Return home</Link></div></section>;
}
