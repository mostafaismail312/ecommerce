import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faCartShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

type WishlistItem = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
};

const wishlist: WishlistItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    image: "https://via.placeholder.com/300x300",
    price: 99,
    oldPrice: 129,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Fashion",
    image: "https://via.placeholder.com/300x300",
    price: 79,
    oldPrice: 99,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Accessories",
    image: "https://via.placeholder.com/300x300",
    price: 199,
    rating: 4.9,
  },
];

export default function WishlistTab() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {wishlist.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-500 shadow-md transition hover:bg-red-500 hover:text-white">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4 p-6">
            <div>
              <p className="text-sm text-primary-600">
                {product.category}
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {product.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400"
              />

              <span className="font-medium">
                {product.rating}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary-600">
                ${product.price}
              </span>

              {product.oldPrice && (
                <span className="text-slate-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3 font-semibold text-white transition hover:bg-primary-700">
              <FontAwesomeIcon icon={faCartShopping} />
              Move to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}