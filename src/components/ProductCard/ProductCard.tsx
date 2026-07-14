import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductCardProps {
    title: string;
    category: string;
    rating: number;
    price: number;
    oldPrice?: number;
    discount?: string;
    image: string;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="group overflow-hidden w-58  cursor-pointer rounded-[8px]  bg-white p-4 shadow-[0_20px_60px_-28px_rgba(3,8,31,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-28px_rgba(252,138,6,0.35)]">
            <div className="relative">
                <img
                    src={product.category.imageCover} alt={product.category.title}

                    className="h-56 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full  bg-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg">
                    {product.category.discount}
                </span>

                <button
                    type="button"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-primary-600 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-primary-500 hover:text-white"
                >
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>

            <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                        {product.category.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-slate-600">2</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-main">{product.categorytitle}</h3>
                    <p className="mt-1 text-sm text-slate-500">Elegant everyday comfort with elevated finish.</p>
                </div>

                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-xl font-bold text-primary-700">${product.categoryprice}</p>
                        {product.categoryoldPrice && (
                            <p className="text-sm text-slate-400 line-through">${product.categoryoldPrice}</p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-full bg-main px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-600"
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
}
