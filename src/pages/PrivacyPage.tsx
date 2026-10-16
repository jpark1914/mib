import { usePageMeta } from '../components/usePageMeta';

export function PrivacyPage() {
  usePageMeta('Privacy', 'Privacy information for the Men in Blue Security website.');
  return (
    <section className="legal-page"><div className="shell legal-content"><p className="kicker">Privacy</p><h1>Privacy information</h1><p className="lead">This page is a launch-ready structure that should be reviewed against the final analytics, form provider, hosting configuration, and legal requirements before publication.</p><h2>Information you provide</h2><p>If you contact Men in Blue Security by phone, email, scheduling service, or a future website form, the company may receive the contact information and message details you choose to provide.</p><h2>How information is used</h2><p>Information may be used to respond to service inquiries, discuss employment opportunities, schedule conversations, and operate the website.</p><h2>Third-party services</h2><p>The current scheduling link opens Calendly, and email links open the visitor’s selected email service. Those services operate under their own privacy practices. Any analytics or hosted form service added before launch should be identified here.</p><h2>Contact</h2><p>Questions about website privacy may be sent to <a href="mailto:meninbluellc@gmail.com">meninbluellc@gmail.com</a>.</p></div></section>
  );
}
