import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
};

export default function AuthShell({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthShellProps) {
  const highlights = [
    'Fast checkout with saved addresses and cards',
    'Live order tracking from dispatch to delivery',
    'Personalized recommendations for every visit',
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[linear-gradient(135deg,rgba(255,138,6,0.08),rgba(255,255,255,1)_55%,rgba(255,248,237,0.95))] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-primary-100/70 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden flex-col justify-between overflow-hidden bg-primary-600 px-8 py-10 text-white lg:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-100" />
                Trusted online shopping
              </div>
              <div className="max-w-lg">
                <h1 className="text-4xl font-semibold leading-tight">
                  Create your account and shop with{' '}
                  <span className="text-primary-100">confidence</span>.
                </h1>
                <p className="mt-4 text-sm leading-7 text-primary-50/90">
                  Access your wishlist, saved addresses, and order history in one beautifully simple dashboard.
                </p>
              </div>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-50 backdrop-blur">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-100" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur">
              <span className="font-medium">Need help?</span>
              <Link to="/" className="inline-flex items-center gap-2 font-semibold text-primary-100 hover:text-white">
                Visit support <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center px-5 py-8 sm:px-8 lg:px-10">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-lg font-semibold text-primary-600 shadow-sm lg:mx-0">
                  O
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p>
              </div>
              {children}
              <div className="mt-8 text-center text-sm text-slate-500">
                {footerText}{' '}
                <Link to={footerHref} className="font-semibold text-primary-600 transition hover:text-primary-700">
                  {footerLinkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
