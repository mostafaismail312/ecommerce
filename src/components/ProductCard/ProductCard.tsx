import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ProductItem } from "../../types/productType";
import { useWishlist } from "../../hooks/useWishlit";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Services/Wishlit.service";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product?: ProductItem;
  title?: string;
  category?: string;
  rating?: number;
  price?: number;
  oldPrice?: number;
  discount?: string;
  image?: string;
}

export default function ProductCard({
  product,
  title,
  category,
  rating,
  price,
  oldPrice,
  discount,
  image,
}: ProductCardProps) {
  const hasDiscount =
    Boolean(
      product?.priceAfterDiscount &&
      product.price &&
      product.priceAfterDiscount < product.price,
    ) || Boolean(oldPrice && price && oldPrice > price);
  const currentPrice = product?.priceAfterDiscount ?? price ?? 0;
  const originalPrice =
    product?.priceAfterDiscount && product.price ? product.price : oldPrice;
  const discountPercentage =
    product?.priceAfterDiscount && product.price
      ? Math.round(
        ((product.price - product.priceAfterDiscount) / product.price) * 100,
      )
      : undefined;
  const cardTitle = title ?? product?.title ?? "Premium Product";
  const cardCategory = category ?? product?.category?.name ?? "Featured";
  const cardRating = rating ?? product?.ratingsAverage ?? 0;
  const cardImage =
    image ??
    product?.imageCover ??
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";
  const cardPrice = typeof currentPrice === "number" ? currentPrice : 0;
  const cardOriginalPrice =
    typeof originalPrice === "number" ? originalPrice : undefined;
  //   const handleWishlist = () => {
  //     toggleWishlist(product?._id)
  //     if (!product?._id) return;

  //     if (isFavorite) {
  //       removeFromWishlist(product._id);
  //       setIsFavorite(false);
  //     } else {
  //       addToWishlist(product._id);
  //       setIsFavorite(true);
  //     }
  //   };
  const { isInWishlist, toggleWishlist, isAdding, isRemoving } = useWishlist();
  const isFavorite = product?._id ? isInWishlist(product._id) : false;

  return (
    <article className="group w-full overflow-hidden rounded-[8px] bg-white p-4 shadow-[0_20px_60px_-28px_rgba(3,8,31,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-28px_rgba(252,138,6,0.35)]">
      <div className="relative">
        <Link to={`/products/${product?._id}`}>
          <img
            src={cardImage}
            alt={cardTitle}
            className="h-56 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-lg">
            {discountPercentage
              ? `${discountPercentage}%`
              : (discount ?? "Sale")}
          </span>
        )}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border bg-white border-white transition group"
          onClick={() => {
            if (!product?._id) return;
            toggleWishlist(product._id);
          }}
          disabled={isAdding || isRemoving}
        >
          <FontAwesomeIcon
            icon={isFavorite ? faHeartSolid : faHeartRegular}
            className={`transition ${isFavorite
              ? "text-red-500"
              : "text-slate-500 group-hover:text-orange-300"
              }`}
          />
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
          <h3 className="text-lg font-semibold line-clamp-1 text-main">
            <Link to={`/products/${product?._id}`}>{cardTitle}</Link>
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Elegant everyday comfort with elevated finish.
          </p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            {/* <p className="text-xl font-bold text-primary-700">${product.priceAfterDiscount}</p>
                        {product.price && (
                            <p className="text-sm text-slate-400 line-through">${product.price}</p>
                        )} */}
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
              <p className="text-xl font-bold text-primary-700">${cardPrice}</p>
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
