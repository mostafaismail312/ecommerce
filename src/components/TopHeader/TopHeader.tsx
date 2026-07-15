import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socials = [
    { icon: faFacebookF, label: 'Facebook', href: 'https://facebook.com' },
    { icon: faInstagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: faTwitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: faLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function TopHeader() {
    return (
        <div className="border-b border-primary-100/90 bg-main/95 text-slate-100">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 text-[0.8rem] sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <a href="tel:+201234567890" className="flex items-center gap-2 transition hover:text-primary-300">
                        <FontAwesomeIcon icon={faPhone} className="text-primary-400" />
                        <span>+20 123 456 7890</span>
                    </a>
                    <a href="mailto:support@orderec.com" className="flex items-center gap-2 transition hover:text-primary-300">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary-400" />
                        <span>support@orderec.com</span>
                    </a>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    {socials.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={item.label}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-100 transition hover:border-primary-400 hover:bg-primary-600 hover:text-white"
                        >
                            <FontAwesomeIcon icon={item.icon} className="text-sm" />
                        </a>
                    ))}
                    <a
                        href="mailto:support@orderec.com"
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-semibold text-primary-200 transition hover:bg-primary-600 hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
