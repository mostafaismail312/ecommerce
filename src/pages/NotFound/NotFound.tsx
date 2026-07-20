
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(252,138,6,0.16),_transparent_38%),linear-gradient(132deg,_#fff8ed_0%,_#fff_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-primary-100 bg-white/80 p-8 shadow-[0_24px_80px_-24px_rgba(3,8,31,0.28)] backdrop-blur sm:p-10 lg:p-14">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">404 Error</span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-500">Page not found</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-7xl font-black tracking-tight text-primary-600 sm:text-8xl">404</p>
            <h1 className="mt-4 text-3xl font-bold text-main sm:text-4xl">We lost this page in the catalog.</h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              The page you requested may have moved, been removed, or never existed. Let’s take you back to the storefront.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" className="rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
                Back to home
              </Link>
              <Link to="/products" className="rounded-full border border-primary-200 bg-primary-50 px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-100">
                Explore products
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-primary-100 bg-primary-50/60 p-6">
            <div className="rounded-[24px] border border-white/70 bg-white p-6 shadow-sm">
              <div className="h-3 w-28 rounded-full bg-primary-100" />
              <div className="mt-4 space-y-3">
                <div className="h-3 w-full rounded-full bg-slate-100" />
                <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                <div className="h-3 w-4/6 rounded-full bg-slate-100" />
              </div>
              <div className="mt-6 flex gap-3">
                <div className="h-10 flex-1 rounded-full bg-primary-600" />
                <div className="h-10 flex-1 rounded-full border border-primary-200 bg-primary-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
