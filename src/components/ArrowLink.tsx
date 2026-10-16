import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function ArrowLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return <Link className={`text-link${light ? ' text-link--light' : ''}`} to={to}>{children}<span aria-hidden="true">→</span></Link>;
}
