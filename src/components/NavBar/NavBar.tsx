import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
// import Login from '../../pages/Authentication/Login/Login';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'Brands', to: '/brands' },
  { label: 'Deals', to: '/search' },
];

export default function NavBar() {
  return (
    <header className="border-b border-primary-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-lg font-semibold text-white shadow-lg shadow-primary-600/20">
            O
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Order EC</p>
            <p className="text-xs text-slate-500">Premium marketplace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 sm:flex">
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-primary-500" />
            Search products
          </div>
          <Link to="/wishlist" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-primary-200 hover:text-primary-600">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/cart" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-primary-200 hover:text-primary-600">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/Login/Login" className="hidden items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700 sm:flex">
            <FontAwesomeIcon icon={faUser} />
            Sign In

          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}
