import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const gallery = [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80',
];

export default function ProductGallery() {
    return (
        <div className="space-y-4">
            <div className="overflow-hidden rounded-[32px] border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-3 shadow-[0_20px_60px_-24px_rgba(3,8,31,0.25)]">
                <img
                    src={gallery[0]}
                    alt="Featured product"
                    className="h-[420px] w-full rounded-[24px] object-cover"
                />
            </div>

            <div className="flex items-center gap-3">
                {gallery.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        className={`overflow-hidden rounded-2xl border transition ${index === 0 ? 'border-primary-500 ring-2 ring-primary-100' : 'border-transparent'}`}
                    >
                        <img src={image} alt={`View ${index + 1}`} className="h-20 w-20 object-cover" />
                    </button>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-primary-100 bg-white p-3 shadow-sm">
                <button type="button" className="rounded-full bg-primary-50 p-3 text-primary-700 transition hover:bg-primary-100">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="text-sm font-semibold text-slate-500">Swipe through premium visuals</span>
                <button type="button" className="rounded-full bg-primary-50 p-3 text-primary-700 transition hover:bg-primary-100">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
