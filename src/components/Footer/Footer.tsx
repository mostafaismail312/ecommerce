import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="border-t border-primary-100/70 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.6fr_0.6fr] lg:px-8 lg:py-14">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-lg font-semibold text-white">
              O
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Order EC</p>
              <p className="text-sm text-slate-400">Premium marketplace</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Discover curated products, exclusive offers, and seamless delivery experiences designed for modern shoppers.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">Quick links</h3>
          <div className="space-y-2 text-sm">
            <Link to="/categories" className="block transition hover:text-primary-300">Categories</Link>
            <Link to="/brands" className="block transition hover:text-primary-300">Brands</Link>
            <Link to="/search" className="block transition hover:text-primary-300">Search</Link>
            <Link to="/orders" className="block transition hover:text-primary-300">Orders</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">Contact</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-400" />
              <span>12 Orchard St, New York, NY</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary-400" />
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary-400" />
              <span>hello@orderec.com</span>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            {[faFacebookF, faInstagram, faTwitter].map((icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-primary-500 hover:text-primary-300">
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 Order EC. All rights reserved.
      </div>
    </footer>
  );
}
