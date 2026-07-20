import { Link } from 'react-router-dom';
import type { AuthShellProps } from '../../types/AuthShellType';
import webShopping from "../../assets/illustrations/undraw_web-shopping_xd5k.svg";

export default function AuthShell({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerHref,
  illustrationImage = webShopping,
  illustrationAlt = "Illustration",
  illustrationCaption = "Access your wishlist, saved addresses, and order history in one beautifully simple dashboard.",
}: AuthShellProps) {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[linear-gradient(135deg,rgba(255,138,6,0.08),rgba(255,255,255,1)_55%,rgba(255,248,237,0.95))] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-primary-100/70 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left side: illustration + caption only, no colored background */}
          <div className="relative hidden flex-col items-center justify-center gap-8 bg-primary-50/40 px-10 py-12 lg:flex">
            <img
              key={illustrationImage}
              src={illustrationImage}
              alt={illustrationAlt}
              className="w-full max-w-sm transition-opacity duration-500"
            />
            <p
              key={illustrationCaption}
              className="max-w-sm text-center text-base leading-7 text-slate-600 transition-opacity duration-500"
            >
              {illustrationCaption}
            </p>
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