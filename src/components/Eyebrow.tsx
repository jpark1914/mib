import type { ReactNode } from 'react';

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`eyebrow${dark ? ' eyebrow--dark' : ''}`}><span aria-hidden="true" />{children}</p>;
}
