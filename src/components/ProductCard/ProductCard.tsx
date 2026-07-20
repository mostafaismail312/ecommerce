import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export interface ProductItem {
    _id: string;
    title: string;
    price: number;
    priceAfterDiscount?: number;
    imageCover: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    category: {
        _id: string;
        name: string;
        slug: string;
        image: string;
    };
}

interface ProductCardProps {
    product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
    const {
        _id,
        title,
        price,
        priceAfterDiscount,
        imageCover,
        ratingsAverage,
        category,
    } = product;
    const hasDiscount =
        !!priceAfterDiscount &&
        !!price &&
        priceAfterDiscount < price;
    const cardPrice = priceAfterDiscount ?? price ?? 0;
    const cardOriginalPrice = hasDiscount ? price : undefined;
    const discountPercentage =
        hasDiscount && price && priceAfterDiscount
            ? Math.round(((price - priceAfterDiscount) / price) * 100)
            : undefined;
    const cardTitle = title ?? "Premium Product";
    const cardCategory = category?.name ?? "Featured";
    const cardRating = ratingsAverage ?? 0;
    const cardImage =
        imageCover ??
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";

    return (
        <article className="group w-full overflow-hidden rounded-[8px] bg-white p-4 shadow-[0_20px_60px_-28px_rgba(3,8,31,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-28px_rgba(252,138,6,0.35)]">
            <div className="relative">
                <Link to={`/products/${_id}`}>
                    <img
                        src={cardImage}
                        alt={cardTitle}
                        className="h-56 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
                    />
                </Link>

                {hasDiscount && (
                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-lg">
                        {discountPercentage}%
                    </span>
                )}

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
                        {cardCategory}
                    </span>

                    <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-slate-600">{cardRating}</span>
                    </div>
                </div>

                <div>
                    <h3 className="line-clamp-1 text-lg font-semibold text-main">
                        {cardTitle}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Elegant everyday comfort with elevated finish.
                    </p>
                </div>

                <div className="flex items-end justify-between gap-3">
                    <div>
                        {cardOriginalPrice ? (
                            <>
                                <p className="text-xl font-bold text-primary-700">
                                    ${cardPrice}
                                </p>

                                <p className="text-sm text-slate-400 line-through">
                                    ${cardOriginalPrice}
                                </p>
                            </>
                        ) : (
                            <p className="text-xl font-bold text-primary-700">
                                ${cardPrice}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-full bg-main px-3 py-1 text-sm font-semibold text-white transition hover:bg-primary-600"
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
}